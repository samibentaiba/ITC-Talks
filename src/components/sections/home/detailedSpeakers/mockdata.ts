export type Speaker = {
  name: string
  title: string
  description: string
  image: string
}

export const speakers: Speaker[] = [
  {
    name: "Dr. Emily Carter",
    title: "Expert in Business Growth",
    description:
      "Who will talk about the latest AI developments, how they work, and their applications in everyday life and industries.",
    image: "/images/Dr.Emily.png",
  },
  {
    name: "Elon Park",
    title: "CEO, DeepMinds",
    description:
      "Who will explain how AI is improving, the role of deep learning, and how these technologies are solving real-world problems.",
    image: "/images/ElonPark.png",
  },
  {
    name: "Laura Kim",
    title: "AI Policy Advisor",
    description:
      "Who will discuss the rules and policies shaping AI, the ethical concerns involved, and what they mean for the future.",
    image: "/images/LauraKim.png",
  },
  {
    name: "Dr. Alan Foster",
    title: "Professor at ULP",
    description:
      "Who will explore the newest research in AI, the challenges researchers face, and the exciting possibilities ahead.",
    image: "/images/Dr.AlanFoster.png",
  },
]

