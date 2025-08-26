import React from "react";

const ServiceContactSection = () => {
  return (
    <section
      className="bg-cover bg-center"
      style={{ backgroundImage: "url('https://i.pinimg.com/1200x/3f/a0/84/3fa084bb26554c102614cff7b792ccdc.jpg')" }}
    >
      <div className="bg-black bg-opacity-50">
        <div className="container mx-auto py-20 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Call us today at{" "}
            <span className="text-pink-600">+91 7066511234</span> or Email us
            at{" "}
            <a
              href="mailto:hr@smartsoftwareservice.com"
              className="underline"
            >
              hr@smartsoftwareservice.com
            </a>
          </h2>
          <p className="text-sm md:text-base mb-6">
            Still have unanswered questions regarding SMART Software Services?
          </p>
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white rounded hover:bg-white hover:text-black transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12h2a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4 0H8a2 2 0 00-2 2v4a2 2 0 002 2h4m0 0v4m0-4H8"
              />
            </svg>
            CONTACT US
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceContactSection;
