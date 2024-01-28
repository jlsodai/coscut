/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "@/components/ui/button";
import { stats } from "@/lib/utils";
import { HiOutlineTrophy } from "react-icons/hi2";

const features = [
  {
    title: "Attract & Retain Top Talent",
    color: "text-amber-500",
    bg: "bg-amber-50",
    imgUrl:
      "https://res.cloudinary.com/dmaestro/image/upload/v1706454566/female-programmer_dqn4cf.png",
    border: "border-amber-300",
    desc: "Stand out in the competitive job market. Our platform helps you attract top-notch talent and keep your best employees engaged for the long term.",
  },
  {
    title: "Boost Employee Morale",
    color: "text-blue-500",
    bg: "bg-blue-50",
    imgUrl: "https://www.svgrepo.com/show/492913/step-up-male.svg",
    border: "border-blue-300",
    desc: "Give your team more than just a paycheck. Cosset your employees with exclusive benefits that show you care about their well-being.",
  },
  {
    title: "Customized Packages",
    color: "text-rose-500",
    bg: "bg-rose-50",
    imgUrl:
      "https://res.cloudinary.com/dmaestro/image/upload/v1706453445/cardboard-box-closed_icww6k.png",
    border: "border-rose-300",
    desc: "Tailor your employee benefits. Our platform offers customizable packages that align with the unique needs and preferences of your workforce.",
  },
];

const AboutSection = () => {
  return (
    <section className="py-16" id="about">
      <div className="container" data-aos="fade-up" data-aos-delay="150">
        <h1 className="text-2xl lg:text-4xl font-recoleta font-bold !leading-snug text-cgreen text-center max-w-2xl mx-auto">
          All-in-one platform to boost employee satisfaction and retention
        </h1>
        <p className="max-w-4xl mx-auto text-center mt-8">
          We emphasize holistic well-being and contentment. Collaborating with
          us enables organizations to cultivate a workplace culture that places
          a paramount emphasis on the overall well-being of their employees.
          This commitment, in turn, leads to a workforce that is more content,
          engaged, and productive.
        </p>
      </div>

      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, i) => (
            <div
              data-aos="fade-up"
              data-aos-delay={250 * (i + 1)}
              key={i}
              className={`${feature.bg} hover:shadow-xl px-6 py-10 text-center border ${feature.border}`}
            >
              <img src={feature.imgUrl} alt="" className="mb-4 h-20 mx-auto" />
              {/* <HiOutlineTrophy
                className={`mx-auto ${feature.color} text-7xl mb-4`}
              /> */}
              <h1
                className={`${feature.color} font-medium text-xl mb-3 lg:px-14 text-darken`}
              >
                {feature.title}
              </h1>
              <p className="px-4 text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-16" data-aos="fade-up" data-aos-delay="150">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 text-cgreen-800 text-center divide-x divide-cgreen-200 bg-gradient-to-r from-cgreen-100 via-white to-cgreen-100 border border-cgreen-200 rounded-lg py-8">
          {stats.map((stat, i) => (
            <div
              className="px-4"
              key={i}
              data-aos="fade-up"
              data-aos-delay={250 * (i + 1)}
            >
              <h2 className="text-3xl lg:text-6xl font-recoleta font-bold">
                {stat.val}%
              </h2>
              <p>{stat.title}</p>
            </div>
          ))}
        </div>

        <p
          className="max-w-4xl mx-auto text-center mt-8"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Research indicates that placing a significant emphasis on employee
          wellness and benefits serves as a strategic advantage in attracting
          and retaining top-tier talent.
        </p>

        <div
          className="mt-8 flex gap-8 justify-center"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <Button className="" variant="cgreen">
            Get started
          </Button>
          <Button className="" variant="amber">
            Partner us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
