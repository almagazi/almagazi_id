import { fail } from '@sveltejs/kit';
import { Resend } from 'resend';
import { RESEND_API_KEY, RESEND_EMAIL_SENDER, RESEND_EMAIL_TARGET } from '$env/static/private'; // Using static

const resend = new Resend(RESEND_API_KEY);

export const actions = {
  sendEmail: async ({ request }) => {
    const data = await request.formData();
    const name = data.get('name');
    const email = data.get('email');
    const whatsapp = data.get('whatsapp');
    const message = data.get('message');

    // --- Server-Side Validation ---
    const errors = {};
    const cleanWhatsapp = (whatsapp || '').replace(/[\s-()]/g, '');

    if (!name) errors.name = 'Name is required.';
    if (!message) errors.message = 'Message is required.';
    if (!email && !cleanWhatsapp) {
      errors.contact = 'Please provide either an email or a WhatsApp number.';
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (cleanWhatsapp && !/(^08\d{8,11}$)|(^\+[1-9]\d{9,14}$)/.test(cleanWhatsapp)) {
      errors.whatsapp = 'Please enter a valid format (e.g., 08123456789).';
    }

    if (Object.keys(errors).length > 0) {
      return fail(400, { errors });
    }

    // --- Prepare Email ---
    let subject = '';
    let mailBody = '';
    let whatsappLink = null;

    if (cleanWhatsapp) {
      subject = `Website Lead ${cleanWhatsapp}`;
      mailBody = `New lead from: ${name}\nWhatsApp: ${cleanWhatsapp}\n\nMessage:\n${message}`;
      whatsappLink = `https://wa.me/62816782197?text=${encodeURIComponent(message)}`;
    } else {
      subject = 'Website Lead';
      mailBody = `New lead from: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    }

    // --- Log data to server terminal BEFORE sending ---
    console.log('Attempting to send email with data:', {
      to: 'aulia@almagazi.id',
      subject,
      mailBody
    });

    // --- Send the Email ---
    try {
      await resend.emails.send({
        from: `Website Form <${RESEND_EMAIL_SENDER}>`,
        to: `${RESEND_EMAIL_TARGET}`,
        subject: subject,
        text: mailBody
      });

      // If code reaches here, email was sent successfully
      console.log('Email sent successfully!');
      return { success: true, whatsappLink: whatsappLink };
    } catch (error) {
      console.error('Resend API Error:', error);
      errors.submit = 'Failed to send message. Please try again later.';
      return fail(500, { errors });
    }
  }
};