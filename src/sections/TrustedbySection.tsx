/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { clients } from "@/lib/utils";
const TrustedbySection = () => {
  return (
    <div className="bg-gray-50">
      <div className="container max-w-4xl mx-auto my-8">
        <h1 className="text-center mb-6 text-xl">
          Trusted by 5,000+ Companies Worldwide
        </h1>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center items-center grayscale hover:grayscale-0">
          {clients.map((client, i) => (
            <img key={i} className="h-8" src={`/images/${client}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedbySection;
