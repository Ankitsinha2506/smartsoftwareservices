import React from "react";

function ContactPrompt() {
  return (
    <section className="bg-sky-500 py-12 flex justify-center items-center">
      <div className="max-w-5xl w-full flex flex-col md:flex-row justify-between items-center px-6">
        <h3 className="text-2xl md:text-3xl text-white font-medium mb-5 md:mb-0">
          We’d love To Meet You In Person Or Via The Web!
        </h3>
        <a
          href="/contact/#contact-form"
          className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded transition hover:bg-white hover:text-sky-500"
        >
          <span className="mr-3">&#9993;</span>
          CONTACT US!
        </a>
      </div>
    </section>
  );
}

export default ContactPrompt;
