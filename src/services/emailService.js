// src/services/emailService.js
import emailjs from 'emailjs-com';

export const sendEmail = async (formData) => {
  try {
    const templateParams = {
      to_email: process.env.RECIPIENT_EMAIL || 'default@example.com',
      from_name: `${formData.name} ${formData.surname}`,
      company: formData.company,
      message: formData.message,
      from_email: "website@contact.form",
      reply_to: "no-reply@example.com",
    };

    const response = await emailjs.send(
      process.env.SERVICE_ID || 'default_service_id',
      process.env.TEMPLATE_ID || 'default_template_id',
      templateParams,
      process.env.USER_ID || 'default_user_id'
    );

    console.log('SUCCESS!', response.status, response.text);
    return { success: true, response };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};