import React from "react";
import { motion } from "framer-motion";

const introVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function AboutIntroSection() {
  return (
    <section className="bg-[#5087a7] py-16 px-4 flex flex-col items-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={introVariants}
        className="max-w-4xl w-full text-center"
      >
        <h2 className="text-white text-3xl font-semibold mb-7">About SMART Software</h2>
        <p className="text-white text-lg md:text-xl leading-relaxed">
          Smart Software Services (SSS) is a global leader in IT services, digital and business solutions that partners with its clients to simplify, strengthen and transform their businesses. We ensure the highest levels of certainty and satisfaction through a deep-set commitment to our clients, comprehensive industry expertise and a global network of innovation and delivery centers. SSS has been recognized by Brand Finance as one of the Big 4 Global IT Services Brands. Our continued industry-leading growth is a testament to the certainty our clients experience every day.
        </p>
      </motion.div>
    </section>
  );
}

export default AboutIntroSection;
