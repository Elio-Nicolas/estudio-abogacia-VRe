import "./globals.css";

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
