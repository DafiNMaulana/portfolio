"use client";
import {useEffect, useRef} from "react";

// components
import ServiceTitle from "@/components/partials/cardService/ServiceTitle";
import SubTitle from "@/components/SubTitle";
import CardService from "@/components/CardService";

// icons
import Idea from "@/icons/Idea";
import LaptopCode from "@/icons/LaptopCode";

// gsap
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const wraper = useRef(null);
  const contentWraper = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wraper.current,
        start: "top 75%",
        end: "40% 75%",
        scrub: 1,
      },
      defaults: {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "Power3.out",
      },
    });

    tl.to(contentWraper.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "Power3.out",
    });

    return () => {
      if (tl) {
        tl.revert();
      }
    };
  });
  return (
    <div ref={wraper}>
      <div ref={contentWraper} className="flex flex-wrap sm:flex-nowrap gap-8 justify-center opacity-0 translate-y-96">
        <CardService projectTo={"/projects/ui-ux-design"}>
          <ServiceTitle icon={<Idea />} iconClassName={"w-8"} content={"UI/UX Design"} />
          <SubTitle
            content={
              "Selain menerima jasa pengembangan dari segi frontend, saya juga bisa membuat UI/UX yang eye catching dan responsif. dalam hal ini, saya menggunakan software Figma sebagai “Main Tool” saya."
            }
          />
        </CardService>
        <CardService projectTo={"/projects/fullstack-web-development"}>
          <ServiceTitle icon={<LaptopCode />} content={"Fullstack web development"} />
          <SubTitle
            content={
              "Frontend web development adalah “Main service” yang bisa saya tawarkan kepada anda, tapi saya juga tidak menutup diri untuk  menerima jasa pembuatan website fullstack, saya selalu terbuka untuk menerima project pembuatan website."
            }
          />
        </CardService>
      </div>
    </div>
  );
}
