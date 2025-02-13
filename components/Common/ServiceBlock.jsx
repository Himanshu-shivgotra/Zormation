import Image from "next/image";
import React from "react";

function ServiceBlock({ image, title, description }) {
  return (
    <>
      <div class="flex w-60 cursor-pointer flex-col items-center justify-center rounded py-6 hover:shadow xl:w-96 xl:px-4">
        <div class="mb-6">
          <Image src={image} alt="arrow-1" height={100} width={100} />
        </div>
        <div class="text-gray-800 text-center text-2xl font-semibold dark:text-white">
          <h2>{title}</h2>
        </div>
        <div class="text-gray-600 dark:text-gray-300 mt-2 text-center text-lg">
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

export default ServiceBlock;
