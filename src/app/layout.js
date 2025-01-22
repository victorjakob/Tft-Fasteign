import { Libre_Bodoni } from "next/font/google"; // Import Libre Bodoni
import "./globals.css";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

// Import Archivo fonts
const libreBodoni = Libre_Bodoni({
  variable: "--font-libre-bodoni", // Update variable name
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify weights available for Libre Bodoni
});

export const metadata = {
  title: {
    default: "MiniMax",
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
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VB19NHE62T"
        ></script>
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
      </head>
      <body className={`${libreBodoni.variable} antialiased`}>
        <Topbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
