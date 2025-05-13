import "./globals.css";
import type { Metadata } from "next";
import { lexend, leagueSpartan, mulish } from "./fonts";

export const metadata: Metadata = {
  title: "AGRITS - Monitoring Kesehatan Padi",
  description: "Monitoring Kesehatan Padi Berbasis Sentinel-2 dan Himawari-9",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`scroll-smooth ${lexend.variable} ${leagueSpartan.variable} ${mulish.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=MuseoModerno:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/icon-agrits-1.png" type="image/png" />
      </head>
      <body className="antialiased font-museo">{children}</body>
    </html>
  );
}
