import Image from "next/image";
import React from "react";

const PetaPage = () => {
  return (
    <section
      id="peta"
      className="relative w-full min-h-screen md:py-16 px-2 md:px-4 text-white"
    >
      {/* Background global agar sama seperti homepage */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <Image
          src="/images/agrits-bg.jpg"
          alt="AGRITS Background"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>

      <div className="w-full max-w-6xl mx-auto md:px-4">
        {/* Judul + Logo */}
        <div className="flex items-center justify-between gap-6 mb-8">
          {/* Kiri - Judul */}
          <div className="flex items-center gap-4">
            <div className="h-12 w-1 bg-white"></div>
            <div>
              <p className="font-museo-moderno text-lg md:text-3xl">
                Peta Lahan
              </p>
              <p className="font-museo-moderno text-lg md:text-3xl font-semibold">
                Kesehatan Padi
              </p>
            </div>
          </div>

          {/* Kanan - Logo */}
          <Image
            src="/images/agrits-logo.png"
            alt="AGRITS Logo"
            width={150}
            height={150}
            className="rounded-md"
          />
        </div>

        {/* Peta */}
        <div className="w-full h-[80vh] md:aspect-video bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden relative">
          <iframe
            src="https://ee-teamduabelas1212.projects.earthengine.app/view/agrits"
            className="w-full h-full border-0"
            title="AGRITS Google Earth Engine Map"
            allowFullScreen
          />
          {/* Blur teks GEE */}
          <div className="hidden md:block absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg p-4 w-1/3 max-w-xs"></div>
        </div>
        {/* Tombol Link ke GEE */}
        <div className="flex justify-center mt-8">
          <a
            href="https://ee-teamduabelas1212.projects.earthengine.app/view/agrits"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black font-bold px-6 py-3 rounded-full shadow-md hover:bg-white/90 transition"
          >
            Lihat Peta di GEE
          </a>
        </div>
      </div>
    </section>
  );
};

export default PetaPage;
