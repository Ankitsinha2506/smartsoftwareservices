import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";


// Client Logo
import Nexus from '../assets/clients/nexus.png';
import RPBS from '../assets/clients/rpbs.png';
import Neweage from '../assets/clients/neweage.png';
import Cubeage from '../assets/clients/cubeage.png';
import JDIT from '../assets/clients/jdit.png';
import Shreegraphics from '../assets/clients/shreegraphics.png';
import Carnomia from '../assets/clients/carnomia.png';





function ClientsSection() {
  const clientLogos = [
    { src: Nexus, alt: "Nexus-CTC" },
    { src: RPBS, alt: "RPBS" },
    { src: Neweage, alt: "Neweage" },
    { src: Cubeage, alt: "Cubeage" },
    { src: JDIT, alt: "JDIT" },
    { src: Shreegraphics, alt: "Shreegraphics" },
    { src: Carnomia, alt: "Carnomia" },
    
    
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
          <SwiperSlide
            key={idx}
            className="flex justify-center items-center"
            style={{
              width: "140px",       // fixed width for equal spacing
              height: "80px",       // fixed height for all slides
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-full h-full object-contain"
              style={{ maxWidth: "120px", maxHeight: "64px" }} // constrains logo size within slide
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
export default ClientsSection;
