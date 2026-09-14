"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  project?: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}

export async function submitContactInquiry(
  prevState: ContactResponse | null,
  formData: FormData
): Promise<ContactResponse> {
  const fullName = (formData.get("fullName") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const project = (formData.get("project") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  const errors: Record<string, string> = {};

  if (!fullName || fullName.length < 2) {
    errors.fullName = "Please enter your full name.";
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please provide a valid email address.";
  }

  const cleanedPhone = phone ? phone.replace(/\D/g, "") : "";
  if (!phone || cleanedPhone.length !== 10) {
    errors.phone = "Please enter a valid 10-digit mobile number.";
  }

  if (!message || message.length < 5) {
    errors.message = "Please share details about your inquiry or space requirements.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please correct the highlighted fields.",
      errors,
    };
  }

  try {
    const projectType = project || "Interior Project";
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Client Inquiry</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #141312; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F5F5F0;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #141312; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #1C1A18; border: 1px solid #292524; border-radius: 4px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                  <tr>
                    <td style="padding: 32px 36px; background-color: #141312; border-bottom: 2px solid #C5A059; text-align: left;">
                      <span style="font-family: Georgia, serif; font-size: 20px; font-weight: bold; letter-spacing: 0.12em; color: #FDFCF7; text-transform: uppercase;">
                        <span style="color: #DFB163;">G</span>K SPACE SOLUTIONS LLP
                      </span>
                      <p style="margin: 6px 0 0 0; font-size: 11px; font-family: monospace; letter-spacing: 0.2em; color: #DFB163; text-transform: uppercase;">
                        Executive Inquiry Terminal &bull; Pan-India
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 36px;">
                      <h2 style="margin: 0 0 16px 0; font-family: Georgia, serif; font-size: 22px; font-weight: normal; color: #FDFCF7;">
                        New Project Inquiry Received
                      </h2>
                      <table width="100%" border="0" cellspacing="0" cellpadding="10" style="margin-bottom: 28px; border-collapse: collapse; font-size: 14px;">
                        <tr style="border-bottom: 1px solid #292524;">
                          <td width="35%" style="color: #A8A29E; font-family: monospace; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em;">Client Name</td>
                          <td style="color: #FDFCF7; font-weight: 600;">${fullName}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #292524;">
                          <td style="color: #A8A29E; font-family: monospace; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em;">Email Address</td>
                          <td><a href="mailto:${email}" style="color: #DFB163; text-decoration: none;">${email}</a></td>
                        </tr>
                        <tr style="border-bottom: 1px solid #292524;">
                          <td style="color: #A8A29E; font-family: monospace; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em;">Contact Number</td>
                          <td><a href="tel:+91${cleanedPhone}" style="color: #DFB163; text-decoration: none;">+91 ${cleanedPhone}</a></td>
                        </tr>
                        <tr style="border-bottom: 1px solid #292524;">
                          <td style="color: #A8A29E; font-family: monospace; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em;">Scope / Project Type</td>
                          <td style="color: #FDFCF7;">${projectType}</td>
                        </tr>
                        <tr>
                          <td style="color: #A8A29E; font-family: monospace; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em;">Submission Date</td>
                          <td style="color: #A8A29E; font-size: 12px;">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</td>
                        </tr>
                      </table>
                      <div style="margin-top: 10px;">
                        <span style="display: block; margin-bottom: 8px; font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #DFB163;">
                          Project Scope &amp; Client Message
                        </span>
                        <div style="background-color: #141312; border-left: 3px solid #DFB163; padding: 18px 20px; font-size: 14px; line-height: 1.7; color: #E5E0D8; white-space: pre-wrap;">${message}</div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 24px 36px; background-color: #141312; border-top: 1px solid #292524; text-align: center; font-size: 11px; color: #78716C; line-height: 1.6;">
                      GK Space Solutions LLP &bull; Pan-India Operational Reach<br>
                      Turnkey Contracting &bull; Bespoke Architectural Millwork &bull; Precision Fit-Outs
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    await resend.emails.send({
      from: "GK Space Inquiries <onboarding@resend.dev>",
      to: [process.env.NOTIFICATION_EMAIL || "an.unknownboyy@gmail.com"],
      replyTo: email,
      subject: `🏛️ New Client Inquiry: ${projectType} - ${fullName}`,
      html: emailHtml,
    });
  } catch (emailErr) {
    console.error("[RESEND DISPATCH ERROR]:", emailErr);
  }

  return {
    success: true,
    message: `Thank you, ${fullName}. Your inquiry${project ? ` regarding "${project}"` : ""} has been received. Our principal engineering team will contact you within 24 business hours.`,
  };
}
