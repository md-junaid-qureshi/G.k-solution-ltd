import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      formType = "inquiry",
      name,
      fullName,
      email,
      phone,
      projectType,
      project,
      role,
      position,
      experience,
      portfolioUrl,
      message,
      resume,
    } = body;

    const candidateOrClientName = (name || fullName || "").trim();
    const clientEmail = (email || "").trim();
    const clientPhone = (phone || "").trim();
    const clientMessage = (message || "").trim();

    if (!candidateOrClientName || !clientEmail) {
      return NextResponse.json(
        { success: false, error: "Name and email are required." },
        { status: 400 }
      );
    }

    const isCareer = formType === "career";
    const appliedRole = (role || position || "Architectural Role").trim();
    const targetProjectType = (projectType || project || "Turnkey Project").trim();
    const candidateExperience = (experience || "Not Specified").trim();
    const candidatePortfolio = (portfolioUrl || "").trim();

    // Prepare attachments if present
    let attachments: Array<{ filename: string; content: Buffer }> | undefined = undefined;
    if (isCareer && resume && resume.content) {
      try {
        const cleanBase64 = resume.content.includes(",")
          ? resume.content.split(",")[1]
          : resume.content;
        const buffer = Buffer.from(cleanBase64, "base64");
        attachments = [
          {
            filename: resume.filename || "Curriculum_Vitae.pdf",
            content: buffer,
          },
        ];
      } catch (attachErr) {
        console.error("[ATTACHMENT CONVERSION ERROR]:", attachErr);
      }
    }

    const subject = isCareer
      ? `💼 Job Application: ${appliedRole} - ${candidateOrClientName}`
      : `🏛️ Client Inquiry: ${targetProjectType} - ${candidateOrClientName}`;

    // Luxury GK Space Solutions email templates
    const emailHtml = isCareer
      ? `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>New Candidate Application</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #141312; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F5F5F0;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #141312; padding: 40px 20px;">
      <tr>
        <td align="center">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 620px; background-color: #1C1A18; border: 1px solid #292524; border-radius: 4px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
            <!-- Header -->
            <tr>
              <td style="padding: 32px 36px; background-color: #141312; border-bottom: 2px solid #DFB163; text-align: left;">
                <span style="font-family: Georgia, serif; font-size: 20px; font-weight: bold; letter-spacing: 0.12em; color: #FDFCF7; text-transform: uppercase;">
                  <span style="color: #DFB163;">G</span>K SPACE SOLUTIONS LLP
                </span>
                <p style="margin: 6px 0 0 0; font-size: 11px; font-family: monospace; letter-spacing: 0.2em; color: #DFB163; text-transform: uppercase;">
                  Talent Acquisition &amp; Executive Dossier
                </p>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding: 36px;">
                <h2 style="margin: 0 0 16px 0; font-family: Georgia, serif; font-size: 22px; font-weight: normal; color: #FDFCF7;">
                  New Candidate Dossier Submitted
                </h2>
                <p style="margin: 0 0 24px 0; font-size: 14px; line-height: 1.6; color: #A8A29E;">
                  A candidate has submitted their credentials and architectural portfolio for executive review at GK Space Solutions LLP.
                </p>

                <!-- Architectural Candidate Table -->
                <table width="100%" border="0" cellspacing="0" cellpadding="10" style="margin-bottom: 28px; border-collapse: collapse; font-size: 14px;">
                  <tr style="border-bottom: 1px solid #292524;">
                    <td width="35%" style="color: #A8A29E; font-family: monospace; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em;">Candidate Name</td>
                    <td style="color: #FDFCF7; font-weight: 600;">${candidateOrClientName}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #292524;">
                    <td style="color: #A8A29E; font-family: monospace; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em;">Position Applied</td>
                    <td style="color: #DFB163; font-weight: 600;">${appliedRole}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #292524;">
                    <td style="color: #A8A29E; font-family: monospace; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em;">Experience Level</td>
                    <td style="color: #FDFCF7;">${candidateExperience}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #292524;">
                    <td style="color: #A8A29E; font-family: monospace; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em;">Contact Telephone</td>
                    <td><a href="tel:+91${clientPhone.replace(/\D/g, "")}" style="color: #DFB163; text-decoration: none;">${clientPhone.startsWith("+") ? clientPhone : `+91 ${clientPhone}`}</a></td>
                  </tr>
                  <tr style="border-bottom: 1px solid #292524;">
                    <td style="color: #A8A29E; font-family: monospace; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em;">Email Address</td>
                    <td><a href="mailto:${clientEmail}" style="color: #DFB163; text-decoration: none;">${clientEmail}</a></td>
                  </tr>
                  ${
                    candidatePortfolio
                      ? `<tr style="border-bottom: 1px solid #292524;">
                    <td style="color: #A8A29E; font-family: monospace; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em;">Portfolio / Profile</td>
                    <td><a href="${candidatePortfolio}" target="_blank" style="color: #DFB163; text-decoration: underline;">${candidatePortfolio}</a></td>
                  </tr>`
                      : ""
                  }
                  <tr style="border-bottom: 1px solid #292524;">
                    <td style="color: #A8A29E; font-family: monospace; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em;">CV / Resume</td>
                    <td style="color: #FDFCF7;">${attachments ? `📎 ${attachments[0].filename} (Attached)` : "None attached"}</td>
                  </tr>
                  <tr>
                    <td style="color: #A8A29E; font-family: monospace; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em;">Submission Timestamp</td>
                    <td style="color: #A8A29E; font-size: 12px;">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</td>
                  </tr>
                </table>

                <!-- Cover Letter Box -->
                <div style="margin-top: 10px;">
                  <span style="display: block; margin-bottom: 8px; font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #DFB163;">
                    Cover Letter / Candidate Strengths
                  </span>
                  <div style="background-color: #141312; border-left: 3px solid #DFB163; padding: 18px 20px; font-size: 14px; line-height: 1.7; color: #E5E0D8; white-space: pre-wrap;">${clientMessage || "No cover note provided."}</div>
                </div>

                <!-- Action Button -->
                <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #292524; text-align: center;">
                  <a href="mailto:${clientEmail}?subject=Re:%20Application%20for%20${encodeURIComponent(appliedRole)}%20-%20GK%20Space%20Solutions" style="display: inline-block; background-color: #DFB163; color: #141312; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.15em; padding: 12px 24px; text-decoration: none; border-radius: 2px;">
                    Contact ${candidateOrClientName}
                  </a>
                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding: 24px 36px; background-color: #141312; border-top: 1px solid #292524; text-align: center; font-size: 11px; color: #78716C; line-height: 1.6;">
                GK Space Solutions LLP &bull; Talent Acquisition Desk &bull; Mumbai &amp; Pune<br>
                Bespoke Architectural Millwork &bull; Turnkey Contracting
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
      : `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>New Client Inquiry</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #141312; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F5F5F0;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #141312; padding: 40px 20px;">
      <tr>
        <td align="center">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 620px; background-color: #1C1A18; border: 1px solid #292524; border-radius: 4px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
            <!-- Header -->
            <tr>
              <td style="padding: 32px 36px; background-color: #141312; border-bottom: 2px solid #C5A059; text-align: left;">
                <span style="font-family: Georgia, serif; font-size: 20px; font-weight: bold; letter-spacing: 0.12em; color: #FDFCF7; text-transform: uppercase;">
                  <span style="color: #DFB163;">G</span>K SPACE SOLUTIONS LLP
                </span>
                <p style="margin: 6px 0 0 0; font-size: 11px; font-family: monospace; letter-spacing: 0.2em; color: #DFB163; text-transform: uppercase;">
                  Executive Inquiry Terminal &bull; Mumbai &amp; Pune
                </p>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding: 36px;">
                <h2 style="margin: 0 0 16px 0; font-family: Georgia, serif; font-size: 22px; font-weight: normal; color: #FDFCF7;">
                  New Project Inquiry Received
                </h2>
                <p style="margin: 0 0 24px 0; font-size: 14px; line-height: 1.6; color: #A8A29E;">
                  A prospective client has submitted an architectural and contracting brief via the GK Space Solutions digital terminal.
                </p>

                <!-- Client Details Table -->
                <table width="100%" border="0" cellspacing="0" cellpadding="10" style="margin-bottom: 28px; border-collapse: collapse; font-size: 14px;">
                  <tr style="border-bottom: 1px solid #292524;">
                    <td width="35%" style="color: #A8A29E; font-family: monospace; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em;">Client Name</td>
                    <td style="color: #FDFCF7; font-weight: 600;">${candidateOrClientName}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #292524;">
                    <td style="color: #A8A29E; font-family: monospace; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em;">Email Address</td>
                    <td><a href="mailto:${clientEmail}" style="color: #DFB163; text-decoration: none;">${clientEmail}</a></td>
                  </tr>
                  <tr style="border-bottom: 1px solid #292524;">
                    <td style="color: #A8A29E; font-family: monospace; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em;">Contact Number</td>
                    <td><a href="tel:+91${clientPhone.replace(/\D/g, "")}" style="color: #DFB163; text-decoration: none;">${clientPhone.startsWith("+") ? clientPhone : `+91 ${clientPhone}`}</a></td>
                  </tr>
                  <tr style="border-bottom: 1px solid #292524;">
                    <td style="color: #A8A29E; font-family: monospace; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em;">Scope / Project Type</td>
                    <td style="color: #FDFCF7;">${targetProjectType}</td>
                  </tr>
                  <tr>
                    <td style="color: #A8A29E; font-family: monospace; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em;">Submission Date</td>
                    <td style="color: #A8A29E; font-size: 12px;">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</td>
                  </tr>
                </table>

                <!-- Message Quote Box -->
                <div style="margin-top: 10px;">
                  <span style="display: block; margin-bottom: 8px; font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #DFB163;">
                    Project Scope &amp; Requirements
                  </span>
                  <div style="background-color: #141312; border-left: 3px solid #DFB163; padding: 18px 20px; font-size: 14px; line-height: 1.7; color: #E5E0D8; white-space: pre-wrap;">${clientMessage || "No additional specifications provided."}</div>
                </div>

                <!-- Direct Action -->
                <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #292524; text-align: center;">
                  <a href="mailto:${clientEmail}?subject=Re:%20Inquiry%20Regarding%20${encodeURIComponent(targetProjectType)}%20-%20GK%20Space%20Solutions" style="display: inline-block; background-color: #DFB163; color: #141312; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.15em; padding: 12px 24px; text-decoration: none; border-radius: 2px;">
                    Reply to ${candidateOrClientName}
                  </a>
                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding: 24px 36px; background-color: #141312; border-top: 1px solid #292524; text-align: center; font-size: 11px; color: #78716C; line-height: 1.6;">
                GK Space Solutions LLP &bull; Mumbai &amp; Pune, Maharashtra, India<br>
                Turnkey Contracting &bull; Bespoke Architectural Millwork &bull; Est. 2000
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

    const { data, error } = await resend.emails.send({
      from: "GK Space Solutions <onboarding@resend.dev>",
      to: [process.env.NOTIFICATION_EMAIL || "an.unknownboyy@gmail.com"],
      replyTo: clientEmail,
      subject,
      html: emailHtml,
      attachments,
    });

    if (error) {
      console.error("[RESEND ERROR]:", error);
      return NextResponse.json({ success: false, error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err: any) {
    console.error("[API CONTACT ERROR]:", err);
    return NextResponse.json(
      { success: false, error: err?.message || "Failed to process request" },
      { status: 500 }
    );
  }
}
