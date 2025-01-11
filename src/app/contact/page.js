import ContactForm from "../components/Contaxt";
import Location from "../components/Location";

export default function Contact() {
  return (
    <main className="min-h-screen bg-black pt-20 bg-opacity-30">
      <div className="fixed inset-0 -z-10">
        <img
          src="/home/sumarhus-fasteign.jpg"
          alt="Contact background"
          className="w-full h-full object-cover"
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        />
      </div>

      {/* Contact Form Section */}
      <ContactForm />
      <Location />
    </main>
  );
}
