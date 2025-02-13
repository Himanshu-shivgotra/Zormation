"use client"
import { Metadata } from "next";
import AboutSection from "@/components/About/index";
import Breadcrumb from "@/components/Common/Breadcrump.jsx";
import { useEffect } from "react";
import ReactGA from "react-ga";
export const metadata: Metadata = {
  title: "About Us",
  description: "Zormation Pvt. Ltd. is dedicated to Website and CMS Development . We believe in making a positive impact and giving back to the clients we serve.",
  // other metadata
};

const About = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Zormation Pvt. Ltd. is dedicated to Website and CMS Development . We believe in making a positive impact and giving back to the clients we serve."
      />
      <br />
      <br />
      <AboutSection />

    </>
  );
};

export default About;
