import { Fraunces, IBM_Plex_Mono, Sora } from "next/font/google";

export const displayFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const bodyFont = Sora({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});
