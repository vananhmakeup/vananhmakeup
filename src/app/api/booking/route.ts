import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, service, date, location, guests, source, message } = body;

  if (!name || !email || !service || !date) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Booking Enquiry <onboarding@resend.dev>",
    to: "tiendatnguyen.kuas@gmail.com",
    replyTo: email,
    subject: `New booking enquiry — ${service} (${date})`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; color: #2c2b29;">
        <h2 style="font-weight: 400; font-size: 1.5rem; margin-bottom: 1.5rem;">
          New Booking Enquiry
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #888; width: 140px;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding: 8px 0; color: #888;">Phone</td><td style="padding: 8px 0;">${phone}</td></tr>` : ""}
          <tr><td style="padding: 8px 0; color: #888;">Service</td><td style="padding: 8px 0;">${service}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Event date</td><td style="padding: 8px 0;">${date}</td></tr>
          ${location ? `<tr><td style="padding: 8px 0; color: #888;">Location</td><td style="padding: 8px 0;">${location}</td></tr>` : ""}
          ${guests ? `<tr><td style="padding: 8px 0; color: #888;">Guests</td><td style="padding: 8px 0;">${guests}</td></tr>` : ""}
          ${source ? `<tr><td style="padding: 8px 0; color: #888;">Found via</td><td style="padding: 8px 0;">${source}</td></tr>` : ""}
        </table>
        ${
          message
            ? `<div style="margin-top: 1.5rem; padding: 1rem; background: #f7f5f2; border-left: 3px solid #c9b99a;">
                <p style="margin: 0; color: #888; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem;">Vision / message</p>
                <p style="margin: 0; white-space: pre-wrap;">${message}</p>
              </div>`
            : ""
        }
        <p style="margin-top: 2rem; font-size: 0.75rem; color: #aaa;">
          Reply directly to this email to respond to ${name}.
        </p>
      </div>
    `,
  });

  if (error) {
    console.error("[booking] Resend error:", error);
    return NextResponse.json({ error: "Failed to send email.", detail: error }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
