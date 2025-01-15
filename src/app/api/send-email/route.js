import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
console.log(process.env.SENDGRID_API_KEY);
export async function POST(req) {
  try {
    const { to, subject, text, html } = await req.json();

    const msg = {
      to, // Recipient email
      from: "gunnarbachmann1@gmail.com", // Your verified sender email
      subject,
      text,
      html,
    };

    await sgMail.send(msg);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    return new Response(JSON.stringify({ error: "Failed to send email." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
