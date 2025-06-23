import { Resend } from 'resend';
import dotenv from 'dotenv';
dotenv.config();

if (!process.env.RESEND_API) {
  console.log("❌ Provide RESEND_API inside the .env file");
}

const resend = new Resend(process.env.RESEND_API);

const sendEmail = async ({ sendTo, subject, html }) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Binkeyit <onboarding@resend.dev>',  // ✅ Use Resend test sender
      to: 'surajdhakad034@gmail.com',             // ✅ Only your email allowed
      subject,
      html,
    });

    if (error) {
      console.error("❌ Email sending error:", error);
      return { error };
    }

    return data;
  } catch (error) {
    console.log("❌ Email send exception:", error.message);
    return { error: error.message };
  }
};

export default sendEmail;
