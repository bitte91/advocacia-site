import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bittencourt Advocacia - Justiça e Inovação ao Seu Lado",
  description: "Escritório de advocacia especializado em direito empresarial, trabalhista, civil e tributário. Mais de 25 anos de experiência.",
  keywords: ["advocacia", "direito empresarial", "direito trabalhista", "direito civil", "direito tributário", "advogado", "consultoria jurídica"],
  authors: [{ name: "Bittencourt Advocacia" }],
  openGraph: {
    title: "Bittencourt Advocacia",
    description: "Justiça e Inovação ao Seu Lado",
    url: "https://bittencourt-advocacia.vercel.app",
    siteName: "Bittencourt Advocacia",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bittencourt Advocacia",
    description: "Justiça e Inovação ao Seu Lado",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
