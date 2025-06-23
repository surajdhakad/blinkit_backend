const verifyEmailTemplate = ({ name, url }) => {
  return `
    <p>Dear ${name},</p>
    <p>Thank you for registering with Binkeyit.</p>
    <a href="${url}" style="color: white; background: #007BFF; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 10px;">
      Verify Email
    </a>
    <p>If you didn’t create this account, please ignore this email.</p>
  `;
};

export default verifyEmailTemplate;
