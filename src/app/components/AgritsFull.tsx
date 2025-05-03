"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

type AgritsSectionProps = {
  title: string;
  subtitle: string;
  description: string[];
};

const AgritsFull: React.FC<AgritsSectionProps> = ({
  title,
  subtitle,
  description,
}) => {
  const [activeInfoSlide, setActiveInfoSlide] = useState(0);

  const infoImages = [
    "/images/foto-info-1.jpg",
    "/images/foto-info-2.jpg",
    "/images/foto-info-3.jpg",
  ];

  const infoTitles = [
    { main: "Tips Menjaga", sub: "Kesehatan Padi" },
    { main: "Jenis Padi", sub: "" },
    { main: "Peta Lahan", sub: "Kesehatan Padi" },
  ];

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setActiveInfoSlide((prev) => (prev + 1) % infoImages.length),
    onSwipedRight: () =>
      setActiveInfoSlide((prev) =>
        prev === 0 ? infoImages.length - 1 : prev - 1
      ),
    trackMouse: true,
  });

  return (
    <div className="relative px-2 w-full overflow-x-hidden">
      {/* GLOBAL Background Image */}
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

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-start justify-center text-white text-center px-4">
        {/* Konten utama di tengah */}
        <div className="z-10 flex flex-col items-center justify-center h-[90%]">
          <h1 className="self-start text-xl md:text-2xl font-lexend mb-2 md:mb-[-5%] md:ml-[-15%]">
            Selamat
            <br />
            datang !
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center mb-4 gap-4">
            <Image
              src="/images/agrits-logo.png"
              alt="AGRITS Logo"
              width={550}
              height={550}
              className="rounded-md max-w-full h-auto"
            />
          </div>

          <p className="text-right self-end text-sm opacity-90 font-museo mt-[-5%]">
            by teamduabelas
          </p>
        </div>

        <div className="absolute bottom-20 w-full text-center px-4">
          <p className="text-base md:text-lg font-museo max-w-xl mx-auto">
            Monitoring Kesehatan Padi Berbasis Sentinel-2 dan Himawari-9 Upaya
            Meningkatkan Produktivitas Padi
          </p>

          <div className="mb-4 mt-10 md:mt-12">
            <svg
              className="mx-auto animate-bounce"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 5v14M5 12l7 7 7-7"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Section Tentang */}
      <section
        id="tentang"
        className="relative w-full min-h-screen py-40 md:pt-72 px-4 text-white"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 max-w-6xl">
          <div className="w-full md:w-[60%]">
            <h2 className="font-league-spartan mb-2 md:mb-0 font-bold text-4xl md:text-4xl">
              Tentang
            </h2>
            <div className="flex items-center mb-4 md:mb-6 ml-[-5%] md:ml-[-4%]">
              <Image
                src="/images/agrits.png"
                alt="AGRITS"
                width={260}
                height={260}
                className="rounded-md w-[260px] md:max-w-full h-auto"
              />
            </div>
            <p className="font-museo text-sm md:text-base mb-4 leading-relaxed">
              Sebuah laman yang dirancang untuk membantu kelompok petani Sendang
              Biru Made yang dapat menyediakan informasi mengenai
              <span className="text-[#D7AE2F]">
                {" "}
                Kekeringan dan Kesehatan Tanaman, Suhu Tanah , dan Curah Hujan.
              </span>
            </p>
            <p className="font-museo text-sm md:text-base leading-relaxed">
              Dengan informasi ini, petani dapat mengambil keputusan yang
              <span className="text-[#D7AE2F]"> lebih tepat waktu</span>,
              seperti penjadwalan irigasi, pemupukan, dan pengendalian hama,
              sehingga dapat meningkatkan hasil panen secara keseluruhan.
            </p>
          </div>

          <div className="w-full md:w-[40%] flex md:pt-20 justify-center">
            <Image
              src="/images/logo-tentang-agrits.png"
              alt="AGRITS Logo"
              width={200}
              height={200}
              className="object-contain max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Section Proses Adanya AGRITS */}
      <section
        id="proses"
        className="relative w-full min-h-screen md:py-40 px-4 text-white"
      >
        <div className="container mx-auto max-w-6xl flex flex-col gap-12">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <div className="w-full md:pt-16 md:w-1/2 flex flex-col items-end justify-start mt-6 md:mt-0 pr-4 md:pr-12 order-1 md:order-2">
              <h3 className="font-lexend text-2xl md:text-4xl mb-1">
                proses adanya
              </h3>
              <div className="flex mr-[-5%] md:mb-6">
                <Image
                  src="/images/agrits.png"
                  alt="AGRITS"
                  width={260}
                  height={260}
                  className="rounded-md w-[260px] md:max-w-full h-auto"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 aspect-square relative overflow-hidden">
                <Image
                  src="/images/foto-kegiatan-awal.jpg"
                  alt="Foto Kegiatan"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-b-2xl px-4 py-2 mt-2">
                <p className="text-sm text-white/80 font-museo text-center">
                  *deskripsi kegiatan
                </p>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-6 md:py-8 md:px-10 text-sm md:text-lg text-white/80 font-museo leading-relaxed max-w-6xl mx-auto">
              <p className="text-center md:text-left">
                AGRITS lahir dari kebutuhan petani untuk memahami kondisi lahan
                dan tanaman secara lebih cepat dan akurat dengan data satelit,
                guna meningkatkan efisiensi dan produktivitas pertanian lokal.
              </p>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <svg
              className="animate-bounce"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 5v14M5 12l7 7 7-7"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Section Informasi dengan swipeable */}
      <section
        id="informasi"
        className="relative w-full min-h-screen py-40 md:py-24 px-4 text-white"
      >
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="w-full md:w-1/2">
            <div className="flex ml-[-6%] md:ml-[-3%] mb-1">
              <Image
                src="/images/agrits.png"
                alt="AGRITS"
                width={260}
                height={260}
                className="rounded-md w-[260px] md:max-w-full h-auto"
              />
            </div>
            <p className="font-museo text-lg md:text-2xl mb-12 leading-relaxed max-w-[80%]">
              membantu anda mendapatkan{" "}
              <span className="font-bold">informasi</span> tentang
            </p>

            <div className="space-y-6 mb-6 ml-4">
              {infoTitles.map((info, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 cursor-pointer transition-all ${
                    activeInfoSlide === index
                      ? "scale-105 text-white"
                      : "opacity-70 hover:opacity-100"
                  }`}
                  onClick={() => setActiveInfoSlide(index)}
                >
                  <div
                    className={`h-12 w-1 ${
                      activeInfoSlide === index ? "bg-white" : "bg-white/60"
                    }`}
                  />
                  <div>
                    <p className="font-museo text-base">{info.main}</p>
                    {info.sub && (
                      <p className="font-museo text-lg font-semibold">
                        {info.sub}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-white/60 font-museo text-sm mt-12">
              *pilih yang anda butuhkan
            </p>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center justify-start md:pt-8 md:mt-6">
            <div
              {...swipeHandlers}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-1 aspect-square w-full overflow-hidden relative max-w-md"
            >
              <div className="w-full overflow-hidden relative">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${activeInfoSlide * 100}%)`,
                  }}
                  {...swipeHandlers}
                >
                  {infoImages.map((src, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <Image
                        src={src}
                        alt={`Information ${index + 1}`}
                        width={600}
                        height={600}
                        className="object-cover w-full h-full rounded-2xl"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 md:mt-6 space-x-2">
              {infoImages.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 bg-white rounded-full cursor-pointer transition-opacity ${
                    activeInfoSlide === index ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActiveInfoSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-24">
          <svg
            className="animate-bounce"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 5v14M5 12l7 7 7-7"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* Map Section */}
      <section
        id="peta"
        className="relative w-full min-h-screen md:py-16 px-2 md:px-4 text-white"
      >
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
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="kontak"
        className="relative w-full min-h-screen pt-52 md:pt-36 px-4 text-white"
      >
        <div className="w-full max-w-6xl mx-auto px-4">
          {/* Heading */}
          <h2 className="font-league-spartan font-bold text-5xl mb-16 md:mb-64">
            Kontak Kami
          </h2>

          {/* Grid Kontak */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40 font-museo text-base leading-relaxed">
            {/* Kiri */}
            <div className="space-y-8">
              <div>
                <h3 className="font-lexend font-bold md:text-2xl mb-1">
                  Telepon
                </h3>
                <p className="text-white/90 md:text-2xl">(7777-7777-7777)</p>
              </div>

              <div>
                <h3 className="font-lexend font-bold md:text-2xl mb-1">
                  Alamat
                </h3>
                <p className="text-white/90 md:text-2xl">
                  Departemen Tenik Gematika, ITS
                  <br />
                  Surabaya
                </p>
              </div>
            </div>

            {/* Kanan */}
            <div className="space-y-8">
              <div>
                <h3 className="font-lexend font-bold md:text-2xl mb-1">
                  Email
                </h3>
                <p className="text-white/90 md:text-2xl">
                  teamduabelas1212@gmail.com
                </p>
              </div>

              <div>
                <h3 className="font-lexend font-bold md:text-2xl mb-1">
                  Media Sosial
                </h3>
                <p className="text-white/90 md:text-2xl">
                  Instagram Official : @k12emker
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgritsFull;
