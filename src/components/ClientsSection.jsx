import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

function ClientsSection() {
  const clientLogos = [
    { src: "/clients/c4cabs.png", alt: "c4cabs" },
    { src: "/clients/akkis.png", alt: "Akki's" },
    { src: "/clients/smart-housing.png", alt: "Smart Housing Society" },
    { src: "/clients/loycart.png", alt: "LoyCart" },
    { src: "/clients/smartriders.png", alt: "Smart Riders" },
    { src: "/clients/smart-housing.png", alt: "Smart Housing Society" },
    { src: "/clients/loycart.png", alt: "LoyCart" },
    { src: "/clients/smartriders.png", alt: "Smart Riders" },
    { src: "/clients/smart-housing.png", alt: "Smart Housing Society" },
    { src: "/clients/loycart.png", alt: "LoyCart" },
    { src: "/clients/smartriders.png", alt: "Smart Riders" },
  ];

  return (
    <section className="bg-gray-50 py-10">
      <h3 className="text-2xl font-semibold text-center mb-10">Our Clients</h3>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={40}
        slidesPerView={2}
        loop
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        className="px-4"
      >
        {clientLogos.map((logo, idx) => (
          <SwiperSlide key={idx} className="flex justify-center items-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-16 md:h-20 min-w-[120px] object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ClientsSection;
