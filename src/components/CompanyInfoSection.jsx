import React from "react";
import Images from "../assets/Image2.png";

function CompanyInfoSection() {
  return (
    <section className="relative w-full min-h-[480px] flex flex-col justify-center items-center bg-gray-900 overflow-hidden">
      {/* Background image */}
      <img
        src={Images}
        alt="Company Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Decorative gradient overlays */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700/20 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center text-white py-16 px-6 animate-fadeIn">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Company with a Difference
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto rounded mb-6"></div>
        <p className="mb-5 text-lg md:text-xl leading-relaxed text-gray-200">
          SSS offers years of combined experience across diverse industries,
          including software design, development, architectural visualization,
          drafting, and IT-enabled services. We provide superior, tailored
          solutions to meet your unique needs.
        </p>
        <p className="mb-8 text-lg md:text-xl leading-relaxed text-gray-300">
          Combining “outside the square” innovation with impeccable customer
          service, SSS ensures every client receives the right solution —
          every time.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-7 py-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold shadow-lg transition-transform transform hover:scale-105"
        >
          <span className="mr-2 text-lg">&#9656;</span> MORE DETAILS
        </a>
      </div>
    </section>
  );
}

export default CompanyInfoSection;
