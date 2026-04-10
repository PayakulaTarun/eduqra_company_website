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
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: auto; padding: 0; background-color: #f9fafb;">
  <!-- Container -->
  <div style="background-color: #ffffff; padding: 30px; border-radius: 12px; border: 1px solid #e5e7eb;">
    <!-- Logo -->
    <div style="text-align: center; margin-bottom: 25px;">
      <img src="https://eduqra-official.web.app/images/eduqra_logo.jpeg?v=1.1" alt="Eduqra Logo" style="width: 150px;">
    </div>
    <!-- Header -->
    <h1 style="color: #111827; font-size: 26px; font-weight: 600; text-align: center; margin-bottom: 10px;">
      Welcome to Eduqra
    </h1>
    <p style="text-align: center; font-size: 15px; color: #6b7280; margin-bottom: 30px;">
      A new standard for intelligent, skill-driven education
    </p>
    <!-- Greeting -->
    <p style="font-size: 16px; color: #111827;">
      Hello <strong>${displayName}</strong>,
    </p>
    <!-- Intro -->
    <p style="font-size: 15px; line-height: 1.7; color: #374151;">
      We’re pleased to welcome you to <strong>Eduqra</strong> — an AI-powered platform designed to help you master real-world skills with precision, personalization, and measurable outcomes.
    </p>
    <p style="font-size: 15px; line-height: 1.7; color: #374151;">
      Our mission is simple: to bridge the gap between learning and execution using intelligent systems that adapt to you.
    </p>
    <!-- Features Section -->
    <div style="margin-top: 25px; padding: 20px; background-color: #f3f4f6; border-radius: 10px;">
      <p style="margin-bottom: 12px; font-size: 15px; color: #111827;"><strong>With Eduqra, you gain access to:</strong></p>
      <ul style="margin: 0; padding-left: 18px; font-size: 14px; color: #374151; line-height: 1.8;">
        <li>AI-driven mentorship tailored to your goals</li>
        <li>Dynamic learning paths that evolve with your progress</li>
        <li>Real-time performance insights and skill analytics</li>
      </ul>
    </div>
    <!-- CTA -->
    <div style="text-align: center; margin-top: 35px;">
      <a href="https://eduqra-official.web.app/login"
         style="display: inline-block; background-color: #6366f1; color: #ffffff; padding: 14px 30px; text-decoration: none; border-radius: 8px; font-size: 15px; font-weight: 500;">
         Access Your Dashboard
      </a>
    </div>
    <!-- Divider -->
    <div style="margin: 40px 0; border-top: 1px solid #e5e7eb;"></div>
    <!-- Closing -->
    <p style="font-size: 14px; color: #374151; line-height: 1.6;">
      If you have any questions or need guidance, our team is here to support you at every step of your journey.
    </p>
    <p style="font-size: 14px; color: #111827; margin-top: 20px;">
      Warm regards,<br>
      <strong>Team Eduqra</strong>
    </p>
  </div>
  <!-- Footer -->
  <div style="text-align: center; font-size: 12px; color: #9ca3af; margin-top: 15px;">
    © 2026 Eduqra. All rights reserved.
  </div>
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
