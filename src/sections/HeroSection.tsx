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
          className="mx-auto aos-init aos-animate"
          src="/images/heroImg.png"
        />

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-once="true"
          className="absolute top-20 -left-12 sm:top-32 sm:left-10 md:top-40 md:left-16 lg:-left-5 lg:top-32 floating-4 aos-init aos-animate"
        >
          <img className="h-40" src="/images/happyBirthDay.svg" alt="" />
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-once="true"
          className="hidden sm:flex absolute top-20 -right-12 sm:right-24 sm:top-28 md:top-36 md:right-32 lg:top-24 lg:right-2 floating aos-init aos-animate"
        >
          <img className="h-40" src="/images/points.svg" alt="" />
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-once="true"
          className="absolute bottom-0 -left-12 sm:left-2 sm:bottom-20 lg:bottom-14 lg:-left-4 floating aos-init aos-animate"
        >
          <img className="h-32" src="/images/discount20.svg" alt="" />
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-once="true"
          className="hidden sm:flex absolute bottom-12 md:bottom-48 lg:bottom-32 -right-6 floating-4 aos-init aos-animate"
        >
          <img className="h-32" src="/images/30discount.svg" alt="" />
        </div>
      </div>
      <div className="">
        <h1 className="text-2xl lg:text-4xl font-recoleta font-bold leading-snug text-gray-800">
          <span className="text-cgreen">Boost Team Morale: </span>
          Personalized Benefits for a Positive Workplace
        </h1>
        <p className="mt-8 text-lg">
          A happy and fulfilled team is the key to success. Revolutionize your
          employees&apos; financial well-being through our exclusive discounts
          and benefits, tailored to enhance their overall satisfaction.
        </p>
        <div className="mt-8 flex gap-6">
          <Button variant="cgreen">Get Started</Button>
          <Button variant="amber">Partner Us</Button>
        </div>
      </div>
      {/* <div className="w-full relative" id="girl">
            <img
              data-aos="fade-up"
              data-aos-once="true"
              className="w-10/12 mx-auto aos-init aos-animate"
              src="/images/heroImg.png"
            />

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
              className="absolute top-20 -left-6 sm:top-32 sm:left-10 md:top-40 md:left-16 lg:-left-0 lg:top-52 floating-4 aos-init aos-animate"
            >
              <img
                className="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16"
                src="http://skill.devx/img/calendar.svg"
              />
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="true"
              className="absolute top-20 right-10 sm:right-24 sm:top-28 md:top-36 md:right-32 lg:top-32 lg:right-16 floating aos-init aos-animate"
            >
              <svg
                className="h-16 sm:h-24"
                viewBox="0 0 149 149"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d)">
                  <rect
                    x="40"
                    y="32"
                    width="69"
                    height="69"
                    rx="14"
                    fill="#F3627C"
                  ></rect>
                </g>
                <rect
                  x="51.35"
                  y="44.075"
                  width="47.3"
                  height="44.85"
                  rx="8"
                  fill="white"
                ></rect>
                <path
                  d="M74.5 54.425V78.575"
                  stroke="#F25471"
                  strokeWidth="4"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M65.875 58.7375L65.875 78.575"
                  stroke="#F25471"
                  strokeWidth="4"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M83.125 63.9125V78.575"
                  stroke="#F25471"
                  strokeWidth="4"
                  strokeLinecap="round"
                ></path>
                <defs>
                  <filter
                    id="filter0_d"
                    x="0"
                    y="0"
                    width="149"
                    height="149"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="8"></feOffset>
                    <feGaussianBlur stdDeviation="20"></feGaussianBlur>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.825 0 0 0 0 0.300438 0 0 0 0 0.396718 0 0 0 0.26 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    ></feBlend>
                  </filter>
                </defs>
              </svg>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
              className="absolute bottom-14 -left-4 sm:left-2 sm:bottom-20 lg:bottom-24 lg:-left-4 floating aos-init aos-animate"
            >
              <img
                className="bg-white bg-opacity-80 rounded-lg h-20 sm:h-28"
                src="http://skill.devx/img/ux-class.svg"
                alt=""
              />
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-once="true"
              className="absolute bottom-20 md:bottom-48 lg:bottom-52 -right-6 lg:right-8 floating-4 aos-init aos-animate"
            >
              <img
                className="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16"
                src="http://skill.devx/img/congrat.svg"
                alt=""
              />
            </div>
          </div> */}
    </div>
  );
};

export default HeroSection;
