
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Orbitron } from "next/font/google";
import { Poppins } from "next/font/google";


import { Merriweather_Sans } from "next/font/google";

const merriweather = Merriweather_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zavin's Portfolio",
  description: "This is Sarin Rahman Zavin's portfolio site. Browse the site to know more about me.",
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins", // 👈 this creates a custom CSS variable
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"], // you can add more weights as needed
  variable: "--font-orbitron",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} font-sans ${orbitron.variable} font-sans ${merriweather.variable} font-sans antialiased`}
      >


        {children}
      </body>
    </html>
  );
}

