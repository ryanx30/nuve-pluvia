import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#e6e6e6]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#e6e6e6]">
        <div className="max-w-6xl mx-auto px-6 pt-10 pb-40 md:pt-16 md:pb-60 relative">
          {/* Shape atas: kanan-atas & kiri-bawah rounded */}
          <div
            className="
              absolute left-6 md:left-[-40px]
              top-10 md:top-14
              w-[120px] md:w-[150px]
              h-[260px] md:h-[360px]
              bg-gradient-to-b from-[#0B0F1A] to-[#2C344A]

              rounded-tl-none rounded-br-none
              rounded-tr-[60px] md:rounded-tr-[80px]
              rounded-bl-[60px] md:rounded-bl-[80px]
            "
          />

          {/* Shape bawah: kiri-atas & kanan-bawah rounded */}
          <div
            className="
              absolute left-6 md:left-[-40px]
              top-[310px] md:top-[430px]
              w-[120px] md:w-[150px]
              h-[90px] md:h-[125px]
              bg-[#4B5563]
              opacity-80

              rounded-tr-none rounded-bl-none
              rounded-tl-[50px] md:rounded-tl-[70px]
              rounded-br-[50px] md:rounded-br-[70px]
            "
          />

          {/* Watermark N (PNG) */}
          <div
            className="
              absolute right-[-170px] md:right-[-215px]
              top-[55%] -translate-y-1/2
              w-[420px] h-[420px]
              md:w-[830px] md:h-[830px]
              opacity-80
              pointer-events-none select-none
            "
          >
            <Image
              src="/N-layer.png"
              alt="N Layer"
              fill
              className="object-contain contrast-150 brightness-95"
              priority
            />
          </div>

          {/* Hero text */}
          <div className="relative z-10 pl-[130px] md:pl-[135px] pt-45 md:pt-70">
            <h1 className="font-bold text-[40px] md:text-[80px] leading-[1.1] tracking-[0] text-black">
              At NUVE,
              <br />
              We Deliver Protection
            </h1>
          </div>
        </div>
      </section>

      {/* PRODUCT STRIP */}
      <section className="relative -mt-16 md:-mt-24 pb-16 md:pb-24">
        <div className="w-full bg-gradient-to-r from-[#0B0F1A] to-[#14192D]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="relative h-auto md:h-[520px] py-10 md:py-0">
              {/* Teks HYRA */}
              <div className="md:absolute md:left-[-100px] md:top-0 md:h-full md:w-[420px] text-white md:pt-14">
                <h2 className="text-[54px] md:text-[68px] font-[Avenir] font-black tracking-wide">
                  HYRA
                </h2>

                <p className="mt-2 text-[14px] md:text-[30px] font-[Avenir] font-black leading-snug">
                  Acrylic Roof Waterproofing
                  <br />
                  Hero Product
                </p>

                <p className="mt-4 text-[10px] md:text-[16px] font-[Avenir] font-normal text-white/80 leading-relaxed max-w-[430px]">
                  Waterproofing dengan system coating membrane memadukan antara
                  keunggulan terbaik membrane dan coating di saat bersamaan
                  meciptakan lapisan flexible (elastis) namun tetap kuat
                  (hardnes tinggi) disaat yang bersamaan sehingga dapat
                  memberikan perlindungan maximal terhadap kebocoran, radiasi
                  UV, dan pergerakan micro struktur bangunan.
                </p>

                {/* Mobile image (muncul cuma di mobile) */}
                <div className="mt-6 md:hidden flex justify-center">
                  <div className="group relative w-[360px] h-[230px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.25)] overflow-hidden">
                    <Image
                      src="/product.png"
                      alt="HYRA Waterproofing"
                      fill
                      priority
                      className="
                        object-cover
                        transition duration-300 ease-out
                        brightness-90
                        group-hover:brightness-110
                      "
                    />
                  </div>
                </div>
              </div>

              {/* Desktop image overlap (muncul cuma di md ke atas) */}
              <div className="hidden md:block absolute right-[-90px] top-1/2 -translate-y-1/2">
                <div className="group relative w-[860px] h-[580px] bg-white shadow-[0_30px_90px_rgba(0,0,0,0.35)] overflow-hidden">
                  <Image
                    src="/product.png"
                    alt="HYRA Waterproofing"
                    fill
                    priority
                    className="
                      object-cover
                      transition duration-300 ease-out
                      brightness-90
                      group-hover:brightness-110
                    "
                  />
                </div>
              </div>
            </div>
            {/* end strip container */}
          </div>
        </div>
      </section>
    </div>
  );
}
