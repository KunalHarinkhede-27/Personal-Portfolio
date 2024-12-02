const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

// Route to send email
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  console.log("SMTP User:", process.env.SMTP_USER); // To verify if the email is being read from .env
  console.log("SMTP Password:", process.env.SMTP_PASS); // Same for the password

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // Using the environment variable for host
      port: process.env.SMTP_PORT, // Using the environment variable for port
      secure: process.env.SMTP_PORT == 465, // If port 465, then secure
      auth: {
        user: process.env.SMTP_USER, // Use the SMTP_USER environment variable
        pass: process.env.SMTP_PASS, // Use the SMTP_PASS environment variable
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL, // Recipient email from .env
      subject: `New Contact Form Submission from ${name}`,
      text: `You have received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send the message." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
