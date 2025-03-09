import nodemailer from "nodemailer";

export const sendEmail = async ({
  Name,
  Email,
  PhoneNumber,
  Subject,
  Message,
}) => {
  const transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: process.env.SMTP_MAIL, // Sending to your own email
    subject: `New Contact Form Submission - ${Subject || "No Subject"}`,
    text: `
      You have a new contact form submission:
      
      Name: ${Name}
      Email: ${Email}
      Phone: ${PhoneNumber}
      Subject: ${Subject || "No Subject"}
      Message: ${Message || "No Message"}
      
      Regards,
      Your Website
    `,
  };

  await transporter.sendMail(mailOptions);
};
