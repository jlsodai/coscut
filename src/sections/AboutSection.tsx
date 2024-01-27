import React from "react";
import { Button } from "@/components/ui/button";
import { stats, features } from "@/lib/utils";

const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <h1 className="text-2xl lg:text-4xl font-recoleta font-bold leading-snug text-cgreen text-center max-w-2xl mx-auto">
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
              key={i}
              className={`${feature.bg} hover:shadow-xl px-6 py-10 text-center border ${feature.border}`}
            >
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

      <div className="container mt-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 text-cgreen-800 text-center divide-x divide-cgreen-200 bg-gradient-to-r from-cgreen-100 via-white to-cgreen-100 border border-cgreen-200 rounded-lg py-8">
          {stats.map((stat, i) => (
            <div className="px-4" key={i}>
              <h2 className="text-3xl lg:text-6xl font-recoleta font-bold">
                {stat.val}%
              </h2>
              <p>{stat.title}</p>
            </div>
          ))}
        </div>

        <p className="max-w-4xl mx-auto text-center mt-8">
          Research indicates that placing a significant emphasis on employee
          wellness and benefits serves as a strategic advantage in attracting
          and retaining top-tier talent.
        </p>

        <div className="mt-8 flex gap-8 justify-center">
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
