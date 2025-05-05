import { Roboto } from 'next/font/google'
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import { Metadata } from "next";
import "app/sass/globals.sass";

const roboto = Roboto({
  subsets: ['latin'] 
})

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
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
