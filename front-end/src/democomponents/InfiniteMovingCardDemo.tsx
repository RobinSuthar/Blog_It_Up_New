"use client";

import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { Button } from "../components/ui/button";
export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="md:text-7xl mb-9 lg:text text-3xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Why should we use this{" "}
        <span className="text-purple-500 text-9xl">?</span>
        <div className="md:text-4xl mb-9 mt-4 lg:text text-3xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          Here are what <span className="text-purple-500">SAIT</span> Student
          thinks!
        </div>
        <div className="md:text-xl mb-9 mt-1 lg:text text-3xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          Still not sure{" "}
          <span className="text-purple-500">
            <Button size={"lg"} variant="outline">
              Documentation
            </Button>
          </span>
        </div>
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
      />
    </div>
  );
}
const testimonials = [
  {
    quote:
      "Finally, a place where I can share my thoughts without worrying about judgment! This platform has given me a voice I never knew I needed.",
    name: "Alex M.",
    title: "SAIT Business Student",
  },
  {
    quote:
      "I love how easy it is to post and interact anonymously. It’s a great way to discuss campus life, academics, and even personal struggles without feeling exposed.",
    name: "Sarah T.",
    title: "SAIT Engineering Student",
  },
  {
    quote:
      "The community here is amazing! Seeing other students share their experiences makes me feel connected, even when I’m struggling with assignments.",
    name: "Jordan P.",
    title: "SAIT IT Student",
  },
  {
    quote:
      "This platform is a game-changer! I can finally express my opinions freely and engage in meaningful conversations with fellow SAIT students.",
    name: "Emily R.",
    title: "SAIT Marketing Student",
  },
  {
    quote:
      "A must-have for SAIT students! Whether it's venting about exams or sharing wins, this site makes me feel heard and supported.",
    name: "Chris D.",
    title: "SAIT Computer Science Student",
  },
];
