/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";
import React from "react";

export default function WhyChoose() {
  return (
    <div>
      <div class="xl:mx-auto xl:container  xl:px-20 md:px-6 px-4 py-12">
        <div class="lg:flex items-center justify-center lg:space-x-12 2xl:space-x-6">
          <div class="">
            <p class="lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800 dark:text-white">
              Why choose us
            </p>
            <p class="text-lg leading-7 text-gray-600 dark:text-gray-200 mt-4 xl:w-7/12 w-full">
            Major reason for choosing this platform having few factors such as expertise, Customization, Responsive Design, and Reputation and Reviews.
            </p>
            <div class="lg:hidden lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
              <Image
                src="https://i.ibb.co/SKLJ7WX/austin-distel-jp-Hw8ndw-J-Q-unsplash-1.png"
                alt="ongoing meeting"
                class="w-full obejct-fit object-center object-fill h-full"
                height={100} width={100}
              />
            </div>
            <div class="mt-6 md:mt-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:mt-6 2xl:mt-12">
              <div class="flex">
                <div class="w-16 h-16 relative">
                  <div class=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <Image
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg1.svg"
                      alt="clock"
                      height={100} width={100}
                    />
                  </div>
                </div>
                <div class="flex items-start flex-col ml-6 pt-2">
                  <h2 class="text-lg font-semibold leading-4 text-gray-800 dark:text-white">
                  Expertise
                  </h2>
                  <p class="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600 dark:text-gray-200">
                  The platform offers a team of experienced professionals who possess in-depth knowledge and expertise in website development, design, and optimization.                  </p>
                </div>
              </div>
              <div class="flex">
                <div class="w-16 h-16 relative">
                  <div class=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <Image
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg2.svg"
                      alt="Friendly"
                      height={100} width={100}
                    />
                  </div>
                </div>
                <div class="flex items-start flex-col ml-6 pt-2">
                  <h2 class="text-lg font-semibold leading-4 text-gray-800 dark:text-white">
                  Customization
                  </h2>
                  <p class="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600 dark:text-gray-200">
                  The platform provides tailored solutions to meet the specific needs and requirements of the {"client's"} business, ensuring a unique and personalized website.
                  </p>
                </div>
              </div>
              <div class="flex">
                <div class="w-16 h-16 relative">
                  <div class=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <Image
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg3.svg"
                      alt="Creative"
                      height={100} width={100}
                    />
                  </div>
                </div>
                <div class="flex items-start flex-col ml-6 pt-2">
                  <h2 class="text-lg font-semibold leading-4 text-gray-800 dark:text-white">
                  Responsive Design
                  </h2>
                  <p class="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600 dark:text-gray-200">
                  The platform ensures that the website is optimized for different devices and screen sizes, providing a seamless user experience across desktops, smartphones, and tablets.
                  </p>
                </div>
              </div>
              <div class="flex">
                <div class="w-16 h-16 relative">
                  <div class=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <Image
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg4.svg"
                      alt="Achievments"
                      height={100} width={100}
                    />
                  </div>
                </div>
                <div class="flex items-start flex-col ml-6 pt-2">
                  <h2 class="text-lg font-semibold leading-4 text-gray-800 dark:text-white">
                  Reputation and Reviews
                  </h2>
                  <p class="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600 dark:text-gray-200 dark:text-gray-200">
                  The platform has a strong reputation and positive reviews from past clients, indicating their reliability, professionalism, and ability to deliver successful website projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden lg:block lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
            <img
              src="https://i.ibb.co/SKLJ7WX/austin-distel-jp-Hw8ndw-J-Q-unsplash-1.png"
              alt="ongoing meeting"
              class="w-full obejct-fit object-center object-fill h-full"
             
            />
          </div>
        </div>
      </div>
    </div>
  );
}