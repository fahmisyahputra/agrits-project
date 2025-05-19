"use client";
import React, { useState, useRef } from "react";
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

  const scrollRef = useRef<HTMLDivElement>(null);

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
          {/* <h1 className="self-start text-xl md:text-2xl font-lexend mb-2 md:mb-[-5%] md:ml-[-15%]">
            Selamat
            <br />
            datang !
          </h1> */}

          <div className="flex flex-col md:flex-row items-center justify-center mb-4 gap-4">
            <Image
              src="/images/agrits-logo.png"
              alt="AGRITS Logo"
              width={550}
              height={550}
              className="rounded-md max-w-full h-auto"
            />
          </div>

          {/* <p className="text-right self-end text-sm opacity-90 font-museo mt-[-5%]">
            by teamduabelas
          </p> */}
          <p
            style={{ fontFamily: "Mulish, sans-serif" }}
            className="text-base md:text-xl font-extrabold font-museo max-w-xl mx-auto"
          >
            Monitoring Kesehatan Padi Berbasis Sentinel-2 dan Himawari-9 Upaya
            Meningkatkan Produktivitas Padi
          </p>
        </div>

        <div className="absolute bottom-20 w-full text-center px-4">
          {/* <p className="text-base md:text-xl font-museo max-w-xl mx-auto">
            Monitoring Kesehatan Padi Berbasis Sentinel-2 dan Himawari-9 Upaya
            Meningkatkan Produktivitas Padi
          </p> */}

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
            <h2
              style={{ fontFamily: "League Spartan, sans-serif" }}
              className="font-league-spartan mb-2 md:mb-0 font-bold text-4xl md:text-5xl"
            >
              Tentang
            </h2>
            <div className="flex items-center mb-4 md:mb-6 ml-[-5%] md:ml-[-3%]">
              <Image
                src="/images/agrits.png"
                alt="AGRITS"
                width={300}
                height={300}
                className="rounded-md w-[260px] md:max-w-full h-auto"
              />
            </div>
            <p
              style={{ fontFamily: "Mulish, sans-serif" }}
              className="font-mulish text-sm md:text-xl md:text-justify mb-4 leading-relaxed"
            >
              <span className="font-bold">
                AGRITS (Agricultural Remote-sensing and Information Technology
                System)
              </span>{" "}
              adalah sebuah laman yang dirancang untuk membantu Kelompok Petani
              Sendang Biru Made yang dapat menyediakan informasi mengenai
              <span className="text-[#D7AE2F]">
                {" "}
                Kekeringan dan Kesehatan Tanaman, Suhu Tanah , dan Curah Hujan.
              </span>
            </p>
            <p
              style={{ fontFamily: "Mulish, sans-serif" }}
              className="font-mulish text-sm md:text-xl md:text-justify leading-relaxed"
            >
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
              width={250}
              height={250}
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
              <h3
                style={{ fontFamily: "MuseoModerno, sans-serif" }}
                className="text-2xl md:text-5xl mb-1"
              >
                Proses Pembuatan
              </h3>

              <div className="flex mr-[-5%] md:mb-6">
                <Image
                  src="/images/agrits.png"
                  alt="AGRITS"
                  width={360}
                  height={360}
                  className="rounded-md w-[260px] md:max-w-full h-auto"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="relative">
                {/* Panah kiri */}
                <button
                  onClick={() =>
                    scrollRef.current?.scrollBy({
                      left: -620,
                      behavior: "smooth",
                    })
                  }
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 p-2 rounded-full hover:bg-white/40"
                >
                  ←
                </button>

                {/* Scrollable gambar */}
                <div
                  ref={scrollRef}
                  className="overflow-x-auto scrollbar-hide flex gap-4 snap-x snap-mandatory px-8"
                >
                  {[...Array(8)].map((_, index) => (
                    <div
                      key={index}
                      className="relative w-[600px] h-[600px] flex-shrink-0 snap-center rounded-2xl overflow-hidden bg-black/10 backdrop-blur-md"
                    >
                      <Image
                        src={`/images/dokum-agrits-${index + 1}.jpg`}
                        alt={`Dokumentasi ${index + 1}`}
                        fill
                        className={`object-cover ${
                          index === 2 ? "object-bottom" : ""
                        }`}
                        sizes="600px"
                      />
                    </div>
                  ))}
                </div>

                {/* Panah kanan */}
                <button
                  onClick={() =>
                    scrollRef.current?.scrollBy({
                      left: 620,
                      behavior: "smooth",
                    })
                  }
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/10 p-2 rounded-full hover:bg-black/40"
                >
                  →
                </button>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-b-2xl px-4 py-2 mt-2">
                <p
                  style={{ fontFamily: "Mulish, sans-serif" }}
                  className="text-sm text-white/80 font-mulish text-center"
                >
                  Proses Pembuatan AGRITS
                </p>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-6 md:py-8 md:px-10 text-sm md:text-xl text-white/80 font-mulish leading-relaxed max-w-6xl mx-auto">
              <p
                style={{ fontFamily: "Mulish, sans-serif" }}
                className="text-center md:text-justify"
              >
                Pada tahun 2024, panen raya padi di Kelurahan Made pada 16 Maret
                menghasilkan sekitar 3 ton dari lahan 0,9 hektar, cukup untuk
                memenuhi kebutuhan beras warga selama setahun dan menekan harga
                beras. Padi berasal dari{" "}
                <span className="font-bold">Kelompok Petani Sendang Biru,</span>{" "}
                varietas premium IR 64, yang berkualitas tinggi dan tahan hama.
                Meskipun padi baru dipanen sekali, tanaman lain di wilayah
                tersebut menunjukkan{" "}
                <span className="font-bold">potensi produktivitas</span> yang
                lebih tinggi, dengan cabai dipanen lima kali dan kacang panjang
                hampir dua belas kali, menunjukkan perbedaan yang signifikan.
                Hal ini menunjukkan bahwa meskipun padi masih dalam tahap
                pengembangan, tanaman lain telah memberikan hasil yang
                signifikan. Hal ini mendorong inisiatif bagi kami untuk
                menyediakan analisis berbasis data yang dapat digunakan untuk
                monitoring kesehatan tanaman secara cepat dan efisien.
                <br></br>
                <br></br>
                <span className="font-bold">
                  AGRITS (Agricultural Remote-sensing and Information Technology
                  System),
                </span>{" "}
                dirancang untuk membantu kelompok petani Sendang Biru Made yang
                dapat menyediakan informasi mengenai kondisi vegetasi berbasis{" "}
                <span className="font-bold">Satelit Sentinel-2,</span>{" "}
                pemantauan kekeringan dan kesehatan tanaman berbasis{" "}
                <span className="font-bold">Satelit CHRIPS</span>, memantau suhu
                permukaan tanah berbasis{" "}
                <span className="font-bold">Satelit Landsat 8 OLI/TIRS</span>,
                memantau curah hujan berbasis{" "}
                <span className="font-bold">Satelit Himawari-9</span>, sehingga
                dapat melakukan prediksi hasil panen berbasis penginderaan jauh.
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
        className="relative w-full min-h-screen py-36 md:py-24 px-4 text-white"
      >
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-start justify-between gap-12">
          {/* KIRI: Informasi Text + List */}
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
            <p
              style={{ fontFamily: "MuseoModerno, sans-serif" }}
              className="text-lg md:text-2xl mb-12 leading-relaxed max-w-[80%]"
            >
              membantu anda mendapatkan{" "}
              <span className="font-bold">informasi</span> tentang
            </p>

            <div className="space-y-6 mb-6 ml-4">
              {infoTitles.map((info, index) => (
                <a
                  key={index}
                  href={
                    index === 0
                      ? "/informasi/tips"
                      : index === 1
                      ? "/informasi/jenis"
                      : "/informasi/peta"
                  }
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
                    <p
                      style={{ fontFamily: "League Spartan, sans-serif" }}
                      className="text-base md:text-xl"
                    >
                      {info.main}
                    </p>
                    {info.sub && (
                      <p
                        style={{ fontFamily: "League Spartan, sans-serif" }}
                        className="text-lg md:text-xl font-semibold"
                      >
                        {info.sub}
                      </p>
                    )}
                  </div>
                </a>
              ))}
            </div>

            <p
              style={{ fontFamily: "MuseoModerno, sans-serif" }}
              className="text-white/60 text-sm md:text-base mt-12"
            >
              *pilih yang anda butuhkan
            </p>
          </div>

          {/* KANAN: Swipeable Image Preview */}
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

            {/* Dots */}
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

        {/* Panah ke bawah */}
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
                <p
                  style={{ fontFamily: "MuseoModerno, sans-serif" }}
                  className="font-museo-moderno text-lg md:text-3xl"
                >
                  Peta Lahan
                </p>
                <p
                  style={{ fontFamily: "MuseoModerno, sans-serif" }}
                  className="font-museo-moderno text-lg md:text-3xl font-semibold"
                >
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
          <h2
            style={{ fontFamily: "Lexend, sans-serif" }}
            className="font-league-spartan font-bold text-5xl mb-16 md:mb-64"
          >
            Kontak Kami
          </h2>

          {/* Grid Kontak */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40 font-museo text-base leading-relaxed">
            {/* Kiri */}
            <div className="space-y-8">
              <div>
                <h3
                  style={{ fontFamily: "Lexend, sans-serif" }}
                  className="font-lexend font-bold md:text-2xl mb-1"
                >
                  Telepon
                </h3>
                <p
                  style={{ fontFamily: "Lexend, sans-serif" }}
                  className="text-white/90 md:text-2xl"
                >
                  082139417043
                </p>
              </div>

              <div>
                <h3
                  style={{ fontFamily: "Lexend, sans-serif" }}
                  className="font-lexend font-bold md:text-2xl mb-1"
                >
                  Alamat
                </h3>
                <p
                  style={{ fontFamily: "Lexend, sans-serif" }}
                  className="text-white/90 md:text-2xl"
                >
                  Departemen Teknik Geomatika, ITS
                  <br />
                  Surabaya
                </p>
              </div>
            </div>
            
            {/* Kanan */}
            <div className="space-y-8">
              <div>
                <h3
                  style={{ fontFamily: "Lexend, sans-serif" }}
                  className="font-lexend font-bold md:text-2xl mb-1"
                >
                  Email
                </h3>
                <p
                  style={{ fontFamily: "Lexend, sans-serif" }}
                  className="text-white/90 md:text-2xl"
                >
                  teamduabelas1212@gmail.com
                </p>
              </div>

              <div>
                <h3
                  style={{ fontFamily: "Lexend, sans-serif" }}
                  className="font-lexend font-bold md:text-2xl mb-1"
                >
                  Media Sosial
                </h3>
                <p
                  style={{ fontFamily: "Lexend, sans-serif" }}
                  className="text-white/90 md:text-2xl"
                >
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
