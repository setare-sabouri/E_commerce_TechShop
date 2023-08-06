import "./globals.css";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home",
  description: "Generated by create next app",
};

import Navbar from "../components/Navbar";
import Announcement from "@/components/Announcement";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Announcement />
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
