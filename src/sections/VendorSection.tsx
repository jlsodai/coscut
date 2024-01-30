import React from "react";
import { vendorBenefits } from "@/lib/utils";
import { HiCheckCircle } from "react-icons/hi2";
import { Button } from "@/components/ui/button";

const VendorSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="vendors">
      <div className="container">
        <h1
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-2xl lg:text-4xl font-recoleta font-bold leading-snug text-cgreen text-center max-w-2xl mx-auto"
        >
          Vendor Advantages: Maximizing Opportunities with Coscut
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="250"
          className="max-w-4xl mx-auto text-center mt-8"
        >
          Discover the limitless possibilities of partnering with Coscut. As a
          vendor, your journey with us goes beyond discounts — it is about
          expanding your reach, building brand elevation, and fostering
          meaningful connections. This section unveils the benefits awaiting you
          as a valued partner in the Coscut network. Let us embark on this
          journey together, where success is a shared destination.
        </p>
      </div>

      <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-1 mt-16">
        {vendorBenefits.map((benefit, i) => (
          <div
            data-aos="fade-up"
            data-aos-delay={(i + 1) * 200}
            className={`${
              i % 2 ? "bg-[#006E66]/10" : "bg-[#006E66]/15"
            } p-8 hover:bg-[#006E66]/30`}
            key={i}
          >
            <div
              className={`flex items-center gap-2 ${
                i % 2 ? "text-[#006E66]" : "text-[#006E66]"
              }`}
            >
              <HiCheckCircle className="text-2xl" />
              <h2 className="font-bold">{benefit.title}</h2>
            </div>
            <p className="mt-4">{benefit.desc}</p>
          </div>
        ))}

        <div
          className="flex flex-col md:flex-row gap-x-8 gap-y-2 justify-center items-center md:col-span-2 lg:bg-[#006E66]/15 py-8 text-center"
          data-aos="fade-up"
          data-aos-delay={(vendorBenefits.length + 1) * 200}
        >
          <h1 className="text-2xl lg:text-4xl font-recoleta font-bold leading-snug text-center">
            Ready to dive in?
          </h1>
          <Button variant="amber">Become a partner</Button>
        </div>
      </div>
    </section>
  );
};

export default VendorSection;
