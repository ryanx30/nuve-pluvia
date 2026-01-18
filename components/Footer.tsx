import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#0B0F1A] to-[#14192D] mt-24">
      <div
        className="
          max-w-6xl
          mx-auto
          px-6
          py-10
          flex flex-col md:flex-row
          items-start md:items-center
          justify-between
          gap-8
          text-white
          text-sm
        "
      >
        {/* Left Content */}
        <div className="leading-relaxed text-white/90">
          <p>
            Ruko The Springs SPRU No.32, Jl. Gading Golf Boulevard, Cihuni,
            Pagedangan, Tangerang Regency, Banten 15332
          </p>
          <p className="mt-3">nuvepluviasolution@gmail.com</p>
          <p>0857-8787-7000</p>
        </div>

        {/* Right Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Nuve Pluvia"
            width={44}
            height={44}
          />
          <div className="text-sm leading-tight font-semibold">
            nuve<br />pluvia
          </div>
        </div>
      </div>
    </footer>
  );
}
