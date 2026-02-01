"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/site/home", label: "HOME" },
  { href: "/site/product", label: "PRODUCT" },
  { href: "/site/about-us", label: "ABOUT US" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 flex justify-center pt-3 lap:pt-6"
      style={{ pointerEvents: "none" }}
    >
      <div
        className="w-[92%] max-w-7xl relative"
        style={{ pointerEvents: "auto" }}
      >
        <nav
          className="
            rounded-full
            bg-linear-to-r from-[#0B0F1A] to-[#14192D]
            px-6 md:px-10
            py-0
            flex items-center justify-between
            text-white
            shadow-[0_10px_30px_rgba(0,0,0,0.18)]
          "
        >
          {/* Logo */}
          <Link
            href="/site/home"
            className="flex items-center"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/logo.png"
              alt="Nuve Pluvia"
              width={70}
              height={70}
              className="lap:w-22.5 lap:h-22.5"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-14 text-[14px] md:text-[19px] font-black tracking-wider font-[Avenir]">
            {navItems.map((item) => (
              <li
                key={item.href}
                className="hover:opacity-75 transition-opacity"
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl leading-none"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            ☰
          </button>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <div
            className="
              md:hidden
              mt-3
              rounded-2xl
              bg-[#0B0F1A]
              text-white
              py-6
              flex flex-col items-center gap-6
              shadow-[0_20px_50px_rgba(0,0,0,0.25)]
            "
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="tracking-wider font-black font-[Avenir]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
