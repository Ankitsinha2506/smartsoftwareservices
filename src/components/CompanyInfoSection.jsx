import React from "react";
import Images from '../assets/Image2.png'
function CompanyInfoSection() {
  return (
    <section className="relative w-full min-h-[420px] flex flex-col justify-center items-center bg-gray-800">
      {/* Background image: adjust the src path to your asset */}
      <img
        src={Images}
        alt="Company Background"
        className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
        style={{ zIndex: 0 }}
      />
      {/* Foreground content */}
      <div className="relative z-10 max-w-2xl w-full text-center text-white py-16 px-6">
        <h2 className="text-3xl font-semibold mb-3">Company with Difference</h2>
        <hr className="my-4 border-sky-400 w-1/6 mx-auto" />
        <p className="mb-5 text-lg leading-relaxed">
          SSS offers years of combined experience across a diverse range of industries including software design and development, architecture visualization, drafting and other information technology enabled services. We are dedicated to providing superior solutions tailored specifically to your needs.
        </p>
        <p className="mb-7 text-lg leading-relaxed">
          SSS combines ‘outside the square’ innovation with impeccable customer service to offer a complete client experience that presents you with the right solution every time.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded transition"
        >
          <span className="mr-2">&#9656;</span> MORE DETAILS
        </a>
      </div>
    </section>
  );
}

export default CompanyInfoSection;
