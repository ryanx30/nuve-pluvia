import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-linear-to-r from-[#0B0F1A] to-[#14192D]">
      <div
        className="
          max-w-7xl mx-auto
          px-6 py-7
          flex flex-row items-center justify-between
          md:flex-row md:items-center
          gap-6
          text-white
        "
      >
        {/* Left Content */}
        <div className="text-[8px] lap:text-[17px] leading-[1.1] text-white/85 max-w-62.5 lap:max-w-xl">
          <p>
            Ruko The Springs SPRU No.32, Jl. Gading Golf Boulevard, Cihuni,
            Pagedangan, Tangerang Regency, Banten 15332
          </p>
          <p className="mt-2">nuvepluviasolution@gmail.com</p>
          <p>0857-8787-7000</p>
        </div>

        {/* Right Logo */}
        <div className="shrink-0 flex items-center">
          {/* Mobile */}
          <Image
            src="/logo.png"
            alt="Nuve Pluvia"
            width={50}
            height={50}
            className="lap:hidden"
            priority
          />

          {/* Laptop */}
          <Image
            src="/logo.png"
            alt="Nuve Pluvia"
            width={100}
            height={100}
            className="hidden lap:block"
            priority
          />
        </div>
      </div>
    </footer>
  );
}
