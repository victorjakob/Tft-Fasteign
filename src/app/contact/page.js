import Image from "next/image"; // Import Image
import ContactForm from "./Contaxt";
import Location from "./Location";

export default function Contact() {
  return (
    <main className="min-h-screen bg-black pt-20 bg-opacity-30">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/home/sumarhus-fasteign.jpg"
          alt="Contact background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Contact Form Section */}
      <ContactForm />
      <Location />
    </main>
  );
}
