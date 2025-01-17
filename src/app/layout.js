import { Archivo } from "next/font/google"; // Replace with Archivo
import "./globals.css";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import { GoogleAnalytics } from "nextjs-google-analytics";

// Import Archivo fonts
const archivo = Archivo({
  variable: "--font-archivo-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"], // Specify the weights you want
});

export const metadata = {
  title: {
    default:
      "TFT Fasteign - Sumarhús, Vistvæn timburhús, Tilbúin til uppsetningar",
    template: "%s - TFT Fasteign - Sumarhús", // Dynamic title templates
  },
  description: "Frábær timburhús tilbúin til byggingar",
  keywords: [
    "sumarhús",
    "vistvæn timburhús",
    "byggingar",
    "TFT Fasteign",
    "Home made",
    "Summerhouse",
    "Búa til mitt sumarhús",
  ],
  authors: [{ name: "TFT Fasteign", url: "https://tftfasteign.is" }],
  creator: "TFT Fasteign",
  publisher: "TFT Fasteign",
  openGraph: {
    siteName: "TFT Fasteign",
    locale: "is_IS", // Icelandic locale
    type: "website",
    url: "https://tftfasteign.is",
    title:
      "TFT Fasteign - Sumarhús, Vistvæn timburhús, Tilbúin til uppsetningar",
    description: "Frábær timburhús tilbúin til byggingar",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/whitelotus-23.appspot.com/o/TFT-Fasteign%2Fsumarhus-fasteign.jpg?alt=media&token=9ec186cb-964c-473d-a418-b2ffe949b53e", // Replace with your Open Graph image URL
        width: 1200,
        height: 630,
        alt: "TFT Fasteign Sumarhús",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1.0", // Mobile responsiveness
  themeColor: "#414740",
};

export default function RootLayout({ children }) {
  return (
    <html lang="is">
      <head>
        <GoogleAnalytics trackPageViews />

        {/* Favicon links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="icon"
          type="image/png"
          href="/android-chrome-192x192.png"
          sizes="192x192"
        />
        <link
          rel="icon"
          type="image/png"
          href="/android-chrome-512x512.png"
          sizes="512x512"
        />
      </head>
      <body className={`${archivo.variable}  antialiased`}>
        <Topbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
