import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Validate environment variable
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, subject, message' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Sanitize inputs to prevent injection
    const sanitizedName = String(name).substring(0, 100);
    const sanitizedEmail = String(email).substring(0, 100);
    const sanitizedSubject = String(subject).substring(0, 200);
    const sanitizedMessage = String(message).substring(0, 5000);

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'noreply@ahsanmalik.xyz',
      to: 'mahsanraza3222@gmail.com',
      replyTo: sanitizedEmail,
      subject: `Portfolio Contact: ${sanitizedSubject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%); color: white; padding: 20px; border-radius: 8px; }
              .content { background: #f9f9f9; padding: 20px; margin-top: 20px; border-radius: 8px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #6366f1; }
              .footer { margin-top: 20px; font-size: 12px; color: #999; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Contact Form Submission</h2>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Name:</span> ${sanitizedName}
                </div>
                <div class="field">
                  <span class="label">Email:</span> ${sanitizedEmail}
                </div>
                <div class="field">
                  <span class="label">Subject:</span> ${sanitizedSubject}
                </div>
                <div class="field">
                  <span class="label">Message:</span>
                  <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
                </div>
              </div>
              <div class="footer">
                <p>This email was sent from your portfolio contact form at ahsanmalik.xyz</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    if (!data) {
      console.error('No data returned from Resend');
      return NextResponse.json(
        { error: 'Email service error' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true,
        message: 'Email sent successfully!',
        id: data.id 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
