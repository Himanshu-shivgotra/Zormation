"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FunFact = () => {
  return (
    <>
      {/* <!-- ===== Funfact Section Start ===== --> */}
      <section className="py-20 lg:py-22.5 px-4 md:px-8 2xl:px-0">
        <div className="mx-auto max-w-c-1390 py-22.5 xl:py-27.5 relative z-1 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:bg-blacksection dark:stroke-strokedark">
          {/* <!-- Background Shapes --> */}
          <Image
            width={335}
            height={384}
            src="/images/shape/shape-04.svg"
            alt="Man"
            className="absolute -top-25 -left-15 lg:left-0 -z-1"
          />
          <Image
            width={132}
            height={132}
            src="/images/shape/shape-05.svg"
            alt="Doodle"
            className="absolute bottom-0 right-0 -z-1"
          />
          <Image
            fill
            src="/images/shape/shape-dotted-light-02.svg"
            alt="Dotted"
            className="absolute top-0 left-0 -z-1 dark:hidden"
          />
          <Image
            fill
            src="/images/shape/shape-dotted-dark-02.svg"
            alt="Dotted"
            className="absolute top-0 left-0 -z-1 hidden dark:block"
          />

          {/* <!-- Section Title --> */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto text-center md:w-4/5 lg:w-2/3 xl:w-1/2 mb-12.5 lg:mb-17.5 px-4 md:px-0"
          >
            <h2 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-4">
              Trusted by Global Companies
            </h2>
            <p className="lg:w-11/12 mx-auto">
              Our commitment to excellence, innovation, and delivering measurable results has earned the trust of businesses worldwide. We pride ourselves on building long-term partnerships that drive success.
            </p>
          </motion.div>

          {/* <!-- Funfact Stats --> */}
          <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
            {/* <!-- Stat 1: Worldwide Clients --> */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-2.5">
                20+
              </h3>
              <p className="text-lg lg:text-para2">Worldwide Clients</p>
            </motion.div>

            {/* <!-- Stat 2: Modules --> */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-2.5">
                50+
              </h3>
              <p className="text-lg lg:text-para2">Modules & Solutions</p>
            </motion.div>

            {/* <!-- Stat 3: Years of Experience --> */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-2.5">
                3+ Years
              </h3>
              <p className="text-lg lg:text-para2">of Industry Experience</p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Funfact Section End ===== --> */}
    </>
  );
};

export default FunFact;