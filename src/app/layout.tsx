import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Envera BioSols",
  description: "Digital Ledger Management for Your Business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <nav className="bg-blue-700 text-white px-6 py-4 flex gap-6 items-center shadow">
          <span className="font-bold text-xl tracking-wide">Envera BioSols</span>
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/dashboard" className="hover:underline">Dashboard</Link>
          <Link href="/customers" className="hover:underline">Customers</Link>
          <Link href="/transactions" className="hover:underline">Transactions</Link>
          <Link href="/reports" className="hover:underline">Reports</Link>
        </nav>
        <div className="max-w-5xl mx-auto mt-8">
          {children}
        </div>
      </body>
    </html>
  );
}
