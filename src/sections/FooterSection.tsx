import React from "react";

const FooterSection = () => {
  return (
    <section className="bg-cgreen-800 py-8">
      <div className="container flex justify-between text-white items-center gap-8">
        <h1 className="font-recoleta text-gray-50 text-3xl md:text-5xl font-bold mb-2">
          coscut<span className="text-amber-500">.</span>
        </h1>
        <p className="text-right">© 2024 Coscut. All rights reserved</p>
      </div>
    </section>
  );
};

export default FooterSection;
