'use client'
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import FeelingCarousel from "./FeelingCoursel";

const Video = () => {
  const titleRef = useRef(null);
  const buttonsRef = useRef(null);
  const [showCarousel, setShowCarousel] = useState(false);

  const feelingOptions = [
    { id: 1, text: "Wonder" },
    { id: 2, text: "Adventure" },
    { id: 3, text: "Joy" },
    { id: 4, text: "Connection" },
    { id: 5, text: "Excitement" },
    { id: 6, text: "Reflection" },
  ];

  useEffect(() => {
    if (showCarousel) {
      gsap.set(".carousel-container", {
        y: 180,
        opacity: 0,
        scaleX: 1.1
      });
      
      const tl = gsap.timeline();
      
      tl.to([titleRef.current, buttonsRef.current], {
        y: -220,
        duration: 1.2,
        ease: "power2.inOut"
      });

      tl.to(".carousel-container", {
        y: 0,
        opacity: 1,
        scaleX: 1,
        duration: 1.5,
        ease: "power3.out"
      }, "-=0.5");
    }
  }, [showCarousel]);

  const handleButtonClick = () => {
    setShowCarousel(true);
  };

  return (
    <div className="w-screen relative h-screen">
      <video
        src="./video/background.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-screen h-screen absolute inset-0 object-cover"
      />

      <div ref={titleRef}>
        <h1 className="absolute w-[840px] top-[352px] left-1/2 -translate-x-1/2 opacity-90 font-medium text-[#f9f9f9] [font-family:'Plus_Jakarta_Sans',Helvetica] text-[52px] text-center leading-[57.2px] font-geist">
          What&apos;s the feeling <br />
          you&apos;re seeking
        </h1>
      </div>

      <div ref={buttonsRef} className="flex items-center gap-[30px] absolute top-[520px] left-1/2 -translate-x-1/2">
        {feelingOptions.map((option) => (
          <button
            key={option.id}
            onClick={handleButtonClick}
            className="relative px-[34px] py-[14px] rounded-full text-white text-center text-[16px] leading-[120%] tracking-[0%] font-normal [font-family:'Plus_Jakarta_Sans',Helvetica] hover:bg-white/30 transition-all"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-white/0 -z-10" />
            <div className="absolute inset-[1px] rounded-full bg-gradient-to-t from-white/10 to-white/0 backdrop-blur-[80px] -z-10" />
            {option.text}
          </button>
        ))}
      </div>

      {showCarousel && <FeelingCarousel />}
    </div>
  );
};

export default Video;
