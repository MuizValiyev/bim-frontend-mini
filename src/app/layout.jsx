import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BIM в Узбекистане – Цифровое моделирование зданий и инфраструктуры",
  description: "BIM технологии в Узбекистане – современные решения для проектирования, строительства и эксплуатации зданий. Узнайте о преимуществах Building Information Modeling (BIM) и его внедрении в строительную отрасль Узбекистана.",
  keywords: "BIM Узбекистан, Building Information Modeling, цифровое строительство, проектирование зданий, архитектура, Revit, ArchiCAD, информационное моделирование, строительство Узбекистан",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon_bim.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

