import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { siteConfig } from "@/constants/data";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

export const metadata = {
  title: "VoidFrame | Premium Digital Agency",
  description: "Premium web design, development, branding, SEO & social media — crafted to convert attention into revenue.",
  icons: {
    icon: [
      { url: siteConfig.logo, type: 'image/webp' },
    ],
    shortcut: [
      { url: siteConfig.logo, type: 'image/webp' },
    ],
    apple: [
      { url: siteConfig.logo },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Fonts used */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className={inter.variable}>
        {children}
        <Script
          src="https://code.iconify.design/3/3.1.0/iconify.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
