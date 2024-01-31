/* eslint-disable @next/next/no-img-element */
import React from "react";

const TestimonialSection = () => {
  return (
    <section
      className="bg-gradient-to-r from-cgreen-50 to-cgreen-100 overflow-hidden"
      id="testimonials"
    >
      <div className="container flex flex-col lg:flex-row gap-16 lg:gap-24 py-16 items-center justify-center">
        <img
          src="/images/TestimonialImg.png"
          className="max-h-[450px]"
          data-aos="fade-left"
          data-aos-delay="150"
          alt=""
        />
        <div className="max-w-lg gap-y-8 flex flex-col">
          <h3
            className="uppercase text-cgreen tracking-widest font-medium"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Testimonials
          </h3>
          <h4
            className="font-recoleta font-bold text-2xl lg:text-4xl text-gray-800 !leading-snug"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            What Our Customers Say About Us
          </h4>
          <p data-aos="fade-up" data-aos-delay="150">
            Coscut has added tremendous value to my daily life. The personalized
            benefits have not only saved me money but also enhanced my overall
            job satisfaction. It&apos;s a fantastic tool for anyone looking to
            enjoy exclusive perks tailored just for them.
          </p>
          <p className="font-bold" data-aos="fade-up" data-aos-delay="150">
            — Patrick M., Satisfied Coscut User
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
