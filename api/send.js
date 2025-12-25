

// const express = require('express');
// const nodemailer = require('nodemailer');
// const dotenv = require('dotenv');
// const cors = require('cors');

// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(cors());

// // Health check
// app.get('/api', (req, res) => {
//   res.send('✅ Backend Running on Vercel');
// });

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'jprafull40@gmail.com',
//     pass: process.env.EMAIL_PASS,
//   },
// });

// app.post('/api/send', async (req, res) => {
//   const { name, email, message } = req.body;

//   try {
//     await transporter.sendMail({
//       from: email,
//       to: 'jprafull40@gmail.com',
//       subject: `Portfolio Contact: ${name}`,
//       text: message,
//     });

//     res.status(200).send('✅ Message sent successfully!');
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('❌ Failed to send message');
//   }
// });

// module.exports = app;




const nodemailer = require("nodemailer");

module.exports = async function handler(req, res) {
  // Handle CORS and preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "jprafull40@gmail.com",
        pass: process.env.EMAIL_PASS, // Make sure this is set in Vercel!
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <jprafull40@gmail.com>`,
      to: "jprafull40@gmail.com",
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      text: `You have a new message:\n\nName: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
    });

    return res.status(200).json({ success: true, message: "Email sent!" });
  } catch (err) {
    console.error("MAIL ERROR:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
};