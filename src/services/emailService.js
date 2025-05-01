// src/services/emailService.js
export const sendEmail = async (formData) => {
  try {
    const templateParams = {
      to_email: RECIPIENT_EMAIL,
      from_name: `${formData.name} ${formData.surname}`,
      company: formData.company,
      message: formData.message,
      from_email: "website@contact.form",
      reply_to: "no-reply@example.com",
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      USER_ID
    );

    console.log('SUCCESS!', response.status, response.text);
    return { success: true, response };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};