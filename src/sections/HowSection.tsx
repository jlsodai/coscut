/* eslint-disable @next/next/no-img-element */
import React from "react";

const HowSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <h1 className="text-4xl font-recoleta font-bold leading-snug text-cgreen text-center max-w-2xl mx-auto">
          How our platform works
        </h1>
        <p className="max-w-2xl mx-auto text-center mt-8">
          Coscut works seamlessly to enhance your financial well-being and job
          satisfaction. Here&apos;s a brief overview of how the platform
          operates:
        </p>
        <img
          src="/images/video.jpg"
          className="max-w-4xl mx-auto mt-12"
          alt=""
        />
      </div>
    </section>
  );
};

export default HowSection;
