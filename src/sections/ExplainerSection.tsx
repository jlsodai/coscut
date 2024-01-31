/* eslint-disable @next/next/no-img-element */
"use client";
import ButtonLinks from "@/components/ui/ButtonLinks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const steps = [
  {
    title: "Employer Signup and Team Invitation",
    id: "signup",
    subtitle:
      "Effortless Onboarding for Employers; Seamless Invitations for Employees",
    desc: "Employers seamlessly initiate their Coscut journey by effortlessly registering on the platform, where the process is not only simple but also tailored to their specific needs. Once registered, they unlock a realm of possibilities and extend personalized invitations to their team members, marking the beginning of an exciting and tailored benefits exploration.",
    imgUrl:
      "https://res.cloudinary.com/dmaestro/image/upload/v1706645991/onboard_lnpjmj.svg",
  },
  {
    title: "Team Access to Curated Discounts",
    id: "access",
    subtitle: "Curated Discounts for Every Employee Preference",
    desc: "With invitations accepted, employees gain immediate access to a curated selection of discounts from Coscut's diverse vendor network. Simultaneously, employers customize the benefits landscape by seamlessly integrating their preferred vendors, complete with negotiated discounts or suggesting new ones.",
    imgUrl:
      "https://res.cloudinary.com/dmaestro/image/upload/v1706606183/shop_nnksme.svg",
  },
  // {
  //   title: "Customize Vendor Options",
  //   id: "customize",
  //   subtitle: "Flexibility to Bring Own Vendors or Recommend New Ones",
  //   desc: "Empowerment lies in customization. Employers have the flexibility to integrate their preferred vendors, complete with negotiated discounts. Additionally, they can suggest new vendors, ensuring the platform evolves to meet the evolving needs of their workforce.",
  //   imgUrl:
  //     "https://res.cloudinary.com/dmaestro/image/upload/v1706606183/shop_nnksme.svg",
  // },
  {
    title: "Reward and Manage Team Perks",
    id: "reward",
    subtitle: "Flexibility to Bring Own Vendors or Recommend New Ones",
    desc: "Coscut enhances employee recognition with points or perks for achievements, birthdays, or work anniversaries. This dynamic system adds a personal touch, boosting overall workplace satisfaction. Employers effortlessly manage and track perks via Coscut's intuitive dashboard for a seamless, transparent benefits experience.",
    imgUrl:
      "https://res.cloudinary.com/dmaestro/image/upload/v1706635769/reward_cauqby.svg",
  },
];
const ExplainerSection = () => {
  const [activeStep, setActiveStep] = useState(steps[0].id);
  return (
    <section className="py-16" id="how">
      <div className="container">
        <h1
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-2xl lg:text-4xl font-recoleta font-bold leading-snug text-cgreen text-center max-w-2xl mx-auto"
        >
          A Tailored Benefits Experience for Employers and Employees
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="max-w-2xl mx-auto text-center mt-8"
        >
          Coscut transforms the employee benefits landscape by offering a
          personalized and inviting experience for both employers and employees.
          Here&apos;s how the platform seamlessly operates:
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="mt-8 grid lg:grid-cols-2 bg-gray-100 rounded-lg p-8 gap-8"
        >
          <div className="-md:hidden lg:relative bg-white rounded-lg">
            {steps.map((step, i) => (
              <img
                key={i}
                src={step.imgUrl}
                className={`${
                  step.id !== activeStep && "hidden"
                } max-h-full lg:absolute m-auto top-0 bottom-0 left-0 right-0 p-8`}
                alt=""
              />
            ))}
          </div>
          <div className="">
            <Accordion
              type="single"
              defaultValue={steps[0].id}
              className=" space-y-4"
              onValueChange={setActiveStep}
            >
              {steps.map((step, i) => (
                <AccordionItem
                  key={i}
                  value={step.id}
                  className="hover:bg-white bg-gray-200 rounded-lg px-8 py-4 data-[state=open]:bg-white"
                >
                  <AccordionTrigger className="text-xl font-recoleta justify-normal gap-2 text-left">
                    <div className="inline-flex items-center justify-center w-8 h-8 mr-2 text-white transition-colors duration-150 bg-cgreen-800 rounded-full focus:shadow-outline hover:bg-pink-800 shrink-0">
                      {i + 1}
                    </div>
                    {step.title}
                  </AccordionTrigger>
                  <AccordionContent>{step.desc}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <ButtonLinks className="justify-center" />
      </div>
    </section>
  );
};

export default ExplainerSection;
