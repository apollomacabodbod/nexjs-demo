import React, { useEffect, useState } from 'react';

export default function AnimateOnScroll() {
  // State to track the visibility of each block
  const [isVisible, setIsVisible] = useState<boolean[]>(new Array(20).fill(false));

  useEffect(() => {
    // IntersectionObserver to track visibility of each block
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Mark the block as visible when it comes into view
          setIsVisible((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is in view

    // Observing each block
    const blocks = document.querySelectorAll('.block');
    blocks.forEach((block, index) => {
      observer.observe(block);
    });

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full h-screen m-0 p-0">
      <h1 className="w-full h-screen flex justify-center items-center text-6xl text-center">
        Animate On Scroll
      </h1>
      <div className="view flex flex-wrap justify-center items-center">
        {new Array(20).fill(0).map((_, index) => (
          <div
            key={index}
            className={`block bg-${[
              '#e85643',
              '#1a54cf',
              '#24d97f',
              '#9d56f7',
              '#fac952',
            ][index % 5]} ${isVisible[index] ? 'animate-appear' : ''}`}
          ></div>
        ))}
      </div>

      <style jsx global>{`
        .view {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }
        .block {
          height: 200px;
          width: 300px;
          margin: 50px;
          border: 0.5mm solid black;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
            rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
          opacity: 0; /* Make sure they start invisible */
        }

        .animate-appear {
          animation: appear 2s ease-in-out forwards;
        }

        @keyframes appear {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
