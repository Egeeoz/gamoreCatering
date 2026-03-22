'use server';

import nodemailer from 'nodemailer';

interface FormData {
  name: string | FormDataEntryValue | null;
  email: string | FormDataEntryValue | null;
  phoneNumber: string | FormDataEntryValue | null;
  event: string | FormDataEntryValue | null;
  amountGuests: string | FormDataEntryValue | null;
  deliveryType: string | FormDataEntryValue | null;
  deliveryAddress: string | FormDataEntryValue | null;
  deliveryTime: string | FormDataEntryValue | null;
  pickupTime: string | FormDataEntryValue | null;
  message: string | FormDataEntryValue | null;
}

export async function sendFormEmail(data: FormData) {
  try {
    console.log('=== Form Email Debug ===');
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS);
    console.log('Form data:', data);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log('Transporter created');

    const formatDateTime = (dateTimeString: string) => {
      if (!dateTimeString) return '-';
      const date = new Date(dateTimeString);
      return date.toLocaleString('sv-SE', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      });
    };

    const deliveryInfo =
      data.deliveryType === 'delivery'
        ? `
        <p><strong>Leveransadress:</strong> ${data.deliveryAddress}</p>
        <p><strong>Leveranstid:</strong> ${formatDateTime(String(data.deliveryTime))}</p>
        `
        : `
        <p><strong>Upphämtning från:</strong> Stockholm, Sverige</p>
        <p><strong>Upphämtningstid:</strong> ${formatDateTime(String(data.pickupTime))}</p>
        `;

    const htmlContent = `
      <h2>Ny Catering Förfrågan</h2>
      <p><strong>Namn:</strong> ${data.name}</p>
      <p><strong>E-post:</strong> ${data.email}</p>
      <p><strong>Telefonnummer:</strong> ${data.phoneNumber}</p>
      <p><strong>Typ av Event:</strong> ${data.event}</p>
      <p><strong>Antal gäster:</strong> ${data.amountGuests}</p>
      <p><strong>Leverans/Upphämtning:</strong> ${data.deliveryType === 'delivery' ? 'Leverans' : 'Upphämtning'}</p>
      ${deliveryInfo}
      <p><strong>Meddelande:</strong></p>
      <p>${String(data.message).replace(/\n/g, '<br>')}</p>
    `;

    const result = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Ny Catering Förfrågan från ${data.name}`,
      html: htmlContent,
      replyTo: String(data.email),
    });

    console.log('Email sent successfully:', result.messageId);
    return { success: true };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false };
  }
}
