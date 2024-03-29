import NavigationMenu from "@/sections/NavigationMenu";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const HeaderSection = () => {
  return (
    <section
      className="container py-8 flex -md:justify-between md:gap-x-16 items-center"
      id="top"
    >
      <h1 className="font-recoleta text-cgreen-800 text-5xl font-bold md:mb-2">
        coscut<span className="text-amber-500">.</span>
      </h1>
      <NavigationMenu />

      <Link
        target="blank"
        className={`${buttonVariants({
          variant: "cgreen",
        })} bg-cgreen-800 hover:bg-cgreen-800/80 ml-auto hidden sm:flex`}
        href="https://cal.com/jlsodai/coscut"
      >
        Book a meeting
      </Link>
    </section>
  );
};

export default HeaderSection;
