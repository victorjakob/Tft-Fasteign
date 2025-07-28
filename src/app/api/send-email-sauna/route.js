import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(process.env.RESEND_API_KEY);

// Create a Supabase client with service role key for server-side DB writes
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

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

    const emailData = {
      from: "TFT-Sauna Order <info@tftfasteign.is>",
      to: ["gunnarbachmann1@gmail.com"],
      bcc: ["viggijakob@gmail.com"],
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

    // Step 1: Save to DB first (with email_sent: false)
    const { data: orderData, error: dbError } = await supabase
      .from("tft_sauna_order")
      .insert([
        {
          name,
          email,
          phone,
          comment,
          sauna,
          selected_addons: selectedAddons,
          total_price: totalPrice,
          email_sent: false,
        },
      ])
      .select();

    if (dbError) {
      console.error("Error saving sauna order to DB:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save order to database." }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Step 2: Send email
    try {
      await resend.emails.send(emailData);
      console.log("Email sent successfully");
    } catch (emailError) {
      console.error("Error sending email:", emailError);
      return new Response(JSON.stringify({ error: "Failed to send email." }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Step 3: Mark email as sent in DB
    const { error: updateError } = await supabase
      .from("tft_sauna_order")
      .update({ email_sent: true })
      .eq("id", orderData[0].id);

    if (updateError) {
      console.error("Error updating email_sent status:", updateError);
      // Don't fail the request here, just log the error
    }

    return new Response(
      JSON.stringify({ message: "Order email sent and saved successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending sauna order email or saving to DB:", error);

    return new Response(
      JSON.stringify({
        error: "Failed to send order email or save to database.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
