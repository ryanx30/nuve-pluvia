"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full flex justify-center pt-6">
      <nav
        className="
          w-[92%] max-w-6xl
          rounded-full
          bg-gradient-to-r from-[#0B0F1A] to-[#14192D]
          px-8 py-4
          flex items-center justify-between
          text-white
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Nuve Pluvia"
            width={36}
            height={36}
          />
          <span className="text-sm font-semibold leading-tight">
            nuve<br />pluvia
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-sm font-medium tracking-wide">
          <li className="hover:opacity-70 transition">
            <Link href="/">HOME</Link>
          </li>
          <li className="hover:opacity-70 transition">
            <Link href="/product">PRODUCT</Link>
          </li>
          <li className="hover:opacity-70 transition">
            <Link href="/about-us">ABOUT US</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
            md:hidden
            absolute top-24
            w-[92%] max-w-6xl
            rounded-2xl
            bg-[#0B0F1A]
            text-white
            py-6
            flex flex-col items-center gap-6
          "
        >
          <Link href="/" onClick={() => setOpen(false)}>HOME</Link>
          <Link href="/product" onClick={() => setOpen(false)}>PRODUCT</Link>
          <Link href="/about-us" onClick={() => setOpen(false)}>ABOUT US</Link>
        </div>
      )}
    </header>
  );
}
