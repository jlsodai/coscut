/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import HeaderSection from "@/sections/HeaderSection";
import HeroSection from "@/sections/HeroSection";
import TrustedbySection from "@/sections/TrustedbySection";
import AboutSection from "../sections/AboutSection";
import TestimonialSection from "../sections/TestimonialSection";
import HowSection from "../sections/HowSection";
import FooterSection from "../sections/FooterSection";
import VendorSection from "../sections/VendorSection";

const page = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-cgreen-50 to-cgreen-100 min-h-screen flex flex-col">
        <HeaderSection />
        <HeroSection />
        <TrustedbySection />
      </section>
      <AboutSection />
      <TestimonialSection />
      {/* <HowSection /> */}
      <VendorSection />
      <FooterSection />
    </>
  );
};

export default page;
