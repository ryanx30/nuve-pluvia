import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#e6e6e6]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#e6e6e6]">
        <div className="max-w-6xl mx-auto px-6 pt-10 pb-40 lap:pt-16 lap:pb-60 relative">
          {/* Shape atas: kanan-atas & kiri-bawah rounded */}
          <div
            className="
              absolute left-6 lap:-left-10
              top-10 lap:top-14
              w-30 lap:w-37.5
              h-65 lap:h-90
              bg-linear-to-b from-[#0B0F1A] to-[#2C344A]
              rounded-tl-none rounded-br-none
              rounded-tr-[60px] lap:rounded-tr-[80px]
              rounded-bl-[60px] lap:rounded-bl-[80px]
            "
          />

          {/* Shape bawah: kiri-atas & kanan-bawah rounded */}
          <div
            className="
              absolute left-6 lap:-left-10
              top-77.5 lap:top-107.5
              w-30 lap:w-37.5
              h-22.5 lap:h-31.25
              bg-[#4B5563]
              opacity-80
              rounded-tr-none rounded-bl-none
              rounded-tl-[50px] lap:rounded-tl-[70px]
              rounded-br-[50px] lap:rounded-br-[70px]
            "
          />

          {/* Watermark N (PNG) */}
          <div
            className="
              absolute -right-42.5 lap:-right-53.75
              top-[55%] -translate-y-1/2
              w-105 h-105
              lap:w-207.5 lap:h-207.5
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
          <div className="relative z-10 pl-32.5 lap:pl-33.75 pt-45 lap:pt-70">
            <h1 className="font-made font-bold text-[40px] lap:text-[80px] leading-[1.1] tracking-[0] text-black">
              At NUVE,
              <br />
              We Deliver Protection
            </h1>
          </div>
        </div>
      </section>

      {/* PRODUCT STRIP */}
      <section className="relative -mt-16 lap:-mt-24 pb-16 lap:pb-24">
        <div className="w-full bg-linear-to-r from-[#0B0F1A] to-[#14192D]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="relative h-auto lap:h-130 py-10 lap:py-0">
              {/* Teks HYRA */}
              <div className="lap:absolute lap:-left-25 lap:top-0 lap:h-full lap:w-105 text-white lap:pt-14">
                <h2 className="text-[54px] lap:text-[68px] font-[Avenir] font-black tracking-wide">
                  HYRA
                </h2>

                <p className="mt-2 text-[18px] lap:text-[30px] font-[Avenir] font-black leading-snug">
                  Acrylic Roof Waterproofing
                  <br />
                  Hero Product
                </p>

                <p className="mt-4 text-[14px] lap:text-[16px] font-avenir font-normal text-white/80 leading-relaxed max-w-107.5">
                  Waterproofing dengan system coating membrane memadukan antara
                  keunggulan terbaik membrane dan coating di saat bersamaan
                  meciptakan lapisan flexible (elastis) namun tetap kuat
                  (hardnes tinggi) disaat yang bersamaan sehingga dapat
                  memberikan perlindungan maximal terhadap kebocoran, radiasi
                  UV, dan pergerakan micro struktur bangunan.
                </p>

                {/* Mobile image (muncul cuma di <1000px) */}
                <div className="mt-6 lap:hidden flex justify-center">
                  <div className="group relative w-90 h-57.5 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.25)] overflow-hidden">
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

              {/* Laptop image overlap (muncul cuma di >=1000px) */}
              <div className="hidden lap:block absolute -right-22.5 top-1/2 -translate-y-1/2">
                <div className="group relative w-215 h-145 bg-white shadow-[0_30px_90px_rgba(0,0,0,0.35)] overflow-hidden">
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
