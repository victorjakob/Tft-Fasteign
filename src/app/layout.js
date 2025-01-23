import "./globals.css";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

// Import Archivo fonts

export const metadata = {
  title: {
    default: "MiniMax",
    template: "%s - MiniMax - Bókhaldsþjónusta", // Dynamic title templates
  },
  description:
    "Fagleg og áreiðanleg bókhaldsþjónusta fyrir einstaklinga og fyrirtæki",
  keywords: [
    "bókhald",
    "bókhaldsþjónusta",
    "skattskil",
    "MiniMax",
    "fjármál",
    "reikningsskil",
    "bókhaldsstofa",
    "fyrirtækjaþjónusta",
  ],
  authors: [{ name: "MiniMax", url: "https://minimax.is" }],
  creator: "MiniMax",
  publisher: "MiniMax",
  openGraph: {
    siteName: "MiniMax",
    locale: "is_IS", // Icelandic locale
    type: "website",
    url: "https://minimax.is",
    title: "MiniMax - Fagleg bókhaldsþjónusta",
    description:
      "Fagleg og áreiðanleg bókhaldsþjónusta fyrir einstaklinga og fyrirtæki",
    images: [
      {
        url: "/desk.jpg", // Using the desk image from the WhoWeAre component
        width: 1200,
        height: 630,
        alt: "MiniMax Bókhaldsþjónusta",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1.0", // Mobile responsiveness
  themeColor: "#2a2829",
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
      <body className={`font-elisabethische antialiased`}>
        <Topbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
