"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import FeelingCarousel from "./FeelingCoursel";

const Video = () => {
  const titleRef = useRef(null);
  const buttonsRef = useRef(null);
  const [showCarousel, setShowCarousel] = useState(false);
  const [activeButton, setActiveButton] = useState<number | null>(null);

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
        scaleX: 1.1,
      });

      const tl = gsap.timeline();

      tl.to([titleRef.current, buttonsRef.current], {
        y: -240,
        duration: 1,
        ease: "power2.inOut",
        
      });

      tl.to(
        ".carousel-container",
        {
          y: 20,
          opacity: 1,
          scaleX: 1,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.5"
      );
    }
  }, [showCarousel]);

  const handleButtonClick = (id: number) => {
    setActiveButton(id);
    setShowCarousel(true);
  };

  return (
    <div className="w-screen h-screen relative">
      <video
        src="./video/background.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full absolute inset-0 object-cover"
      />

      <div ref={titleRef} className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center gap-10 px-4">
        <div >
          <h1 className="max-w-4xl text-white text-[40px] md:text-[52px] leading-snug font-medium opacity-90 [font-family:'Plus_Jakarta_Sans',Helvetica] ">
            What&apos;s the feeling <br />
            you&apos;re seeking
          </h1>
        </div>

        
        <div 
          className={`flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 transition-all duration-500 ${
            showCarousel ? 'flex-row justify-center w-screen' : 'flex-col'
          }`}
        >
          {feelingOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleButtonClick(option.id)}
              className={`relative px-6 md:px-8 py-3 rounded-full text-[16px] leading-[120%] font-normal [font-family:'Plus_Jakarta_Sans',Helvetica] transition-all ${
                activeButton === option.id 
                ? 'bg-white text-black hover:bg-white/90' 
                : 'text-white hover:bg-white/30'
              }`}
            >
              <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${
                activeButton === option.id 
                ? 'from-white to-white' 
                : 'from-white/10 to-white/0'
              } -z-10`} />
              <div className={`absolute inset-[1px] rounded-full ${
                activeButton === option.id 
                ? 'bg-white' 
                : 'bg-gradient-to-t from-white/10 to-white/0'
              } backdrop-blur-[80px] -z-10`} />
              {option.text}
            </button>
          ))}
        </div>
      </div>

      {showCarousel && <FeelingCarousel />}
    </div>
  );
};

export default Video;
