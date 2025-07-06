"use client"
import { Fragment, useRef, useLayoutEffect } from "react";
import StarIcon from "../../public/icons/star.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const words = [
  "Performant",
  "Reliable",
  "Responsive",
  "Robust",
  "Scalable",
  "Secure",
  "Accessible",
  "User Friendly",
  "Maintainable",
  "Interactive",
  "Search Optimized",
  "Usable",
];

export const TapeSection = () => {
  const tapeRef = useRef(null);

  useGSAP(() => {
    const tape = tapeRef.current;
    const tapeWidth = tape.scrollWidth / 2; // since you duplicate the content

    gsap.to(tape, {
      x: -tapeWidth,
      duration: 18,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % -tapeWidth)
      }
    });
  }, []);

  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div
            className="flex flex-none gap-4 py-3 move-left"
            ref={tapeRef}
          >
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word + idx} className="inline-flex gap-4">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <img src={`/icons/star.svg`} className="size-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
