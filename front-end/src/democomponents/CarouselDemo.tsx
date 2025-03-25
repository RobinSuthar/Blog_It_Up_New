"use client";
import sait1 from "../../public/images/sait/190327-sait-02.jpg";
import sait3 from "../../public/images/sait/14350369704_e85b8f63cf_b.jpg";
import sait4 from "../../public/images/sait/SAIT-Atrium.webp";
import sait5 from "../../public/images/sait/cd-sait-parking-garage-600x400.jpg";
import Carousel from "../components/ui/carousel";
export function CarouselDemo() {
  const slideData = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: sait3,
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: sait1,
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: sait5,
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: sait4,
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
