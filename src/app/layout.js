import { Archivo } from "next/font/google"; // Replace with Archivo
import "./globals.css";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

// Export viewport separately for Next.js app directory
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// Export themeColor separately for Next.js app directory
export const themeColor = "#414740";

// Import Archivo fonts
const archivo = Archivo({
  variable: "--font-archivo-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"], // Specify the weights you want
});

export const metadata = {
  metadataBase: new URL("https://www.tft.is"),
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="is">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VB19NHE62T"
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TFT Fasteign",
              url: "https://tftfasteign.is",
              logo: "https://firebasestorage.googleapis.com/v0/b/whitelotus-23.appspot.com/o/TFT-Fasteign%2Fsumarhus-fasteign.jpg?alt=media&token=9ec186cb-964c-473d-a418-b2ffe949b53e",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+354-XXXXXXX",
                contactType: "customer service",
              },
            }),
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-VB19NHE62T');
              `,
          }}
        />
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
