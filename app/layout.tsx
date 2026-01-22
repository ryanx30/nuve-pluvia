import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nuve Pluvia",
  description: "Company Profile Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen flex flex-col bg-[#e6e6e6]`}
      >
        <Navbar />

        <main className="flex-1 pt-28 md:pt-32 bg-[#e6e6e6]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

