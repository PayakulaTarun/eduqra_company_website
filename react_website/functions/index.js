const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// Setup Nodemailer (Example using Gmail)
// You should use environment variables for actual credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'eduqratech@gmail.com',
    pass: process.env.GMAIL_PASS 
  }
});

/**
 * Triggered when a new user is created in Firebase Auth.
 */
exports.sendWelcomeEmail = functions.auth.user().onCreate(async (user) => {
  const email = user.email;
  const displayName = user.displayName || 'Learner';

  const mailOptions = {
    from: '"Eduqra Team" <eduqratech@gmail.com>',
    to: email,
    subject: `Welcome to Eduqra, ${displayName}!`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto;">
        <h1 style="color: #6366f1;">Welcome to the Future of Education!</h1>
        <p>Hello ${displayName},</p>
        <p>Thank you for joining Eduqra. We are thrilled to have you as part of our community of forward-thinking learners.</p>
        <p>At Eduqra, we are on a mission to democratize high-quality education using AI. You now have access to:</p>
        <ul>
          <li>Specialized AI-matched mentors</li>
          <li>Adaptive learning engines</li>
          <li>Real-time skill analytics</li>
        </ul>
        <p>Ready to start? <a href="https://eduqra-official.web.app/login">Login to your dashboard here.</a></p>
        <footer style="margin-top: 50px; border-top: 1px solid #eee; padding-top: 20px;">
          <p>Best regards,<br>The Eduqra Team</p>
        </footer>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Welcome email sent to: ${email}`);
  } catch (error) {
    console.error("Error sending welcome email: ", error);
  }
});
