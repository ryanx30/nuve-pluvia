import Image from "next/image";

type HighlightItem = {
  head: string;
  sub?: string;
};

const HOVER_BRIGHT_GROUP =
  "transition duration-300 ease-out group-hover:brightness-130";

function SectionTitle({
  children,
  align = "left",
}: {
  children: string;
  align?: "left" | "center";
}) {
  return (
    <h3
      className={[
        "font-made font-bold text-[#131524]",
        "text-[30px] lap:text-[50px] leading-none",
        align === "center" ? "text-center" : "text-left",
      ].join(" ")}
    >
      {children}
    </h3>
  );
}

function HighlightBar({
  items,
  colsLap,
}: {
  items: HighlightItem[];
  colsLap: 3 | 5;
}) {
  return (
    <div className="lap:pt-5 lap:pb-3 w-full bg-linear-to-r from-[#131524] to-[#16192b]">
      <div
        className={[
          "max-w-7xl mx-auto px-2",
          "py-9",
          "grid gap-y-6 gap-x-9",
          "grid-cols-2", // mobile/tablet
          colsLap === 3 ? "lap:grid-cols-3" : "lap:grid-cols-5",
        ].join(" ")}
      >
        {items.map((it, idx) => (
          <div key={idx} className="text-[#e6e6e6]">
            <p className="font-avenir font-black text-[14px] lap:text-[16px] leading-snug">
              {it.head}
            </p>
            {it.sub ? (
              <p className="mt-1 font-avenir font-medium text-[14px] lap:text-[16px] text-[#e6e6e6] leading-relaxed">
                {it.sub}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function SplitHighlightBoxes({
  left,
  right,
}: {
  left: HighlightItem[];
  right: HighlightItem[];
}) {
  return (
    <div className="mt-8 lap:mb-30 w-full">
      <div className="grid gap-6 lap:grid-cols-2">
        {/* Left box */}
        <div className="bg-linear-to-r from-[#0B0F1A] to-[#14192D] px-10 lap:px-16 py-16 min-h-44.5">
          <div className="text-right grid grid-cols-2 gap-x-6 gap-y-6">
            {left.map((it, idx) => (
              <div key={idx} className="text-[#e6e6e6]">
                <p className="font-avenir font-black text-[11px] lap:text-[16px] leading-snug">
                  {it.head}
                </p>
                {it.sub ? (
                  <p className="mt-1 font-avenir font-regular text-[11px] lap:text-[16px] text-[#e6e6e6] leading-relaxed">
                    {it.sub}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/* Right box */}
        <div className="bg-linear-to-r from-[#14192D] to-[#0B0F1A] px-10 lap:px-16 py-16 min-h-44.5">
          <div className="text-left grid grid-cols-2 gap-x-6 gap-y-6">
            {right.map((it, idx) => (
              <div key={idx} className="text-[#e6e6e6]">
                <p className="font-avenir font-black text-[11px] lap:text-[16px] leading-snug">
                  {it.head}
                </p>
                {it.sub ? (
                  <p className="mt-1 font-avenir font-regular text-[11px] lap:text-[16px] text-[#e6e6e6] leading-relaxed">
                    {it.sub}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function OverlapProductRow({
  imageSrc,
  title,
  subtitle,
  desc,
  features,
}: {
  imageSrc: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
}) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* IMAGE FULL-BLEED kiri (LAP) */}
      <div
        className="
          group
          hidden lap:block
          absolute left-0 top-0
          h-182.5
          overflow-hidden
          right-[calc((100vw-1152px)/2+560px)]
        "
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          className={`object-cover ${HOVER_BRIGHT_GROUP}`}
          priority
        />
      </div>

      {/* CONTENT (tetap center) */}
      <div className="max-w-6xl mx-auto px-6 py-16 lap:py-20 relative">
        <div className="flex flex-col gap-10 lap:flex-row lap:items-start">
          {/* MOBILE IMAGE */}
          <div className="group relative w-full lap:hidden">
            <div className="relative w-full aspect-16/10 overflow-hidden">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className={`object-cover ${HOVER_BRIGHT_GROUP}`}
                priority
              />
            </div>
          </div>

          {/* RIGHT SIDE CARD */}
          <div className="relative w-full lap:ml-auto lap:w-175">
            {/* shadow layer */}
            <div
              className="
                hidden lap:block
                absolute -z-10
                -left-8.5 top-5.5
                w-180 h-full
                bg-black/15
                rounded-tr-[160px] rounded-bl-[160px]
                rounded-tl-none rounded-br-none
              "
            />

            <div
              className="
                bg-[#3F3F3F] text-[#e6e6e6]
                w-full lap:w-180 lap:ml-21.25
                px-12 lap:px-14
                py-12 lap:py-14
                rounded-tr-[150px] rounded-bl-[150px]
                rounded-tl-none rounded-br-none
                shadow-[0_30px_90px_rgba(0,0,0,0.18)]
              "
            >
              {/* desc */}
              <div className="pl-4 lap:pl-20">
                <h2 className="font-avenir font-black text-[44px] lap:text-[56px] leading-none">
                  {title}
                </h2>

                <p className="mt-4 font-avenir font-black text-[18px] lap:text-[26px] leading-snug whitespace-pre-line">
                  {subtitle}
                </p>

                <p className="mt-6 font-avenir font-regular text-[14px] lap:text-[16px] leading-relaxed text-[#e6e6e6]/80 max-w-115">
                  {desc}
                </p>
              </div>

              {/* features box */}
              <div className="mt-5 pl-10 lap:pl-20 w-full lap:w-157.5 bg-linear-to-r from-[#0B0F1A] to-[#14192D] rounded-bl-[90px] px-10 py-12">
                <div className="grid grid-cols-2 gap-x-5 gap-y-6">
                  {features.map((f, idx) => (
                    <p
                      key={idx}
                      className="font-avenir font-black text-[13px] lap:text-[16px] leading-snug text-[#e6e6e6]/90 whitespace-pre-line"
                    >
                      {f}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* end card */}
        </div>
      </div>
    </section>
  );
}


export default function ProductPage() {
  return (
    <div className="min-h-screen w-full pt-28 lap:pt-32 bg-[#e6e6e6] overflow-x-hidden">
      {/* ===== TOP / HYRA ===== */}
      <section className="relative w-full overflow-hidden">
        {/* IMAGE FULL-BLEED kiri (LAP) */}
        <div
          className="
            group
            hidden lap:block
            absolute left-0 top-0
            translate-y-17.5
            h-162.5
            overflow-hidden
            right-[calc((100vw-1152px)/2+430px-30px)]
        "
        >
          <Image
            src="/product.png"
            alt="HYRA"
            fill
            priority
            className={`object-cover ${HOVER_BRIGHT_GROUP}`}
          />
        </div>

        {/* CONTENT CENTER */}
        <div className="max-w-6xl mx-auto px-6 pt-10 lap:pt-12">
          {/* MOBILE IMAGE (biar di mobile tetap normal) */}
          <div className="group lap:hidden mt-8">
            <div className="relative w-full aspect-16/10 overflow-hidden">
              <Image
                src="/product.png"
                alt="HYRA"
                fill
                priority
                className={`object-cover ${HOVER_BRIGHT_GROUP}`}
              />
            </div>
          </div>

          {/* RIGHT SIDE (CARD + DESC) */}
          <div className="mt-8 lap:mt-10 lap:pt-6.75">
            {/* Bikin wrapper lebih lebar biar DESC bisa lebih lebar dari card */}
            <div className="relative lap:ml-auto lap:w-225 overflow-visible">
              {/* CARD (lebih sempit + overlap ke kiri) */}
              <div
                className="
                    relative z-10
                    w-50 lap:w-100
                    bg-[#3F3F3F] text-[#f5f5f5]
                    lap:px-14 lap:pt-26 lap:pb-19
                    px-10 pt-10 pb-15
                    rounded-tr-[110px] rounded-bl-[110px]
                    rounded-tl-none rounded-br-none
                    lap:ml-120
                    shadow-[0_30px_90px_rgba(0,0,0,0.18)]
                "
              >
                <h1 className="mt-5 lap:mt-8 font-avenir font-black text-[44px] lap:text-[75px] leading-none">
                  HYRA
                </h1>

                <p className="mt-6 font-avenir font-black text-[16px] lap:text-[32px] leading-snug">
                  Acrylic Roof
                  <br />
                  Waterproofing
                </p>
              </div>

              {/* DESC (geser kanan + bisa lebih lebar daripada card) */}
              <p
                className="
                    relative z-10
                    mt-8
                    font-avenir font-normal
                    text-[14px] lap:text-[16px]
                    leading-tight text-[#131524]
                    w-full
                    lap:w-113.75
                    lap:ml-135
                "
              >
                Waterproofing dengan system coating membrane memadukan antara
                keunggulan terbaik membrane dan coating di saat bersamaan
                menciptakan lapisan fleksibel (elastis) namun tetap kuat
                (hardnes tinggi) disaat yang bersamaan sehingga dapat memberikan
                perlindungan maximal terhadap kebocoran, radiasi UV, dan
                pergerakan micro struktur bangunan.
              </p>
            </div>
          </div>

          {/* highlight title (left) */}
          <div className="pt-8 lap:pt-34 pb-5 lap:pb-10 lap:-ml-22">
            <SectionTitle>highlight product</SectionTitle>
          </div>
        </div>

        {/* highlight strip */}
        <HighlightBar
          colsLap={5}
          items={[
            {
              head: "Exposed System,",
              sub: "tanpa lapisan pelindung tambahan.",
            },
            {
              head: "Membrane Tanpa Sambungan,",
              sub: "coating langsung mengikuti bentuk bangunan",
            },
            { head: "Tahan Genangan Air & Radiasi UV" },
            {
              head: "Fleksibel,",
              sub: "mengikuti muai susut dan mencegah retak",
            },
            {
              head: "Tidak Lengket,",
              sub: "aman dilalui pejalan kaki & roda karet/PU",
            },
          ]}
        />
      </section>

      {/* ===== HYRON ===== */}
      <section className="relative w-full overflow-hidden">
        {/* tekstur kiri */}
        <div className="pointer-events-none select-none absolute -left-10 lap:-left-25 -top-17.5 lap:-top-38.75 w-50 lap:w-117.5 opacity-100">
          <div className="relative w-full aspect-3/4">
            <Image
              src="/tekstur.png"
              alt="Texture"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* IMAGE FULL-BLEED kanan (LAP) */}
        <div
          className="
            group
            hidden lap:block
            absolute right-0
            top-17.5
            h-142.5
            overflow-hidden
            left-[calc((100vw-1152px)/2+750px)]
            "
        >
          <Image src="/hyron.png" alt="HYRON" fill className={`object-cover ${HOVER_BRIGHT_GROUP}`} />
        </div>

        {/* CONTENT CENTER */}
        <div className="max-w-6xl mx-auto px-6 py-16 lap:py-16 relative">
          <div className="grid gap-10 lap:grid-cols-[610px_1fr] lap:items-center">
            {/* TEXT */}
            <div className="text-right justify-self-end lap:pt-10">
              <h2 className="font-avenir font-black text-[44px] lap:text-[50px] text-[#131524] leading-none">
                HYRON
              </h2>
              <p className="mt-2 font-avenir font-black text-[14px] lap:text-[26px] text-[#131524] leading-snug">
                Epoxy Pool &<br />
                Wet Area Waterproofing
              </p>
              <p className="mt-6 font-avenir font-medium text-[11px] lap:text-[16px] text-[#131524] leading-relaxed max-w-112.5 ml-auto">
                Waterproofing berbahan dasar epoxy untuk area kolam, GWT, IPAL,
                planter box, dan roof garden. Memiliki daya rekat tinggi,
                permukaan tanpa pori, dan kekerasan maksimal, sehingga tahan
                terhadap bahan kimia, akar tanaman, dan rendaman air
                terus-menerus.
              </p>
            </div>

            {/* IMAGE (mobile/tablet) */}
            <div className="group relative w-full lap:hidden">
              <div className="relative w-full aspect-16/10 overflow-hidden">
                <Image
                  src="/hyron.png"
                  alt="HYRON"
                  fill
                  className={`object-cover ${HOVER_BRIGHT_GROUP}`}
                />
              </div>
            </div>

            {/* spacer kolom kanan saat lap (biar grid balance) */}
            <div className="hidden lap:block" />
          </div>

          <div className="pt-12 lap:-ml-22">
            <SectionTitle>highlight product</SectionTitle>
          </div>
        </div>

        <HighlightBar
          colsLap={5}
          items={[
            {
              head: "Tahan Bahan Kimia, Akar Tanaman, dan Rendaman Air",
            },
            { head: "Daya Rekat Tinggi pada Beton" },
            { head: "Waktu Pengeringan Cepat" },
          ]}
        />
      </section>

      {/* ===== HYSEAL + HYCEM ===== */}
      <section className="w-full">
        <div className="mt-18 max-w-7xl mx-auto px-6 py-5 lap:py-5">
          {/* DESKTOP / LAP */}
          <div className="hidden lap:grid grid-cols-[170px_1fr_1fr_170px] gap-x-5 gap-y-10 items-center overflow-visible">
            {/* LEFT TEXT: HYSEAL */}
            <div className="mt-70 text-right lap:-ml-7.5">
              <h3 className="font-avenir font-black text-[52px] text-[#131524] leading-none">
                HYSEAL
              </h3>
              <p className="mt-6 font-avenir font-black text-[26px] text-[#131524] leading-snug">
                <span className="whitespace-nowrap">Elastomeric Wall</span>
                <br />
                Waterproofing
              </p>
            </div>
            {/* IMAGE HYSEAL */}
            <div className="group relative w-full h-107.5 overflow-hidden">
              <Image
                src="/hyseal.png"
                alt="HYSEAL"
                fill
                className={`object-cover ${HOVER_BRIGHT_GROUP}`}
              />
            </div>
            {/* IMAGE HYCEM */}
            <div className="group relative w-full h-107.5 overflow-hidden">
              <Image
                src="/hycem.png"
                alt="HYCEM"
                fill
                className={`object-cover ${HOVER_BRIGHT_GROUP}`}
              />
            </div>
            {/* RIGHT TEXT: HYCEM */}
            <div className="mt-70 text-left">
              <h3 className="font-avenir font-black text-[52px] text-[#131524] leading-none">
                HYCEM
              </h3>
              <p className="mt-6 font-avenir font-black text-[26px] text-[#131524] leading-snug">
                <span className="whitespace-nowrap">Cement-Based</span>
                <br />
                Waterproofing
              </p>
            </div>
            {/* DESC ROW */}
            <div /> {/* empty left spacer */}
            <p className="text-right font-avenir font-medium text-[16px] text-[#131524] leading-relaxed relative w-125 -ml-21.25">
              Waterproofing berbahan dasar Acrylic Elastomeric dirancang khusus
              untuk area dinding bangunan. Tahan terhadap perubahan cuaca
              extreme baik hujan maupun sinar UV dengan tingkat elastis maksimal
              sehingga dapat melindungi dinding dari retakan.
            </p>
            <p className="text-left font-avenir font-medium text-[16px] text-[#131524] leading-relaxed relative w-125 -mr-21.25 lap:-mt-6.5">
              Waterproofing berbahan dasar Semen dan Polymer dirancang efektif
              dan efisien sebagai perlindungan terhadap air dengan penggunaan
              conceal system.
            </p>
            <div /> {/* empty right spacer */}
          </div>

          {/* MOBILE (biar nggak ribet, tetap stack) */}
          <div className="lap:hidden grid gap-10">
            {/* HYSEAL */}
            <div className="grid gap-6">
              <div className="text-center">
                <h3 className="font-avenir font-black text-[36px] text-[#131524] leading-none">
                  HYSEAL
                </h3>
                <p className="mt-3 font-avenir font-black text-[16px] text-[#131524] leading-snug">
                  Elastomeric Wall
                  <br />
                  Waterproofing
                </p>
              </div>
              <div className="group relative w-full aspect-square overflow-hidden">
                <Image
                  src="/hyseal.png"
                  alt="HYSEAL"
                  fill
                  className={`object-cover ${HOVER_BRIGHT_GROUP}`}
                />
              </div>
              <p className="font-avenir font-medium text-[14px] text-[#131524] leading-relaxed text-center">
                Waterproofing berbahan dasar Acrylic Elastomeric dirancang
                khusus untuk area dinding bangunan. Tahan terhadap perubahan
                cuaca extreme baik hujan maupun sinar UV dengan tingkat elastis
                maksimal sehingga dapat melindungi dinding dari retakan.
              </p>
            </div>

            {/* HYCEM */}
            <div className="grid gap-6">
              <div className="text-center">
                <h3 className="font-avenir font-black text-[36px] text-[#131524] leading-none">
                  HYCEM
                </h3>
                <p className="mt-3 font-avenir font-black text-[16px] text-[#131524] leading-snug">
                  Cement-Based
                  <br />
                  Waterproofing
                </p>
              </div>
              <div className="group relative w-full aspect-square overflow-hidden">
                <Image
                  src="/hycem.png"
                  alt="HYCEM"
                  fill
                  className={`object-cover ${HOVER_BRIGHT_GROUP}`}
                />
              </div>
              <p className="font-avenir font-medium text-[14px] text-[#131524] leading-relaxed text-center">
                Waterproofing berbahan dasar Semen dan Polymer dirancang efektif
                dan efisien sebagai perlindungan terhadap air dengan penggunaan
                conceal system.
              </p>
            </div>
          </div>

          {/* centered highlight title */}
          <div className="pt-16">
            <SectionTitle align="center">highlight product</SectionTitle>
          </div>
        </div>

        <SplitHighlightBoxes
          left={[
            {
              head: "Tahan Cuaca Panas & Hujan,",
              sub: "elastis mencegah keretakan",
            },
            { head: "Tidak Lengket & Beragam", sub: "Pilihan Warna" },
          ]}
          right={[
            {
              head: "Mudah Diaplikasikan dengan",
              sub: "Tingkat Kekerasan Tinggi",
            },
            { head: "Waktu Pengeringan Cepat", sub: "dan Efisien" },
          ]}
        />
      </section>

      {/* ===== HYRA PU / HYGROUT / HYTAFT ===== */}
      <OverlapProductRow
        imageSrc="/hyra-pu.png"
        title="HYRA PU"
        subtitle={"Polyurethane\nWaterproofing Coating"}
        desc="Waterproofing berbahan dasar polyurethane yang membentuk lapisan fleksibel namun kuat, memberikan perlindungan maksimal terhadap kebocoran, radiasi UV, genangan air, dan pergerakan mikro struktur bangunan."
        features={[
          "Exposed System Tanpa\nLapisan Pelindung Tambahan",
          "Tahan Genangan Air &\nRadiasi UV",
          "Fleksibel Mengikuti Muai\nSusut Bangunan",
          "Tidak Lengket, aman dilalui\npejalan kaki & roda karet/PU",
        ]}
      />

      <OverlapProductRow
        imageSrc="/hygrout.png"
        title="HYGROUT"
        subtitle={"Polyurethane Injection"}
        desc="Waterproofing polyurethane injection satu komponen untuk penanganan kebocoran dari sisi negatif seperti basement, kolam gantung, kamar mandi gedung bertingkat, dan roof garden. Efektif menutup retakan dan honeycomb beton secara cepat dan efisien."
        features={[
          "Tekanan Injeksi Tinggi hingga\n10.000 PSI",
          "Reaksi Cepat terhadap Air",
          "Tidak Mengalami Penyusutan\nSetelah Kering",
        ]}
      />

      <OverlapProductRow
        imageSrc="/hytaft.png"
        title="HYTAFT"
        subtitle={"Epoxy Flooring\nSystem"}
        desc="Sistem epoxy heavy-duty coating dengan berbagai pilihan warna untuk melindungi lantai dari abrasi, menciptakan area steril, mudah dibersihkan, serta meningkatkan estetika. Cocok untuk pabrik, area parkir, dan rumah sakit."
        features={[
          "Tahan Bahan Kimia Asam &\nBasa",
          "Daya Rekat dan Strength\nTinggi",
          "Mudah Dibersihkan & Anti\nAbrasi",
          "Meningkatkan Estetika",
        ]}
      />
    </div>
  );
}
