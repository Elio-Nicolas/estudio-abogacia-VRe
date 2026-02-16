import "./globals.css";
import { Playfair_Display, Cormorant_Garamond, Libre_Baskerville } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});


export const metadata = {
  title: "Estudio Jurídico",
  description: "Asesoramiento legal profesional y personalizado",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
