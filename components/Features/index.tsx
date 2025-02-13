"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Section Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Header Start --> */}
          <SectionHeader
            headerInfo={{
              title: "Our Services",
              subtitle: "What We Offer",
              description: `We deliver innovative, technology-driven web and mobile app development solutions designed to help your business thrive, scale, and achieve exceptional results.`,
            }}
          />
          {/* <!-- Section Header End --> */}

          {/* <!-- Features Grid Start --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-12.5 mt-12.5 lg:mt-15 xl:mt-20">
            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
          </div>
          {/* <!-- Features Grid End --> */}
        </div>
      </section>
      {/* <!-- ===== Features Section End ===== --> */}
    </>
  );
};

export default Feature;