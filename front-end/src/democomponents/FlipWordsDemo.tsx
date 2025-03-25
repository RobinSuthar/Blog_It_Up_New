import { FlipWords } from "../components/ui/flip-words";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { AnimatedTestimonialsDemo } from "./AnimatedTestimonialDemo";
export function FlipWordsDemo() {
  const words = ["Anonumusly", "Freely", "Proudly"];
  const navigate = useNavigate();

  function handleClick() {
    navigate("/infopage");
  }

  return (
    <div className="h-[40rem] flex flex-col justify-center items-center px-4">
      <div className="text-5xl grid grid-cols-5 gap-4  md:text-7xl lg:text mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <div className="col-span-3  justify-center mt-56 align-middle text-center ">
          Welcome! SAIT Student!
          <div></div>
          <div>
            <FlipWords words={words} /> <br />
            <div className="mt-8 flex gap-5 justify-center">
              <Button onClick={handleClick} size={"lg"} variant="outline">
                What is this?
              </Button>
              <Button onClick={handleClick} size={"lg"} variant="outline">
                Get Started
              </Button>
            </div>
          </div>
        </div>
        <div className="rounded-lg mt-12 col-span-2">
          <AnimatedTestimonialsDemo />
        </div>
      </div>
    </div>
  );
}
