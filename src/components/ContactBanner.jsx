import React from "react";
import { Link } from "react-router-dom";

function ContactBanner() {
  return (
    <section className="bg-[#5087a7] py-10 flex flex-col md:flex-row items-center justify-between pl-10 pr-12">
  <h4 className="text-white text-center text-2xl font-semibold mb-4 md:mb-0">
  We’d love To Meet You In Person Or Via The Web!
</h4>
  <Link
    to="/contact"
    className="border-2 border-white text-white py-3 px-8 rounded-md font-bold text-lg hover:bg-white hover:text-[#5087a7] transition"
  >
    CONTACT WITH US
  </Link>
</section>

  );
}

export default ContactBanner;
