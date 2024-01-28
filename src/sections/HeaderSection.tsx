import NavigationMenu from "@/sections/NavigationMenu";
import { Button } from "@/components/ui/button";

const HeaderSection = () => {
  return (
    <section className="container py-8 flex gap-x-16 items-center" id="top">
      <h1 className="font-recoleta text-cgreen-800 text-5xl font-bold mb-2">
        coscut<span className="text-amber-500">.</span>
      </h1>
      <NavigationMenu />
      <Button
        className="bg-cgreen-800 hover:bg-cgreen-800/80 ml-auto hidden sm:flex"
        variant="cgreen"
      >
        Book a meeting
      </Button>
    </section>
  );
};

export default HeaderSection;
