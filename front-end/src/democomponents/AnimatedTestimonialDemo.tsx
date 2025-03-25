import { AnimatedTestimonials } from "../components/ui/animated-testimonials";

import sait1 from "../../public/images/sait/190327-sait-02.jpg";
import sait3 from "../../public/images/sait/14350369704_e85b8f63cf_b.jpg";
import sait4 from "../../public/images/sait/SAIT-Atrium.webp";
import sait5 from "../../public/images/sait/cd-sait-parking-garage-600x400.jpg";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: sait1,
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: sait3,
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: sait4,
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: sait5,
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
