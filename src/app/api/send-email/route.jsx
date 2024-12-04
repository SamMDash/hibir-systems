import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, message } = await req.json();

  // Create a transporter using your email provider
  const transporter = nodemailer.createTransport({
    service: "gmail", // You can use other services like Outlook, Yahoo, etc.
    auth: {
      user: process.env.EMAIL, // Use your email address here
      pass: process.env.EMAIL_PASSWORD, // Use your email password or App password
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL, // Your email address to receive the messages
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Message sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: 'Failed to send message.' }), { status: 500 });
  }
}
