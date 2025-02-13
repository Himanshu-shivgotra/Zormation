"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Section Start ===== --> */}
      <section className="pb-20 lg:pb-25 xl:pb-30 overflow-hidden">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            {/* <!-- Left Side: Image --> */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left hidden md:block md:w-1/2 relative mx-auto aspect-[588/526.5]"
            >
              <Image
                src="/images/about/about-light-01.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>

            {/* <!-- Right Side: Content --> */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <h4 className="text-black dark:text-white font-medium uppercase">
                <span className="bg-meta text-white text-metatitle inline-flex rounded-full py-1 px-4.5 mr-4 mb-4 uppercase">
                  About Us
                </span>
              </h4>
              <h2 className="relative font-bold text-black dark:text-white text-3xl xl:text-hero mb-6">
                Why Choose{" "}
                <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
                  Zormation Pvt. Ltd.?
                </span>
              </h2>
              <p className="mb-8">
                Zormation Pvt. Ltd. is a leading IT solutions and business consulting company, specializing in website development and comprehensive IT services. We are committed to turning your vision into reality, delivering innovative solutions that drive growth and success.
              </p>

              {/* <!-- Key Points --> */}
              <div className="space-y-7.5">
                <div className="flex items-center gap-5">
                  <div className="w-15 h-15 rounded-full border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                    <p className="text-black dark:text-white font-semibold text-metatitle2">
                      01
                    </p>
                  </div>
                  <div className="w-3/4">
                    <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                      Faster Time-to-Market
                    </h5>
                    <p className="text-sm">
                      Accelerate your project timelines with our efficient development processes.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-15 h-15 rounded-full border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                    <p className="text-black dark:text-white font-semibold text-metatitle2">
                      02
                    </p>
                  </div>
                  <div className="w-3/4">
                    <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                      Expertise and Experience
                    </h5>
                    <p className="text-sm">
                      Leverage our skilled team with years of industry experience.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-15 h-15 rounded-full border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                    <p className="text-black dark:text-white font-semibold text-metatitle2">
                      03
                    </p>
                  </div>
                  <div className="w-3/4">
                    <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                      Cost-Effective Solutions
                    </h5>
                    <p className="text-sm">
                      Save up to 70% on development costs without compromising quality.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Section End ===== --> */}

      {/* <!-- ===== About Two Section Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 2xl:px-0 overflow-hidden">
          <div className="flex items-center gap-8 lg:gap-32.5">
            {/* <!-- Left Side: Content --> */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h2 className="relative font-bold text-black dark:text-white text-3xl xl:text-hero mb-6">
                We Deliver{" "}
                <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
                  Strategic Expertise
                </span>{" "}
                Where It Matters Most.
              </h2>
              <p className="mb-8">
                Our mission is to empower startups and businesses with a single-destination platform to thrive in the competitive Indian economic market. We provide the tools, strategies, and expertise to help you succeed.
              </p>
            </motion.div>

            {/* <!-- Right Side: Image --> */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right hidden md:block md:w-1/2 relative mx-auto aspect-[588/526.5]"
            >
              <Image
                src="/images/about/about-light-02.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-02.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two Section End ===== --> */}
    </>
  );
};

export default About;