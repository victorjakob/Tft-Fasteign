import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const { name, email, phone, comment, sauna, selectedAddons, totalPrice } =
      await req.json();

    if (!email || !name || !sauna) {
      return new Response(
        JSON.stringify({ error: "Missing required fields." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Format addons for email
    const addonsHtml =
      selectedAddons && selectedAddons.length
        ? `<ul>${selectedAddons
            .map(
              (a) =>
                `<li>${a.name} (${a.price ? a.price + " ISK" : "0 ISK"})</li>`
            )
            .join("")}</ul>`
        : "<em>Engar viðbætur valdar</em>";

    const msg = {
      to: "gunnarbachmann1@gmail.com",
      from: {
        email: "info@tftfasteign.is",
        name: "TFT-Sauna Order",
      },
      replyTo: email,
      subject: `Ný sauna pöntun frá ${name}`,
      text: `Ný sauna pöntun\n\nNafn: ${name}\nNetfang: ${email}\nSími: ${
        phone || ""
      }\n\nSauna: ${sauna?.name || ""}\nVerð: ${
        sauna?.base_price || ""
      } ISK\nHeildarverð: ${totalPrice || ""} ISK\n\nViðbætur: ${
        (selectedAddons || [])
          .map((a) => a.name + (a.price ? ` (${a.price} ISK)` : ""))
          .join(", ") || "Engar"
      }\n\nAthugasemd: ${comment || ""}`,
      html: `
        <h2>Ný sauna pöntun</h2>
        <p><strong>Nafn:</strong> ${name}</p>
        <p><strong>Netfang:</strong> ${email}</p>
        <p><strong>Sími:</strong> ${phone || ""}</p>
        <hr />
        <p><strong>Sauna:</strong> ${sauna?.name || ""}</p>
        <p><strong>Verð:</strong> ${sauna?.base_price || ""} ISK</p>
        <p><strong>Heildarverð:</strong> ${totalPrice || ""} ISK</p>
        <p><strong>Viðbætur:</strong> ${addonsHtml}</p>
        <p><strong>Athugasemd:</strong><br/>${
          comment || "<em>Engin athugasemd</em>"
        }</p>
      `,
    };

    await sgMail.send(msg);

    return new Response(
      JSON.stringify({ message: "Order email sent successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending sauna order email:", error);

    return new Response(
      JSON.stringify({ error: "Failed to send order email." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
