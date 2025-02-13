"use client"
import { Metadata } from "next";
import { useEffect } from "react";
import ReactGA from "react-ga";
import Hero from "@/components/Hero";
// import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
// import CTA from "@/components/CTA";
// import FAQ from "@/components/FAQ";
// import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
// import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Zormation pvt. Ltd. | A Leading service provider company.",
  description: "Zormation Pvt. Ltd. is one of the most popular IT solutions & business Consultant company. However, we are working on Website Development as well as providing the whole IT solution to the company. We never gave up on our Dream.",
  // other metadata
};


export default function Home() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <main>
      <Hero />
      {/* <Brands /> */}
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      {/* <CTA /> */}
      {/* <FAQ /> */}
      <Testimonial />
      {/* <Pricing /> */}
      <Contact />
      {/* <Blog /> */}
    </main>
  );
}
