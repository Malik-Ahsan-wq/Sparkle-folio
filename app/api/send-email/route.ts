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
      from: 'noreply@ahsanmalik.xyz', // Use Resend's verified domain
      to: 'ahsanmalikking57@gmail.com',
      replyTo: sanitizedEmail,
      subject: `New Contact: ${sanitizedSubject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f9fafb; }
              .email-wrapper { background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
              .header { background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%); color: white; padding: 30px 20px; text-align: center; }
              .header h2 { margin: 0; font-size: 24px; }
              .content { padding: 30px 20px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: 600; color: #6366f1; display: block; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
              .value { color: #333; font-size: 16px; word-break: break-word; }
              .message-box { background: #f3f4f6; padding: 15px; border-left: 4px solid #6366f1; border-radius: 4px; margin-top: 10px; }
              .footer { background: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb; }
              .divider { height: 1px; background: #e5e7eb; margin: 20px 0; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="email-wrapper">
                <div class="header">
                  <h2>📧 New Contact Form Submission</h2>
                </div>
                <div class="content">
                  <div class="field">
                    <span class="label">From:</span>
                    <div class="value">${sanitizedName}</div>
                  </div>
                  <div class="field">
                    <span class="label">Email:</span>
                    <div class="value"><a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></div>
                  </div>
                  <div class="field">
                    <span class="label">Subject:</span>
                    <div class="value">${sanitizedSubject}</div>
                  </div>
                  <div class="divider"></div>
                  <div class="field">
                    <span class="label">Message:</span>
                    <div class="message-box">
                      ${sanitizedMessage.replace(/\n/g, '<br>')}
                    </div>
                  </div>
                </div>
                <div class="footer">
                  <p>This email was sent from your portfolio contact form</p>
                  <p>Portfolio: <strong>ahsanmalik.xyz</strong></p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // Check for errors
    if (emailResponse.error) {
      console.error('Resend Error:', emailResponse.error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
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
