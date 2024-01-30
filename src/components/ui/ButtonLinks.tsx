import Link from "next/link";
import React from "react";
import { buttonVariants } from "./button";

const ButtonLinks = ({ className }: { className?: string }) => {
  return (
    <div
      className={`mt-8 flex gap-6 ${className}`}
      data-aos="fade-up"
      data-aos-delay="450"
    >
      <Link
        target="blank"
        className={buttonVariants({ variant: "cgreen" })}
        href="https://airtable.com/appChrTKgYj22P1uM/pagBTOvUxWIsILOHz/form"
      >
        Get Started
      </Link>
      <Link
        target="blank"
        className={buttonVariants({ variant: "amber" })}
        href="https://airtable.com/appChrTKgYj22P1uM/pagDnCEfOzFKBJaes/form"
      >
        Partner Us
      </Link>
    </div>
  );
};

export default ButtonLinks;
