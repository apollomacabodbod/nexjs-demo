import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function useSliderAnimation(speed) {
  const refs = useRef([]);

  useEffect(() => {
    let xPercent = 0;

    const animate = () => {
      xPercent = xPercent > 0 ? -100 : xPercent < -100 ? 0 : xPercent;
      refs.current.forEach((ref) => {
        gsap.set(ref, { xPercent });
      });
      requestAnimationFrame(animate);
      xPercent -= speed;
    };
    animate();
  }, []);

  return refs;
}
