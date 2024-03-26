import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flexcol h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="relate-180 absolute top-[-340p] left-0 z-[-1] w-full h-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
