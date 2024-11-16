

"use client"

import React from "react";
import { motion } from "framer-motion";
import useSliderAnimation from "hooks/useSliderAnimation";
import Image from "next/image";

const Slider = () => {


  const data = [
    { id: 1, image: "/home-gallery-image-1.svg" },
    { id: 2, image: "/home-gallery-image-2.svg" },
    { id: 3, image: "/home-gallery-image-3.svg" },
    { id: 4, image: "/home-gallery-image-4.svg" },
    { id: 5, image: "/home-gallery-image-5.svg" },
    { id: 6, image: "/home-gallery-image-6.svg" },
  ];



  const refs = useSliderAnimation(window.innerWidth > 1280 ? 0.01 : 0.06);

  return (
    <motion.div
      className=""
      // viewport={{ once: true, amount: 0.5 }}
      // transition={{ duration: 0.8 }}
      // variants={{
      //   hidden: { opacity: 0, y: 100 },
      //   visible: { opacity: 1, y: 0 },
      // }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        delay: 0.2, // Delay each line progressively
      }}
    >
      <div className="overflow-x-hidden border border-[#50B498] green ">
        <div className="relative flex flex-nowrap w-[1000%] z-[1] border border-[#50B498] green">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              ref={(el) => (refs.current[i] = el)}
              className="flex gap-5 pr-5 border border-[#50B498] green"
            >
              {data.map((image, i) => (
                <Image
                  key={image.id}
                  src={image.image}
                  width={400}
                  height={400}
                  alt="image"
                  className="md:h-[340px] w-[272px] md:w-[400px] xl:h-[400px] border border-[#50B498] green "
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Slider;
