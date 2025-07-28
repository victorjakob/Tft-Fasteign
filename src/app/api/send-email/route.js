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
    const {
      name,
      email,
      message,
      phone,
      comment,
      house,
      selectedAddons,
      totalPrice,
    } = await req.json();

    if (!email || !name || (!message && !house)) {
      return new Response(
        JSON.stringify({ error: "Missing required fields." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Compose the email
    const emailData = {
      from: "TFT-Sumarhús Order <info@tftfasteign.is>",
      to: ["gunnarbachmann1@gmail.com"],
      bcc: ["viggijakob@gmail.com"],
      replyTo: email,
      subject: house
        ? `Ný sumarhús pöntun frá ${name}`
        : `New Message from ${name}`,
      text: house
        ? `Ný sumarhús pöntun\n\nNafn: ${name}\nNetfang: ${email}\nSími: ${
            phone || ""
          }\n\nSumarhús: ${house?.name || ""}\nVerð: ${
            house?.base_price || ""
          } ISK\nHeildarverð: ${totalPrice || ""} ISK\n\nViðbætur: ${
            (selectedAddons || [])
              .map((a) => a.name + (a.price ? ` (${a.price} ISK)` : ""))
              .join(", ") || "Engar"
          }\n\nAthugasemd: ${comment || ""}`
        : message,
      html: house
        ? `
          <h2>Ný sumarhús pöntun</h2>
          <p><strong>Nafn:</strong> ${name}</p>
          <p><strong>Netfang:</strong> ${email}</p>
          <p><strong>Sími:</strong> ${phone || ""}</p>
          <hr />
          <p><strong>Sumarhús:</strong> ${house?.name || ""}</p>
          <p><strong>Verð:</strong> ${house?.base_price || ""} ISK</p>
          <p><strong>Heildarverð:</strong> ${totalPrice || ""} ISK</p>
          <p><strong>Viðbætur:</strong> ${
            selectedAddons && selectedAddons.length
              ? `<ul>${selectedAddons
                  .map(
                    (a) =>
                      `<li>${a.name} (${
                        a.price ? a.price + " ISK" : "0 ISK"
                      })</li>`
                  )
                  .join("")}</ul>`
              : "<em>Engar viðbætur valdar</em>"
          }</p>
          <p><strong>Athugasemd:</strong><br/>${
            comment || "<em>Engin athugasemd</em>"
          }</p>
        `
        : `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
    };

    // If this is a summerhouse order, follow the error-proof flow
    if (house) {
      // Step 1: Save to DB first (with email_sent: false)
      const { data: orderData, error: dbError } = await supabase
        .from("tft_summerhouse_order")
        .insert([
          {
            name,
            email,
            phone,
            comment,
            house,
            selected_addons: selectedAddons,
            total_price: totalPrice,
            email_sent: false,
          },
        ])
        .select();

      if (dbError) {
        console.error("Error saving summerhouse order to DB:", dbError);
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
        return new Response(
          JSON.stringify({ error: "Failed to send email." }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" },
          }
        );
      }

      // Step 3: Mark email as sent in DB
      const { error: updateError } = await supabase
        .from("tft_summerhouse_order")
        .update({ email_sent: true })
        .eq("id", orderData[0].id);

      if (updateError) {
        console.error("Error updating email_sent status:", updateError);
        // Don't fail the request here, just log the error
      }
    } else {
      // For regular contact form (not summerhouse order), just send email
      try {
        await resend.emails.send(emailData);
        console.log("Email sent successfully");
      } catch (emailError) {
        console.error("Error sending email:", emailError);
        return new Response(
          JSON.stringify({ error: "Failed to send email." }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    }

    return new Response(
      JSON.stringify({
        message: house
          ? "Order email sent and saved successfully!"
          : "Email sent successfully!",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email or saving to DB:", error);

    return new Response(
      JSON.stringify({ error: "Failed to send email or save to database." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
