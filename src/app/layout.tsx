import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gianicola - Portfolio 2023",
  description: "Pagina web portafolio de Gianicola Jara Frontend",
  authors: { name: "Gianicola Jara", url: "https://github.com/gianicolajara" },
  keywords: ["nextjs", "reactjs", "css", "tailwind", "portfolio"],
  creator: "Gianicola Jara",
  viewport: { width: "device-width", initialScale: 1 },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`  bg-background ${poppins.className}`}>{children}</body>
    </html>
  );
}
