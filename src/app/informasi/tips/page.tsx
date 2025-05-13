import Image from "next/image";

export default function TipsPage() {
  return (
    <div className="relative w-full min-h-screen px-4 py-24 text-white bg-[url('/images/agrits-bg.jpg')] bg-cover bg-top">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 font-league-spartan text-center">Tips Kesehatan Tanaman Padi</h1>

        <div className="mb-12">
          <Image
            src="/images/foto-info-1.jpg"
            alt="Tips Menjaga Padi"
            width={1000}
            height={600}
            className="rounded-xl w-full h-auto md:w-[400px]"
          />
        </div>

        <div className="space-y-6 font-museo text-base md:text-lg text-white/90">
          <div>
            <h2 className="font-bold">1. Pemilihan Benih Berkualitas</h2>
            <ul className="list-disc ml-5">
              <li>Gunakan benih bersertifikat dari lembaga resmi seperti Balai Benih Padi Nasional untuk memastikan kemurnian genetik dan viabilitas tinggi.</li>
              <li>Uji daya tumbuh benih dengan merendam dalam air garam (benih yang mengapung adalah benih hampa).</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">2. Pengendalian Hama & Penyakit</h2>
            <ul className="list-disc ml-5">
              <li><strong>Wereng Batang Cokelat:</strong> Gejala: Daun menguning, tanaman kerdil. Solusi: Gunakan varietas tahan (Ciherang, Inpari), hindari pemupukan nitrogen berlebihan.</li>
              <li><strong>Penyakit Blas (Magnaporthe oryzae):</strong> Gejala: Bercak daun seperti mata ikan. Solusi: Rotasi tanaman, aplikasi fungisida berbahan aktif tricyclazole.</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">3. Pemupukan Berimbang</h2>
            <ul className="list-disc ml-5">
              <li>Analisis tanah sebelum pemupukan untuk mengetahui kebutuhan hara.</li>
              <li>Gunakan pupuk organik (kompos, pupuk kandang) untuk memperbaiki struktur tanah.</li>
              <li>Pupuk anorganik (NPK) diberikan sesuai fase pertumbuhan:</li>
              <ul className="list-disc ml-8">
                <li>Fase vegetatif: Nitrogen tinggi.</li>
                <li>Fase generatif: Fosfor dan kalium tinggi.</li>
              </ul>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">4. Pengelolaan Air yang Efisien</h2>
            <ul className="list-disc ml-5">
              <li>Sistem intermitten irrigation (pengairan berselang) mengurangi risiko penyakit akar dan menghemat air hingga 30%.</li>
              <li>Genangan air sebaiknya tidak lebih dari 5 cm untuk mencegah busuk batang.</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">5. Rotasi Tanaman</h2>
            <ul className="list-disc ml-5">
              <li>Bergilir dengan palawija (kedelai, jagung) untuk memutus siklus hidup hama dan penyakit.</li>
              <li>Tanaman penutup tanah seperti kacang-kacangan membantu memperbaiki nitrogen tanah.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
