import { Barlow_Condensed, Inter, Roboto_Mono, Ubuntu } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const barlowCondensed = Barlow_Condensed({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});
