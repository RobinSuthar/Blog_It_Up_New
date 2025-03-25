import { HoverEffect } from "../components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl flex justify-center flex-col mx-auto px-8 mt-16">
      <div className="md:text-7xl lg:text text-3xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        What to <span className="text-purple-500">Expect ?</span>
      </div>
      <HoverEffect items={features} />
    </div>
  );
}

export const features = [
  {
    title: "Post Anonymously",
    description:
      "Share your thoughts, experiences, and opinions without revealing your identity. Engage in open discussions without fear of judgment.",
    link: "#",
  },
  {
    title: "Read & Explore",
    description:
      "Browse through posts from other SAIT students. Discover trending topics, personal stories, and academic insights shared by your peers.",
    link: "#",
  },
  {
    title: "Engage & Interact",
    description:
      "Like, comment, and discuss posts while staying anonymous. Build meaningful conversations without the pressure of social identity.",
    link: "#",
  },
  {
    title: "Moderated Community",
    description:
      "Enjoy a safe and respectful space with community guidelines in place. Posts are moderated to maintain a healthy discussion environment.",
    link: "#",
  },
  {
    title: "User-Friendly Experience",
    description:
      "Easily navigate through the platform with a clean and intuitive design. Post and interact seamlessly from any device.",
    link: "#",
  },
  {
    title: "Your Voice, Your Space",
    description:
      "This is your platform to express yourself freely, share insights, and connect with fellow SAIT students on topics that matter to you.",
    link: "#",
  },
];
