import Image from "next/image";

export default function JenisPadiPage() {
  return (
    <div className="relative w-full min-h-screen px-4 py-24 text-white bg-[url('/images/agrits-bg.jpg')] bg-cover bg-top">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h1
          style={{ fontFamily: "League Spartan, sans-serif" }}
          className="text-4xl md:text-5xl font-bold mb-8 font-league-spartan text-center"
        >
          Jenis-Jenis Padi di Indonesia
        </h1>

        <div className="mb-12">
          <Image
            src="/images/foto-info-2.jpg"
            alt="Jenis Padi"
            width={1000}
            height={600}
            className="rounded-xl w-full h-auto md:w-[500px]"
          />
        </div>

        <div
          style={{ fontFamily: "Lexend, sans-serif" }}
          className="space-y-6 font-museo text-base md:text-lg text-white/90"
        >
          <div>
            <h2 className="font-bold">
              1. Padi Varietas Unggul (Hibrida & Inbrida)
            </h2>
            <p>
              Varietas unggul dikembangkan melalui pemuliaan tanaman untuk
              meningkatkan produktivitas, ketahanan terhadap hama, dan adaptasi
              terhadap kondisi lingkungan tertentu.
            </p>
            <ul className="list-disc ml-5">
              <li>
                <strong>Ciherang:</strong> Beras putih, pulen, 6–8 ton/ha. Tahan
                wereng coklat, cocok sawah irigasi.
              </li>
              <li>
                <strong>IR64:</strong> Umur panen 110–115 hari, tahan
                kekeringan, rentan wereng batang cokelat.
              </li>
              <li>
                <strong>Inpari 32:</strong> Hasil tinggi (8–9 ton/ha), tahan
                blas dan hawar daun bakteri.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">2. Padi Lokal/Tradisional</h2>
            <ul className="list-disc ml-5">
              <li>
                <strong>Pandan Wangi:</strong> Aromatik, premium market, 4–5
                ton/ha.
              </li>
              <li>
                <strong>Rojolele:</strong> Sangat pulen, cocok nasi liwet,
                rentan penggerek batang.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">3. Padi Organik</h2>
            <ul className="list-disc ml-5">
              <li>
                <strong>Mentik Wangi:</strong> Beras merah, kaya antioksidan,
                3–4 ton/ha.
              </li>
              <li>
                <strong>Sri Nyonya:</strong> Beras putih organik, ekspor market.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">4. Padi Hibrida</h2>
            <ul className="list-disc ml-5">
              <li>
                <strong>Intani 2:</strong> 10–12 ton/ha, tidak bisa ditanam
                ulang, tahan wereng coklat.
              </li>
              <li>
                <strong>Bernas Prima:</strong> Stabil di lahan suboptimal.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
