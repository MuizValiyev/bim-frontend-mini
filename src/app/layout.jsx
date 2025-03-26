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
  title: "BIM – Станьте партнёром сети Street Кафе BIM",
  description:
    "Станьте партнёром сети Street Кафе BIM и откройте собственное кафе всего за 1–2 месяца! Готовая модель, поддержка на каждом этапе и минимальные сроки запуска.",
  openGraph: {
    title: "BIM – Станьте партнёром сети Street Кафе BIM",
    description:
      "Станьте партнёром сети Street Кафе BIM и откройте собственное кафе всего за 1–2 месяца! Готовая модель, поддержка на каждом этапе и минимальные сроки запуска.",
    url: "https://bimratail.uz", // укажите реальный URL
    type: "website",
    images: [
      {
        url: "/icondescription.png", // путь к изображению (лучше использовать абсолютный URL)
        width: 1200,
        height: 1200,
        alt: "BIM Street Кафе",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BIM – Станьте партнёром сети Street Кафе BIM",
    description:
      "Станьте партнёром сети Street Кафе BIM и откройте собственное кафе всего за 1–2 месяца! Готовая модель, поддержка на каждом этапе и минимальные сроки запуска.",
    images: ["/icondescription.png"], // путь к изображению
  },
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
