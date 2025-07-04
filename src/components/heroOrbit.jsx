// import { twMerge } from "tailwind-merge";
import { twMerge } from "tw-merge";

export const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  orbitDuration,
  spinDuration,
  shouldSpin = false,
}) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
      <div
        className={`[animation-duration:30s] ${
          shouldOrbit ? "animate-spin " : ""
        }`}
        style={{
          animationDuration: orbitDuration,
        }}
      >
        <div
          className={""}
          style={{
            animationDuration: spinDuration,
          }}
        >
          <div
            className= {`${twMerge(shouldSpin ? "animate-spin" : "")}flex items-start justify-start` }
            style={{
              height: `${size}px`,
              width: `${size}px`,
              transform: `rotate(${rotation}deg)`,
               animationDuration: spinDuration ,
            }}
          >
            <div className="inline-flex">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
