import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#0B0F1A] to-[#14192D]">
      <div
        className="
          max-w-6xl mx-auto
          px-6
          py-7
          flex flex-col md:flex-row
          items-start md:items-center
          justify-between
          gap-6
          text-white
        "
      >
        {/* Left Content */}
        <div className="text-[17px] leading-[1.1] text-white/85 max-w-xl">
          <p>
            Ruko The Springs SPRU No.32, Jl. Gading Golf Boulevard, Cihuni,
            Pagedangan, Tangerang Regency, Banten 15332
          </p>
          <p className="mt-2">nuvepluviasolution@gmail.com</p>
          <p>0857-8787-7000</p>
        </div>

        {/* Right Logo */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="Nuve Pluvia" width={100} height={100} />
        </div>
      </div>
    </footer>
  );
}
