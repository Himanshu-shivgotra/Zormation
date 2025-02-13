"use client";
import React from "react";
import SectionHeader from "../Common/SectionHeader";
import Image from "next/image";
import { motion } from "framer-motion";

const Integration = () => {
  return (
    <>
      {/* <!-- ===== Integrations Section Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: `INTEGRATIONS`,
              subtitle: `Seamlessly Connect and Manage Your Data, Anywhere, Anytime.`,
              description: `Our integration solutions empower you to maintain and access your data effortlessly, ensuring smooth workflows and enhanced productivity.`,
            }}
          />
          {/* <!-- Section Title End --> */}
        </div>

        {/* <!-- Integration Brands Grid --> */}
        <div className="mx-auto max-w-c-1154 px-4 md:px-8 xl:px-0 relative z-50 mt-15 xl:mt-20 pattern-dots pattern-blue-500 pattern-bg-white pattern-size-4 pattern-opacity-10">
          {/* <!-- Background Dotted Shape --> */}
          <div className="absolute -top-3/4 -z-1 w-full h-full">
            <Image
              width={1200}
              height={400}
              sizes="(max-width: 768px) 100vw"
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              style={{ position: "static" }}
            />
            <Image
              fill
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
            />
          </div>

          {/* <!-- Brand Logos and Dots --> */}
          <div className="flex flex-wrap gap-y-10 justify-around">
            {/* <!-- Brand 1 --> */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] shadow-solid-7 bg-white dark:bg-btndark p-4.5">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/brand-07.svg"
                  alt="Brand 1"
                />
              </div>
            </motion.div>

            {/* <!-- Dot 1 --> */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="bg-[#FFDB26] rounded-full w-[11px] h-[11px]"></div>
            </motion.div>

            {/* <!-- Brand 2 --> */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] shadow-solid-7 bg-white dark:bg-btndark p-4.5">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/brand-08.svg"
                  alt="Brand 2"
                />
              </div>
            </motion.div>

            {/* <!-- Brand 3 --> */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] shadow-solid-7 bg-white dark:bg-btndark p-4.5">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/brand-09.svg"
                  alt="Brand 3"
                />
              </div>
            </motion.div>

            {/* <!-- Dot 2 --> */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="bg-[#62E888] rounded-full w-[15px] h-[15px]"></div>
            </motion.div>

            {/* <!-- Brand 4 --> */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] shadow-solid-7 bg-white dark:bg-btndark p-4.5">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/brand-10.svg"
                  alt="Brand 4"
                />
              </div>
            </motion.div>

            {/* <!-- Dot 3 --> */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="bg-[#EF5C00] rounded-full w-[23px] h-[23px]"></div>
            </motion.div>

            {/* <!-- Brand 5 --> */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] shadow-solid-7 bg-white dark:bg-btndark p-4.5">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/brand-11.svg"
                  alt="Brand 5"
                />
              </div>
            </motion.div>

            {/* <!-- Dot 4 --> */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.9 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="bg-[#016BFF] rounded-full w-[15px] h-[15px]"></div>
            </motion.div>

            {/* <!-- Brand 6 --> */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] shadow-solid-7 bg-white dark:bg-btndark p-4.5">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/brand-12.svg"
                  alt="Brand 6"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Integrations Section End ===== --> */}
    </>
  );
};

export default Integration;