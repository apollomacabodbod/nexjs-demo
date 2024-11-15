"use client"


import { motion } from "framer-motion";

export default function HomeFramer() {
  // The text to display line by line
  const textLines = [
    "use client;",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Deleniti, tenetur? Ab aliquam totam a necessitatibus laborum.",
    "Vitae nihil est animi omnis consectetur nisi rem maiores.",
    "Reprehenderit vero repudiandae harum officiis odit est libero ex perspiciatis."
  ];

  return (
    <div className="w-full">
      {textLines.map((line, index) => (
        <motion.div
          key={index}
          className="leading-[1.15] pb-2 text-xl md:text-2xl xl:text-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: index * 0.2, // Delay each line progressively
          }}
        >
          {line}
        </motion.div>
      ))}
    </div>
  );
}
