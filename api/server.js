// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors()); 

// --- NEW CODE START ---
// This handles the browser visit to http://localhost:3033/
app.get('/', (req, res) => {
    res.send('✅ Backend Running...');
});
// --- NEW CODE END ---

// Create the transporter with YOUR Gmail credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jprafull40@gmail.com', // Your email
    pass: process.env.EMAIL_PASS   // You must create this App Password (instructions below)
  },
});

// Route to handle email sending
app.post('/api/send', async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email, // The user's email who is contacting you
    to: 'jprafull40@gmail.com', // WHERE THE EMAIL GOES (To You)
    subject: `Portfolio Contact: Message from ${name}`,
    text: `You have a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully');
    res.status(200).send('✅ Message sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send message.');
  }
});

const PORT = process.env.PORT || 3033;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});