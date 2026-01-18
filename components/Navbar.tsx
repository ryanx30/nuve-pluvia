"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/product", label: "PRODUCT" },
  { href: "/about-us", label: "ABOUT US" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;

      // Optional: kalau menu mobile lagi kebuka, jangan hide (biar UX gak aneh)
      if (open) return;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const goingDown = currentY > lastY.current;
          const delta = Math.abs(currentY - lastY.current);

          // ignore scroll kecil biar gak jitter
          if (delta > 6) {
            // Kalau sudah agak turun, baru boleh hide
            if (goingDown && currentY > 80) setHidden(true);
            // Scroll ke atas -> show lagi
            if (!goingDown) setHidden(false);
          }

          lastY.current = currentY;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <header
      className={[
        "fixed top-0 left-0 w-full z-50 flex justify-center pt-6",
        "transition-transform duration-500 ease-out",
        hidden ? "-translate-y-[120%]" : "translate-y-0",
      ].join(" ")}
      // biar tidak nahan klik area kosong di atas
      style={{ pointerEvents: "none" }}
    >
      <div className="w-[92%] max-w-6xl relative" style={{ pointerEvents: "auto" }}>
        <nav
          className="
            rounded-full
            bg-gradient-to-r from-[#0B0F1A] to-[#14192D]
            px-6 md:px-10
            py-3
            flex items-center justify-between
            text-white
            shadow-[0_10px_30px_rgba(0,0,0,0.18)]
          "
        >
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
            <Image src="/logo.png" alt="Nuve Pluvia" width={90} height={90} priority />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-[12px] font-semibold tracking-wider">
            {navItems.map((item) => (
              <li key={item.href} className="hover:opacity-75 transition-opacity">
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
                className="tracking-wider"
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
