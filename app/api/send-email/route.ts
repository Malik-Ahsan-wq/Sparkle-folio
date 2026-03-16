import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Validate environment variable
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact support.' },
        { status: 500 }
      );
    }

    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Parse request body
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = String(name).trim().substring(0, 100);
    const sanitizedEmail = String(email).trim().toLowerCase().substring(0, 100);
    const sanitizedSubject = String(subject).trim().substring(0, 200);
    const sanitizedMessage = String(message).trim().substring(0, 5000);

    // Validate sanitized inputs
    if (!sanitizedName || !sanitizedEmail || !sanitizedSubject || !sanitizedMessage) {
      return NextResponse.json(
        { error: 'Invalid input data' },
        { status: 400 }
      );
    }

    // Send email via Resend using verified domain
    const emailResponse = await resend.emails.send({
      from: 'Contact Form <noreply@ahsanmalik.xyz>',
      to: 'ahsanmalikking57@gmail.com',
      replyTo: sanitizedEmail,
      subject: `New Contact: ${sanitizedSubject}`,
   html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>

  <style type="text/css">
    /* Reset */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }

    body {
      margin: 0;
      padding: 0;
      background-color: #f8f9fc;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #1f2937;
      line-height: 1.6;
    }

    .email-container {
      max-width: 640px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }

    .header {
      background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
      color: white;
      padding: 48px 32px 40px;
      text-align: center;
    }

    .header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: 600;
      letter-spacing: -0.5px;
    }

    .header .subtitle {
      margin: 12px 0 0;
      font-size: 15px;
      opacity: 0.9;
    }

    .content {
      padding: 40px 36px 32px;
    }

    .field {
      margin-bottom: 28px;
    }

    .label {
      font-size: 13px;
      font-weight: 600;
      color: #6b7280;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      margin-bottom: 6px;
      display: block;
    }

    .value {
      font-size: 16px;
      color: #111827;
      word-break: break-word;
    }

    .email-link {
      color: #4f46e5;
      text-decoration: none;
      font-weight: 500;
    }

    .email-link:hover {
      text-decoration: underline;
    }

    .message-container {
      background-color: #f8fafc;
      border-radius: 8px;
      padding: 24px;
      border-left: 4px solid #6366f1;
      margin: 16px 0 32px;
      font-size: 15px;
      line-height: 1.65;
      white-space: pre-wrap;
    }

    .divider {
      height: 1px;
      background-color: #e5e7eb;
      margin: 32px 0;
    }

    .meta {
      font-size: 13px;
      color: #6b7280;
      text-align: center;
      margin: 24px 0 0;
    }

    .footer {
      background-color: #f8fafc;
      padding: 32px 36px;
      text-align: center;
      font-size: 13px;
      color: #6b7280;
      border-top: 1px solid #e5e7eb;
    }

    .footer a {
      color: #4f46e5;
      text-decoration: none;
    }

    .footer a:hover {
      text-decoration: underline;
    }

    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
      body { background-color: #0f172a; color: #e2e8f0; }
      .email-container { background-color: #1e293b; box-shadow: 0 4px 20px rgba(0,0,0,0.4); }
      .header { background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%); }
      .content { color: #e2e8f0; }
      .label { color: #94a3b8; }
      .value { color: #f1f5f9; }
      .message-container { background-color: #334155; border-left-color: #818cf8; color: #e2e8f0; }
      .footer { background-color: #0f172a; border-top-color: #334155; color: #94a3b8; }
      .divider { background-color: #334155; }
    }

    @media only screen and (max-width: 480px) {
      .content, .footer { padding-left: 24px !important; padding-right: 24px !important; }
      .header { padding: 40px 24px 32px !important; }
      .header h1 { font-size: 24px !important; }
    }
  </style>
</head>
<body>
  <div class="email-container">

    <div class="header">
      <h1>New Contact Message</h1>
      <div class="subtitle">Portfolio Contact Form • ahsanmalik.xyz</div>
    </div>

    <div class="content">

      <div class="field">
        <span class="label">Name</span>
        <div class="value">${sanitizedName}</div>
      </div>

      <div class="field">
        <span class="label">Email Address</span>
        <div class="value">
          <a href="mailto:${sanitizedEmail}" class="email-link">${sanitizedEmail}</a>
        </div>
      </div>

      <div class="field">
        <span class="label">Subject</span>
        <div class="value">${sanitizedSubject}</div>
      </div>

      <div class="divider"></div>

      <div class="field">
        <span class="label">Message</span>
        <div class="message-container">
          ${sanitizedMessage.replace(/\n/g, '<br>')}
        </div>
      </div>

      <div class="meta">
        Received on ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi' })}
      </div>

    </div>

    <div class="footer">
      <p>This message was submitted via your portfolio contact form.</p>
      <p><strong>ahsanmalik.xyz</strong> • <a href="https://ahsanmalik.xyz">Visit Portfolio</a></p>
      <p style="margin-top: 16px; font-size: 12px;">
        Please reply directly to this email to respond to the sender.
      </p>
    </div>

  </div>
</body>
</html>
`,
    });

    // Check for errors
    if (emailResponse.error) {
      console.error('Resend Error:', emailResponse.error);
      console.error('Full response:', JSON.stringify(emailResponse));
      return NextResponse.json(
        { error: `Failed to send email: ${emailResponse.error.message || 'Unknown error'}` },
        { status: 500 }
      );
    }

    // Success response
    return NextResponse.json(
      {
        success: true,
        message: 'Email sent successfully! I will get back to you soon.',
        id: emailResponse.data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email API Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: `Server error: ${errorMessage}` },
      { status: 500 }
    );
  }
}
