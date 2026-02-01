// app/about-us/page.tsx
import Image from "next/image";

type ValueCard = {
  title: string;
  desc: string;
};

type PersonalityItem = {
  title: string;
  desc: string;
};

export default function AboutUsPage() {
  const values: ValueCard[] = [
    {
      title: "Professional\nQuality",
      desc: "Kami bekerja dengan profesionalisme tinggi, mengutamakan kualitas dalam setiap detail.",
    },
    {
      title: "Solution\nFocused",
      desc: "Professional Quality Kami bekerja dengan profesionalisme tinggi, mengutamakan kualitas dalam setiap detail.",
    },
    {
      title: "Build on\nTrust",
      desc: "Kepercayaan adalah fondasi kami, dibangun melalui kejujuran dan konsistensi hasil kerja.",
    },
    {
      title: "Reliable\nProtection",
      desc: "Kami memberikan perlindungan maksimal dengan standar kualitas yang dapat diandalkan.",
    },
  ];

  const personalities: PersonalityItem[] = [
    {
      title: "Professional & Competent",
      desc: "Tampil sebagai partner yang ahli, terstruktur, dan berpengalaman dalam menangani kebutuhan waterproofing bangunan berisiko tinggi.",
    },
    {
      title: "Solution Oriented",
      desc: "Berpikir praktis dan strategis, fokus pada penyelesaian masalah secara tepat, bukan sekadar menjual produk.",
    },
    {
      title: "Trustworthy",
      desc: "Konsisten dalam kualitas, jelas dalam proses, dan dapat diandalkan—membangun kepercayaan jangka panjang dengan setiap klien.",
    },
    {
      title: "Calm & Confident",
      desc: "Berkomunikasi dengan tenang, jelas, dan penuh keyakinan, mencerminkan penguasaan teknis dan profesionalisme.",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-[#e6e6e6] overflow-hidden">
      {/* ===== HERO / ABOUT US ===== */}
      <section className="relative">
        {/* dekor kiri atas (tekstur) */}
        <div className="pointer-events-none select-none absolute -left-3 -top-10 opacity-100">
          <div className="relative w-50 lap:w-[320px] aspect-1/2">
            <Image
              src="/tekstur.png"
              alt="Texture"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* dekor kanan (tekstur) */}
        <div className="pointer-events-none select-none absolute -right-6 top-62.5 lap:top-125 opacity-100">
          <div className="relative w-50 lap:w-77.5 aspect-1/2">
            <Image
              src="/tekstur-1.png"
              alt="Texture"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-20 lap:pt-75 pb-16 lap:pb-20 relative">
          <div className="grid gap-10 lap:grid-cols-[720px_1fr] lap:items-start lap:-ml-50">
            {/* LEFT: LOGO BIG */}
            <div className="relative">
              <div
                className="
                relative
                mx-auto lap:mx-0
                w-65
                h-125
                lap:h-130
                lap:w-120
                lap:ml-40
                -translate-y-6 lap:translate-y-1
                "
              >
                <Image
                  src="/logo-big.png"
                  alt="Nuve Pluvia"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* RIGHT: ABOUT + VISI MISI */}
            <div className="lap:pt-6 lap:-ml-26">
              <h1 className="font-made font-bold text-[40px] lap:text-[50px] text-[#131524]">
                about us
              </h1>

              <p className="mt-4 font-avenir font-medium text-[14px] lap:text-[16px] leading-relaxed text-[#131524] max-w-143.75">
                <span className="font-black">PT. Nuve Pluvia Solution</span>{" "}
                adalah perusahaan{" "}
                <span className="italic">specialist waterproofing</span> yang
                berdiri dari pengalaman sejak 2013, berkomitmen menghadirkan
                solusi perlindungan bangunan dari kebocoran akibat hujan.
                Berangkat dari filosofi nama NUVE—gabungan Nusantara dan
                Buenaventura, kota dengan curah hujan tertinggi di dunia—kami
                memahami tantangan air di lingkungan tropis dan ekstrem.
              </p>

              <p className="mt-4 font-avenir font-medium text-[14px] lap:text-[16px] leading-relaxed text-[#131524] max-w-137.5">
                Dengan fokus pada kualitas, ketepatan solusi, dan kepercayaan,
                NUVE hadir sebagai partner andal untuk perlindungan jangka
                panjang setiap bangunan.
              </p>

              {/* VISI */}
              <div className="mt-8 lap:mt-10">
                <h2 className="font-made font-bold text-[30px] lap:text-[40px] text-[#131524]">
                  visi
                </h2>

                <div className="mt-3 relative inline-block overflow-visible">
                  <div
                    className="
                    absolute inset-0 lap:-right-2
                    bg-linear-to-r from-[#0B0F1A] to-[#14192D]
                    rounded-tr-[60px] rounded-bl-[60px]
                    rounded-tl-none rounded-br-none
                    "
                  />

                  <div className="relative text-[#e6e6e6] px-8 py-6 max-w-112.5">
                    <p className="font-avenir font-medium text-[14px] lap:text-[16px] leading-relaxed">
                      Menjadi solusi waterproofing terpercaya yang melindungi
                      bangunan dari hujan dengan kualitas dan keandalan terbaik.
                    </p>
                  </div>
                </div>
              </div>

              {/* MISI */}
              <div className="mt-6 lap:mt-8">
                <h2 className="font-made font-bold text-[30px] lap:text-[40px] text-[#131524]">
                  misi
                </h2>

                <div className="mt-3 relative inline-block overflow-visible">
                  <div
                    className="
                    absolute inset-0 lap:-right-10
                    bg-linear-to-r from-[#0B0F1A] to-[#14192D]
                    rounded-tr-[60px] rounded-bl-[60px]
                    rounded-tl-none rounded-br-none
                    "
                  />

                  <div className="relative text-[#e6e6e6] px-8 py-6 max-w-135">
                    <p className="font-avenir font-medium text-[14px] lap:text-[16px] leading-relaxed">
                      Menghadirkan solusi perlindungan yang efektif dan
                      berkelanjutan. Menjaga standar kualitas tinggi dalam
                      setiap pengerjaan. Membangun kepercayaan melalui hasil
                      nyata dan konsistensi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* OUR VALUES */}
          <div className="mt-10 lap:mt-10">
            <h1 className="font-made font-bold text-[40px] lap:text-[50px] text-[#131524]">
              our values
            </h1>

            <div className="mt-8 grid gap-6 lap:gap-14 lap:grid-cols-4">
              {values.map((v, idx) => (
                <div
                  key={idx}
                  className="
                    bg-linear-to-r from-[#0B0F1A] to-[#14192D]
                    text-[#e6e6e6]
                    rounded-tr-[50px] rounded-bl-[50px] rounded-tl-none rounded-br-[50px]
                    lap:rounded-tr-[44px] lap:rounded-bl-[44px] lap:rounded-tl-none lap:rounded-br-[44px]
                    px-8 py-8
                    min-h-50 lap:min-h-70

                    transition-all duration-300 ease-out
                    hover:from-[#14192D] hover:to-[#485464]
                    hover:shadow-[0_18px_50px_rgba(0,0,0,0.22)]
                "
                >
                  <p className="font-avenir font-black text-[22px] lap:text-[28px] leading-snug">
                    {/* Mobile: 1 baris */}
                    <span className="lap:hidden whitespace-nowrap">
                      {v.title.replace(/\n/g, " ")}
                    </span>

                    {/* Lap/Desktop: boleh 2 baris */}
                    <span className="hidden lap:block whitespace-pre-line max-w-42.5">
                      {v.title}
                    </span>
                  </p>

                  <p className="mt-6 font-avenir font-medium text-[14px] lap:text-[15px] leading-thight text-[#e6e6e6]/90 lap:max-w-42.5">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* BRAND PERSONALITY */}
          <div className="mt-16 lap:mt-20">
            <h1 className="font-made font-bold text-[40px] lap:text-[50px] text-[#131524]">
              brand personality
            </h1>

            <div className="mt-10 grid gap-y-14 gap-x-10 lap:grid-cols-2 lap:gap-x-10">
              {personalities.map((p, idx) => {
                // MOBILE: 1 kolom -> selang-seling pakai idx
                const isTopMobile = idx % 2 === 0;

                // LAP: 2 kolom -> selang-seling per baris (0-1 baris 1, 2-3 baris 2, dst)
                const rowLap = Math.floor(idx / 2);
                const isTopLap = rowLap % 2 === 0;

                return (
                  <div key={idx} className="flex items-start gap-8">
                    {/* PILL */}
                    <div
                      className={[
                        "shrink-0",
                        "w-20 h-25 lap:w-25 lap:h-25",
                        "bg-linear-to-r from-[#0B0F1A] to-[#14192D]",

                        // MOBILE shape
                        isTopMobile
                          ? "rounded-tr-[40px] rounded-bl-[40px] rounded-tl-none rounded-br-none"
                          : "rounded-tl-[40px] rounded-br-[40px] rounded-tr-none rounded-bl-none",

                        // LAP override shape (biar desktop tetep sesuai row)
                        isTopLap
                          ? "lap:rounded-tr-[40px] lap:rounded-bl-[40px] lap:rounded-tl-none lap:rounded-br-none"
                          : "lap:rounded-tl-[40px] lap:rounded-br-[40px] lap:rounded-tr-none lap:rounded-bl-none",
                      ].join(" ")}
                    />

                    {/* TEXT */}
                    <div>
                      <p className="font-avenir font-black text-[#131524] text-[16px] lap:text-[20px]">
                        {p.title}
                      </p>
                      <p className="mt-2 font-avenir font-medium text-[#131524] text-[14px] lap:text-[16px] leading-tight max-w-180">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="mt-14 text-center font-avenir font-black text-[#131524]/90 lap:pl-30 lap:pr-30 text-[14px] lap:text-[16px]">
              NUVE berkomunikasi dengan gaya bahasa yang profesional, jelas, dan
              meyakinkan, berfokus pada solusi nyata serta membangun kepercayaan
              jangka panjang.
            </p>
          </div>
        </div>
      </section>

      {/* ===== TARGET MARKET (DARK) ===== */}
      <section className="w-full bg-linear-to-r from-[#0B0F1A] to-[#14192D] text-[#e6e6e6]">
        <div className="max-w-7xl mx-auto px-6 py-16 lap:py-20">
          <div className="grid gap-12 lap:gap-10 lap:grid-cols-[1.05fr_0.95fr] lap:items-start">
            {/* LEFT TEXT */}
            <div>
              <h1 className="font-made font-bold text-[40px] lap:text-[50px] leading-none">
                target market
              </h1>

              <div className="mt-10">
                <p className="font-avenir font-black text-[16px] lap:text-[16px]">
                  Segmen Utama – Maintenance Building
                </p>

                <p className="mt-5 font-avenir font-medium text-[14px] lap:text-[16px] text-[#e6e6e6]/80 leading-relaxed max-w-92.5 lap:max-w-112.5">
                  Bangunan berisiko tinggi yang sudah beroperasional dan
                  membutuhkan solusi waterproofing efektif tanpa mengganggu
                  aktivitas harian gedung.
                </p>

                <p className="mt-8 font-avenir font-black text-[16px] lap:text-[16px]">
                  Jenis Bangunan:
                </p>

                <ul className="mt-4 space-y-1 font-avenir font-medium text-[14px] lap:text-[15px] text-[#e6e6e6]/80 pl-8">
                  <li>Pusat perbelanjaan (mall)</li>
                  <li>Rumah sakit & fasilitas kesehatan</li>
                  <li>Hotel & hospitality building</li>
                  <li>Gedung perkantoran</li>
                  <li>Apartemen & mixed-use building</li>
                  <li>Convention hall, auditorium, dan fasilitas publik</li>
                </ul>
              </div>
            </div>

            {/* RIGHT DONUT + LABELS */}
            <div className="relative">
              {/* Wrapper supaya donut selalu “center” di mobile, “kanan” di laptop */}
              <div className="relative mx-auto w-fit lap:ml-auto">
                {/* Labels (responsif, gak pakai left/top ekstrem) */}
                <div
                  className="
                    absolute
                    left-0 top-0
                    -translate-x-[15%]
                    translate-y-[20%]
                    lap:-translate-x-[10%]
                    lap:translate-y-[200%]
                    font-made font-medium text-[13px] text-[#e6e6e6]/90
                    lap:text-[15px]
                  "
                >
                  Penjualan Material
                  <br />
                  Langsung
                </div>

                <div
                  className="
                    absolute
                    left-0 top-0
                    -translate-x-[50%]
                    translate-y-[150%]
                    lap:-translate-x-[70%]
                    lap:translate-y-[530%]
                    font-made font-medium text-[14px] text-[#e6e6e6]/90
                    lap:text-[15px]
                  "
                >
                  Segmen Sekunder –
                  <br />
                  Proyek Baru &amp; Industri
                </div>

                {/* Donut */}
                <div
                  className="
                    font-made font-medium
                    w-55 h-55
                    lap:w-140 lap:h-140
                    translate-x-20
                    lap:translate-y-10
                    transition-transform duration-300 ease-out
                    lap:hover:scale-[1.1]
                    origin-center
                  "
                >
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    {(() => {
                      const cx = 100;
                      const cy = 100;

                      // DONUT SPEK (tetap)
                      const rOuterFixed = 91;
                      const stroke = 65;
                      const r = rOuterFixed - stroke / 2;

                      const rOuter = r + stroke / 2;
                      const rInner = r - stroke / 2;

                      const a0 = 250;
                      const a1 = a0 - 360 * 0.12;
                      const a2 = a1 - 360 * 0.08;

                      const degToRad = (d: number) => (d * Math.PI) / 180;

                      const sepIn = 3;
                      const sepOut = 1;

                      const lineAt = (deg: number) => {
                        const rad = degToRad(deg);
                        const startR = rInner - sepIn;
                        const endR = rOuter + sepOut;

                        return {
                          x1: cx + startR * Math.cos(rad),
                          y1: cy + startR * Math.sin(rad),
                          x2: cx + endR * Math.cos(rad),
                          y2: cy + endR * Math.sin(rad),
                        };
                      };

                      const labelPos = (deg: number, rr: number) => {
                        const rad = degToRad(deg);
                        return {
                          x: cx + rr * Math.cos(rad),
                          y: cy + rr * Math.sin(rad),
                        };
                      };

                      const mid12 = (a0 + a1) / 2;
                      const mid8 = (a1 + a2) / 2;
                      const mid80 = a2 - (360 * 0.8) / 2;

                      const p8 = labelPos(mid8, 70);
                      const p12 = labelPos(mid12, 60);
                      const p80 = labelPos(mid80, 60);

                      return (
                        <>
                          <circle
                            cx={cx}
                            cy={cy}
                            r={r}
                            fill="none"
                            stroke="#e6e6e6"
                            strokeWidth={stroke}
                          />

                          {[a0, a1, a2].map((a, i) => {
                            const L = lineAt(a);
                            return (
                              <line
                                key={`sep-${i}`}
                                {...L}
                                stroke="#0B0F1A"
                                strokeWidth="3"
                                strokeLinecap="butt"
                              />
                            );
                          })}

                          <circle cx={cx} cy={cy} r="23" fill="#e6e6e6" />

                          <text
                            x={p12.x}
                            y={p12.y}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="11"
                            fontWeight="500"
                            fill="#0B0F1A"
                          >
                            12%
                          </text>

                          <text
                            x={p8.x}
                            y={p8.y}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="11"
                            fontWeight="500"
                            fill="#0B0F1A"
                          >
                            8%
                          </text>

                          <text
                            x={p80.x}
                            y={p80.y}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="11"
                            fontWeight="500"
                            fill="#0B0F1A"
                          >
                            80%
                          </text>
                        </>
                      );
                    })()}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SALES MODEL (B2B) ===== */}
      <section className="w-full bg-[#e6e6e6]">
        <div className="max-w-7xl mx-auto px-6 py-16 lap:py-20">
          <h2 className="font-made font-bold text-[34px] lap:text-[55px] text-[#131524]">
            sales model (B2B)
          </h2>

          {/* MOBILE (pakai model card) */}
          <div className="mt-10 grid gap-8 lap:hidden">
            {/* left card */}
            <div className="relative overflow-hidden">
              <div className="bg-linear-to-r from-[#0B0F1A] to-[#14192D] rounded-tr-[60px] rounded-bl-[60px] rounded-tl-none rounded-br-none px-10 py-10 text-[#e6e6e6] min-h-57.5">
                <p className="font-avenir font-black text-[15px]">
                  NUVE Pluvia Solution,
                </p>
                <p className="mt-2 font-avenir font-medium text-[14px] text-[#e6e6e6]/85 leading-thight">
                  berfokus pada penjualan B2B dengan dua tipe model penjualan:
                </p>

                <div className="mt-6 space-y-2 font-avenir font-medium text-[14px] text-[#e6e6e6]/85">
                  <p>
                    <span className="font-avenir font-black text-[#e6e6e6]">
                      20%
                    </span>{" "}
                    penjualan material langsung ke gedung atau kontraktor
                    (non-retail)
                  </p>
                  <p>
                    <span className="font-avenir font-black text-[#e6e6e6]">
                      80%
                    </span>{" "}
                    penjualan material dengan jasa aplikasi terpasang dan
                    garansi satu pintu
                  </p>
                </div>
              </div>
            </div>

            {/* right card */}
            <div className="relative overflow-hidden">
              <div className="bg-linear-to-r from-[#0B0F1A] to-[#14192D] rounded-tr-[60px] rounded-bl-[60px] rounded-tl-none rounded-br-none px-10 py-10 text-[#e6e6e6] min-h-57.5">
                <p className="font-avenir font-medium text-[14px] text-[#e6e6e6]/85 leading-relaxed">
                  Untuk layanan material + jasa terpasang, segmen pasar{" "}
                  <span className="font-avenir font-black">NUVE</span> meliputi:
                </p>

                <div className="mt-6 space-y-2 font-avenir font-medium text-[14px] text-[#e6e6e6]/85">
                  <p>
                    <span className="font-avenir font-black text-[#e6e6e6]">
                      90%
                    </span>{" "}
                    bangunan berisiko tinggi yang sudah beroperasional
                    (maintenance building) seperti mall, rumah sakit, hotel,
                    gedung perkantoran, apartemen, hall, dan sejenisnya
                  </p>
                  <p>
                    <span className="font-avenir font-black text-[#e6e6e6]">
                      10%
                    </span>{" "}
                    bangunan berisiko tinggi proyek baru dan pabrik
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* LAPTOP (layout : pill + teks, bg terang) */}
          <div className="hidden lap:grid mt-14 lap:grid-cols-2 gap-x-24">
            {/* LEFT BLOCK */}
            <div className="flex items-start gap-10">
              {/* pill */}
              <div className="shrink-0 w-20 h-57.5 bg-linear-to-r from-[#0B0F1A] to-[#14192D] rounded-tl-[40px] rounded-br-[40px] rounded-tr-none rounded-bl-none" />

              {/* text */}
              <div className="pt-2">
                <p className="font-avenir font-black text-[#131524] text-[16px]">
                  NUVE Pluvia Solution,
                </p>
                <p className="mt-2 font-avenir font-medium text-[#131524] text-[15px] leading-tight max-w-130">
                  berfokus pada penjualan B2B dengan dua tipe model penjualan:
                </p>

                <div className="mt-8 space-y-6 font-avenir font-medium text-[#131524] text-[15px] leading-tight max-w-140">
                  <p>
                    <span className="font-avenir font-black">20%</span>{" "}
                    penjualan material langsung ke gedung atau kontraktor
                    (non-retail)
                  </p>
                  <p>
                    <span className="font-avenir font-black">80%</span>{" "}
                    penjualan material dengan jasa aplikasi terpasang dan
                    garansi satu pintu.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT BLOCK */}
            <div className="flex items-start gap-10">
              {/* pill */}
              <div className="shrink-0 w-20 h-57.5 bg-linear-to-r from-[#0B0F1A] to-[#14192D] rounded-tl-[40px] rounded-br-[40px] rounded-tr-none rounded-bl-none" />

              {/* text */}
              <div className="pt-2">
                <p className="font-avenir font-medium text-[#131524] text-[15px] leading-tight max-w-140">
                  Untuk layanan material + jasa terpasang, segmen pasar{" "}
                  <span className="font-avenir font-black">NUVE</span> meliputi:
                </p>

                <div className="mt-8 space-y-8 font-avenir font-medium text-[#131524] text-[15px] leading-tight max-w-155">
                  <p>
                    <span className="font-avenir font-black">90%</span> bangunan
                    berisiko tinggi yang sudah beroperasional (maintenance
                    building) seperti mall, rumah sakit, hotel, gedung
                    perkantoran, apartemen, hall, dan sejenisnya
                  </p>
                  <p>
                    <span className="font-avenir font-black">10%</span> bangunan
                    berisiko tinggi proyek baru dan pabrik
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
