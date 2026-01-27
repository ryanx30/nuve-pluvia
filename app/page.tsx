// app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="min-h-screen w-full relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/landing-bg.png"
          alt="Landing Background"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center 1%" }}
        />
        {/* Overlay (biar bawahnya gelap) */}
        <div className="absolute inset-0 bg-linear-to-b from-black/5 via-black/25 to-[#131524]" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-5xl text-center">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="relative w-47.5 h-27.5 lap:w-62.5 lap:h-37.5 -mt-15 lap:-mt-16">
              <Image
                src="/logo-big.png"
                alt="Nuve Pluvia"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Heading */}
          <h1 className="mt-5 font-made font-bold text-[#131524] text-[18px] lap:text-[28px]">
            Smart Solutions for Lasting Protection
          </h1>

          {/* Button */}
          <div className="mt-90 lap:mt-70 flex justify-center">
            <Link
              href="/site/home"
              className="
                inline-flex items-center justify-center
                rounded-full
                bg-[#d9d9d9]
                text-[#131524]
                font-avenir font-black
                px-8 py-4
                text-[14px] lap:text-[18px]
                shadow-[0_12px_30px_rgba(0,0,0,0.25)]
                transition-transform duration-300
                hover:scale-[1.03] hover:bg-[#ffffff]
                active:scale-[0.99]
              "
            >
              Get a Solution
            </Link>
          </div>

          {/* Bottom text */}
          <p className="mt-10 lap:mt-20 font-made font-bold text-white text-[16px] lap:text-[22px]">
            Waterproofing Coating System
          </p>
        </div>
      </div>
    </main>
  );
}
