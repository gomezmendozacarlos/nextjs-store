import type { Metadata } from "next";
import Link from "next/link";
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

export const metadata: Metadata = {
  title: "Itos Store",
  description: "Tienda de ropa y accesorios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
          <nav>
            <ul>
              <li><Link href={"/"}>Home</Link></li>
              <li><Link href={"/store"}>Store</Link></li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
