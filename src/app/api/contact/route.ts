import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const subject = `[Intrepide.ai] New inquiry from ${name}`;
    const text = [
      'New contact form submission from intrepide.ai',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      '',
      'Message:',
      message,
      '',
      '---',
      'Sent from intrepide.ai contact form',
    ]
      .filter(Boolean)
      .join('\n');

    // SMTP integration — optional, logs to console if not configured
    const smtpHost = process.env.SMTP_HOST;
    if (smtpHost) {
      try {
        const port = parseInt(process.env.SMTP_PORT || '587');
        const user = process.env.SMTP_USER || '';
        const pass = process.env.SMTP_PASS || '';
        const from = process.env.SMTP_FROM || 'clyde@intrepide.ai';

        if (process.env.MAIL_API_URL) {
          await fetch(process.env.MAIL_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              from,
              to: 'clyde@intrepide.ai',
              replyTo: email,
              subject,
              text,
              host: smtpHost,
              port,
              user,
              pass,
            }),
          });
        }
      } catch (e) {
        console.error('Mail send failed:', e);
      }
    }

    console.log('=== Contact Form Submission ===');
    console.log(`Time: ${new Date().toISOString()}`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    if (company) console.log(`Company: ${company}`);
    console.log(`Message: ${message}`);
    console.log('==============================');

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('Contact form error:', e);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
