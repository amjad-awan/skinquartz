
import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";


const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Laser Hair Removal Manchester | The Skin Quartz Clinic",
  description:
    "Safe, effective laser hair removal in Manchester for all skin types. Book a consultation at The Skin Quartz Clinic.",

  icons: {
    icon: [
      {
        url: "/images/favicon.png",
        type: "image/png",
      },
    ],
    shortcut: "/images/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
