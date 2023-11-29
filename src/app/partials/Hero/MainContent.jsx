"use client";
import {useRef, useEffect, useState} from "react";

// nextjs
import Image from "next/image";
import Link from "next/link";

import user from "../../../assets/img/header/user.png";

// components
import BacPrimary from "@/components/BacPrimary";
import Title from "@/components/Title";
import SubTitle from "@/components/SubTitle";

// gsap
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// api
import useFetcher from "@/lib/useFetcher";

export default function MainContent() {
  const top = useRef(null);
  const bot = useRef(null);
  const mainWraper = useRef(null);

  // the animation
  useEffect(() => {
    const title = document.querySelector(".title");
    const subtitle = document.querySelector(".subtitle");
    const button = document.querySelector(".button");
    const img = document.querySelector(".img");

    // opening animation
    let tl = gsap.timeline({
      defaults: {
        duration: 1.2,
        visibility: "visible",
        ease: "power2.out",
        width: "auto",
      },
    });
    let tl2 = gsap.timeline();

    // beeg title
    tl.to(top.current, {left: "0"}, 0.2).to(bot.current, {right: "0"}, 0.2);

    // main content
    tl2
      .to(
        [title, subtitle, button],
        {
          y: "0",
          duration: 0.9,
          visibility: "visible",
          ease: "Power.out",
          opacity: 1,
        },
        0.2
      )
      .to(
        img,
        {
          duration: 0.9,
          ease: "Power.out",
          opacity: 1,
          y: "0",
          visibility: "visible",
        },
        0.2
      )
      .to(img, {scale: 1}, 0.2);

    return () => {
      tl.revert();
      tl2.revert();
    };
  }, [top, bot]);

  // fetch data
  const {data, isError, isLoading} = useFetcher({endpoint: "/api/hero-section?populate=profile_picture"});
  const [profilePicture, setProfilePicture] = useState("");

  useEffect(() => {
    if (data.attributes) {
      setProfilePicture(process.env.STRAPI_BASE_URL + data?.attributes?.profile_picture?.data?.attributes?.url);
    }
  }, [data]);

  // open image
  const [isImageOpen, setIsImageOpen] = useState(false);
  return (
    <>
      {/* beeg title */}
      <div className="relative z-10 text-[65px] md:text-[141px] font-bold text-stroke text-transparent w-full h-[300px] overflow-hidden">
        <span ref={top} className="absolute hidden md:block top-10 sm:top-0 -left-96 invisible overflow-hidden w-0">
          FRONTEND
        </span>
      </div>
      {/* beeg title end */}

      <div ref={mainWraper} className="flex flex-col items-center justify-center text-center gap-y-3 md:gap-y-5 h-full">
        {/* profile picture */}
        <div className="overflow-hidden cursor-pointer" onClick={() => setIsImageOpen(true)}>
          <Image
            src={profilePicture == "" ? user : profilePicture}
            loader={() => `${profilePicture}?w=110?h=110`}
            alt="Profile picture"
            width={110}
            height={110}
            className="relative z-20 rounded-full img translate-y-[100%] invisible opacity-0 object-cover"
          />
        </div>

        <div
          className={`${
            isImageOpen ? "visible" : "invisible"
          } backdrop-blur-sm bg-base-100/30 fixed top-0 bottom-0 left-0 right-0 z-[9999] grid place-items-center p-10 cursor-pointer duration-100`}
          onClick={() => setIsImageOpen(false)}
        >
          <Image
            src={profilePicture == "" ? user : profilePicture}
            loader={() => `${profilePicture}?w=110?h=110`}
            alt="Profile picture"
            width={310}
            height={310}
            className={`${isImageOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-24"} rounded-full duration-300`}
          />
        </div>
        {/* profile picture end */}

        {/* Title */}
        <div className="overflow-hidden">
          <Title
            content={
              isLoading ? (
                <span className="loading loading-dots loading-md bg-accent"></span>
              ) : isError ? (
                "Something went wrong :("
              ) : (
                `${data.attributes !== undefined && data.attributes.title}👋`
              )
            }
            className={"title z-20 translate-y-[100%] invisible opacity-0"}
          />
        </div>
        {/* Title end */}

        {/* Subtitle */}
        <div className="overflow-hidden">
          <SubTitle
            parentClassName="px-5 md:px-28 max-w-3xl relative z-20 subtitle translate-y-[100%] invisible opacity-0"
            content={
              isLoading ? (
                <span className="loading loading-dots loading-md bg-accent"></span>
              ) : isError ? (
                "Something went wrong :("
              ) : (
                data.attributes !== undefined && data.attributes.subtitle
              )
            }
          />
        </div>
        {/* Subtitle end */}

        {/* Button */}
        <div className="overflow-hidden">
          <BacPrimary href="#projects" content="Lihat Project" className={"z-20 relative button invisible opacity-0 translate-y-[100%]"} />
        </div>
        {/* Button end */}
      </div>

      {/* BEEG TITLE PART 2 */}
      <div className="w-full relative z-10 text-[65px] md:text-[141px] font-bold text-stroke text-transparent h-[300px] overflow-hidden">
        <span ref={bot} className="absolute hidden md:block -right-96 invisible overflow-hidden bottom-0 w-0">
          DEVELOPER
        </span>
      </div>
      {/* BEEG TITLE PART 2 END */}
      <Link
        href="#about"
        className="w-5 h-8 border-accent border rounded-full absolute bottom-0 md:bottom-20 md:left-0 2xl:-left-10 flex justify-center pt-2 z-30"
      >
        <span className="w-1 h-2 rounded-full bg-accent block animate-bounce"></span>
      </Link>
    </>
  );
}
