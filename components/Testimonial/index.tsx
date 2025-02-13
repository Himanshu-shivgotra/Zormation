"use client";
import React from "react";
import SectionHeader from "../Common/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import Image from "next/image";

const Testimonial = () => {
  return (
    <>
      {/* <!-- ===== Testimonials Section Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top text-center mx-auto">
            <SectionHeader
              headerInfo={{
                title: `TESTIMONIALS`,
                subtitle: `What Our Clients Say`,
                description: `Hear from our satisfied clients about their experiences working with us. We take pride in delivering exceptional results and building lasting partnerships.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        {/* <!-- Testimonials Slider --> */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20"
        >
          <div className="swiper testimonial-01 pb-22.5 mb-20">
            <Swiper
              spaceBetween={50}
              slidesPerView={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                0: { slidesPerView: 1 }, // Mobile
                768: { slidesPerView: 2 }, // Tablet and above
              }}
            >
              {/* <!-- Testimonial 1 --> */}
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-solid-9 dark:shadow-none dark:bg-blacksection dark:border dark:border-strokedark p-9 pt-7.5">
                  <div className="flex justify-between border-b border-stroke dark:border-strokedark pb-6 mb-7.5">
                    <div>
                      <h4 className="text-black dark:text-white text-metatitle3 mb-1.5">
                        Devid Smith
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Founder @democompany
                      </p>
                    </div>
                    <Image
                      width={60}
                      height={50}
                      src="/images/user/user-01.svg"
                      alt="Devid Smith"
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    "Working with Zormation has been a game-changer for our business. Their expertise and dedication helped us achieve our goals faster than we ever imagined."
                  </p>
                </div>
              </SwiperSlide>

              {/* <!-- Testimonial 2 --> */}
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-solid-9 dark:shadow-none dark:bg-blacksection dark:border dark:border-strokedark p-9 pt-7.5">
                  <div className="flex justify-between border-b border-stroke dark:border-strokedark pb-6 mb-7.5">
                    <div>
                      <h4 className="text-black dark:text-white text-metatitle3 mb-1.5">
                        Jhon Abraham
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        CEO @democompany
                      </p>
                    </div>
                    <Image
                      width={60}
                      height={50}
                      src="/images/user/user-02.svg"
                      alt="Jhon Abraham"
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    "The team at Zormation is incredibly professional and detail-oriented. They delivered a solution that exceeded our expectations and transformed our operations."
                  </p>
                </div>
              </SwiperSlide>

              {/* <!-- Testimonial 3 --> */}
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-solid-9 dark:shadow-none dark:bg-blacksection dark:border dark:border-strokedark p-9 pt-7.5">
                  <div className="flex justify-between border-b border-stroke dark:border-strokedark pb-6 mb-7.5">
                    <div>
                      <h4 className="text-black dark:text-white text-metatitle3 mb-1.5">
                        Sarah Johnson
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        CTO @democompany
                      </p>
                    </div>
                    <Image
                      width={60}
                      height={50}
                      src="/images/user/user-03.svg"
                      alt="Sarah Johnson"
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    "Zormation's innovative approach and technical expertise have been invaluable to our success. We highly recommend them to anyone looking for top-notch IT solutions."
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </motion.div>
      </section>
      {/* <!-- ===== Testimonials Section End ===== --> */}
    </>
  );
};

export default Testimonial;