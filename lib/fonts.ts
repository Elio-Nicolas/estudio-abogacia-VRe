import { Playfair_Display, Cormorant_Garamond, Libre_Baskerville } from "next/font/google";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});
