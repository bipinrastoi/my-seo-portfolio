import { Resend } from 'resend';

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ error: 'Missing RESEND_API_KEY' }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    const { name, email, message } = await req.json();

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'bipinraskoti6@gmail.com',
      subject: `New Message from ${name}`,
      replyTo: email,
      text: message,
    });

    if (data.error) {
      console.error('Resend Error:', data.error);
      return Response.json({ error: data.error.message }, { status: 400 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error('Server Catch Error:', error);
    return Response.json({ error: 'Failed to send message' }, { status: 500 });
  }
}