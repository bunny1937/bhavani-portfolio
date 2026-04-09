import "./globals.css";
import { bodyFont, displayFont, monoFont } from "./fonts";

export const metadata = {
  title: "Bhavani Nehra | Full Stack Developer",
  description:
    "Premium portfolio for Bhavani Nehra, a full stack developer focused on product-thinking, interface systems, and business-impactful builds.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
