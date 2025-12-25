

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
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "jprafull40@gmail.com",
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <jprafull40@gmail.com>`,
      to: "jprafull40@gmail.com",
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("MAIL ERROR:", err);
    return res.status(500).json({ error: "Email failed" });
  }
};
