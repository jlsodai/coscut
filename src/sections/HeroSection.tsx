/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="container grid lg:grid-cols-2 items-center gap-8 xl:gap-24 flex-1 self-center mb-16">
      <div className="w-full relative lg:order-last" id="girl">
        <img
          data-aos="fade-up"
          data-aos-once="true"
          className="mx-auto"
          src="/images/heroImg.png"
        />

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-once="true"
          className="absolute top-20 -left-12 sm:top-32 sm:left-10 md:top-40 md:left-16 lg:-left-5 lg:top-32 floating-4"
        >
          <img className="h-40" src="/images/happyBirthDay.svg" alt="" />
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-once="true"
          className="hidden sm:flex absolute top-20 -right-12 sm:right-24 sm:top-28 md:top-36 md:right-32 lg:top-24 lg:right-2 floating"
        >
          <img className="h-40" src="/images/points.svg" alt="" />
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-once="true"
          className="absolute bottom-0 -left-12 sm:left-2 sm:bottom-20 lg:bottom-14 lg:-left-4 floating"
        >
          <img className="h-32" src="/images/discount20.svg" alt="" />
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-once="true"
          className="hidden sm:flex absolute bottom-12 md:bottom-48 lg:bottom-32 -right-6 floating-4"
        >
          <img className="h-32" src="/images/30discount.svg" alt="" />
        </div>
      </div>
      <div className="">
        <h1
          data-aos="fade-up"
          data-aos-delay="50"
          className="text-2xl lg:text-4xl font-recoleta font-bold !leading-normal text-gray-800"
        >
          <span className="text-cgreen">Elevate Employee Satisfaction: </span>
          Personalized Benefits, Discounts and Perks for a Positive Workplace
        </h1>
        <p className="mt-8 text-lg" data-aos="fade-up" data-aos-delay="250">
          Transform your company culture and boost employee morale with Coscut.
          We offer a tailored solution for employers seeking to provide
          personalized benefits, exclusive discounts, and perks that resonate
          with every team member. Create a positive and engaging workplace that
          attracts and retains top talent.
        </p>
        <div
          className="mt-8 flex gap-6"
          data-aos="fade-up"
          data-aos-delay="450"
        >
          <Button variant="cgreen">Get Started</Button>
          <Button variant="amber">Partner Us</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
