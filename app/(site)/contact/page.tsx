import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrump";

export const metadata: Metadata = {
  title: "Contact Us | Zormation Pvt. Ltd.",
  description: "Our Contact Us page provides a way for visitors to get in touch with us for inquiries, support, or feedback. This includes contact information such as phone numbers, email addresses, and physical addresses, as well as a contact form that visitors can fill out to send us a message directly. The goal is to make it easy for people to reach out to us and connect with our business.",
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pt-40 pb-20">
      <Breadcrumb
        pageName="Contact Us"
        description="Our Contact Us page provides a way for visitors to get in touch with us for inquiries, support, or feedback. This includes contact information such as phone numbers, email addresses, and physical addresses, as well as a contact form that visitors can fill out to send us a message directly. The goal is to make it easy for people to reach out to us and connect with our business."
      />
      <Contact />
    </div>
  );
};

export default SupportPage;
