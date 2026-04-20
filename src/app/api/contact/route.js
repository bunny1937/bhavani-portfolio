import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Change this to your verified Resend sender domain/email.
// Until you add a domain, Resend lets you send FROM onboarding@resend.dev
// but you must receive AT your real email.
const FROM = "Portfolio Contact <onboarding@resend.dev>";
const TO = "bhavaninehra@gmail.com"; // your inbox

export async function POST(request) {
  try {
    const { name, email, company, message } = await request.json();

    // Basic server-side validation
    if (!name?.trim() || !message?.trim()) {
      return Response.json(
        { error: "Name and message are required." },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: FROM,
      to: TO,
      reply_to: email, // no sender email collected — omit
      subject: `Portfolio inquiry from ${name.trim()}`,
      text: [
        company ? `Company / project: ${company.trim()}` : "",
        "",
        "Message:",
        message.trim(),
        "",
        `From: ${name.trim()} (${email})`,
      ]
        .filter((line, i, arr) => !(line === "" && arr[i - 1] === ""))
        .join("\n"),
      // Optional: rich HTML version
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#0d1729">
          <h2 style="margin:0 0 1rem;font-size:1.4rem">
            New message from <span style="color:#c9a84c">${escHtml(name)}</span>
          </h2>
          <p style="margin:0 0 0.5rem">
  <strong>Email:</strong> ${escHtml(email)}
</p>
          ${company ? `<p style="margin:0 0 0.5rem"><strong>Company / project:</strong> ${escHtml(company)}</p>` : ""}
${
  message
    ? `
  <p style="margin:1rem 0 0.3rem"><strong>Message:</strong></p>
  <p style="margin:0 0 0.5rem;white-space:pre-wrap;line-height:1.7">
    ${escHtml(message)}
  </p>
`
    : ""
}          <hr style="margin:1.5rem 0;border:none;border-top:1px solid #e4dccb"/>
          <p style="color:#888;font-size:0.8rem">Sent via bhavani-portfolio contact form</p>
        </div>
      `,
    });

    if (error) {
      console.error("[Resend error]", error);
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ id: data?.id }, { status: 200 });
  } catch (err) {
    console.error("[contact route error]", err);
    return Response.json({ error: "Internal server error." }, { status: 500 });
  }
}

/** Minimal HTML escaper — keeps the HTML email safe */
function escHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
