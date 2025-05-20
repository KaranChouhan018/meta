'use client'
import React, { useRef } from "react";
import Image from "next/image";

interface CardData {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  tag: string;
}

const cards: CardData[] = [
  {
    id: 1,
    title: "Hot Air Balloon",
    subtitle: "Ride Over the Spice Plantations of Goan Region during the Golden Hour",
    image: "/images/1.jpg",
    tag: "WONDER",
  },
  {
    id: 2,
    title: "Surfing by the Konkan Coast",
    subtitle: "Ride Over the Spice Plantations of Goan Region during the Golden Hour",
    image: "/images/1.jpg",
    tag: "WONDER",
  },
  {
    id: 3,
    title: "Briganza House",
    subtitle: "Ride Over the Spice Plantations of Goan Region during the Golden Hour",
    image: "/images/1.jpg",
    tag: "WONDER",
  },
  {
    id: 4,
    title: "Briganza House",
    subtitle: "Ride Over the Spice Plantations of Goan Region during the Golden Hour",
    image: "/images/1.jpg",
    tag: "WONDER",
  },
  {
    id: 5,
    title: "Briganza House",
    subtitle: "Ride Over the Spice Plantations of Goan Region during the Golden Hour",
    image: "/images/1.jpg",
    tag: "WONDER",
  },
];

const FeelingCarousel: React.FC = () => {
  const carouselRef = useRef(null);

  return (
    <div 
      ref={carouselRef}
      className="carousel-container absolute bottom-8 left-1/2  -translate-x-1/2 w-full  flex justify-center items-center gap-[36px] "
    >
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`min-w-[368px]  overflow-hidden ${index === 0 || index === cards.length - 1 ? 'opacity-60' : ''}`}
        >
          <div className="relative w-[368px] rounded-[12px] h-[368px]">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="w-[364px] h-[368px] object-cover rounded-[12px]"
            />
            <span className="absolute top-4 left-4 px-4 py-1 text-xs font-semibold bg-white/10 text-white rounded-full backdrop-blur-md border border-white/20">
              {card.tag}
            </span>
          </div>
          <div className="bg-[#f9f9f9]  rounded-[12px] h-[171px]">
            <div className="pt-[27px] px-[33px]">
              <h3 className="opacity-90 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#000000e6] text-[22px] tracking-[-0.44px] leading-[22px]">
                {card.title}
              </h3>

              <p className="mt-[8px] w-[257px] opacity-90 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#3e3e3ee6] text-sm tracking-[0] leading-[18.2px]">
                {card.subtitle}
              </p>

              <div className="mt-[25px] inline-block border-b-[0.67px] border-[#31414e] pb-[2px]">
                <span className="opacity-90 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#000000e6] text-sm tracking-[0] leading-[19.6px]">
                  Read More&nbsp;&nbsp;
                </span>
                <span className="text-[#000000e6] text-sm">+</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeelingCarousel;
