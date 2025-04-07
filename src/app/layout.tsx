import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumbs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pokemon Search",
  description:
    "Pokemon Search app built with Nextjs, Typescript & tailwindcss.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <Breadcrumb
            homeElement={'Home'}
            separator={<span> &gt; </span>}
            activeClasses='active:font-bold'
            containerClasses='flex py-5 text-(--color-blue-custom)'
            listClasses='hover:underline mx-2 font-bold '
            capitalizeLinks
          />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
