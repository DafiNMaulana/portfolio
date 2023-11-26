"use client";
import {useRef, useEffect, useState} from "react";

// components
import Title from "@/components/Title";
import SubTitle from "@/components/SubTitle";
import BtnPrimary from "@/components/BtnPrimary";
import IsDataFetched from "@/components/IsDataFetched";

// gsap
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

// api
import useFetcher from "@/lib/useFetcher";

gsap.registerPlugin(ScrollTrigger);

export default function MainContent() {
  const main = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({scrollTrigger: {trigger: main.current, start: "top 75%", end: "80% 75%", scrub: 1}});
    tl.to(main.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "Power3.out",
    });
  }, []);

  const {data, isError, isLoading} = useFetcher({
    endpoint: "/api/about?populate=*",
  });

  const downloadCV = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = process.env.STRAPI_BASE_URL + data.attributes.cv_file.data.attributes.url;
    downloadLink.target = "_blank";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div ref={main} className="text-center flex flex-col gap-y-8 py-10 opacity-0 translate-y-36">
      <Title content="About" />
      <IsDataFetched data={data} isError={isError} isLoading={isLoading} />
      <SubTitle content={data.attributes !== undefined && data.attributes.explanation} />
      <div>
        <BtnPrimary
          content={isLoading ? <span className="loading loading-dots loading-md bg-accent"></span> : isError ? "Something went wrong :(" : "Download CV"}
          onClick={downloadCV}
          disabled={isLoading || isError}
          className={"disabled:opacity-50 disabled:text-accent"}
        />
      </div>
    </div>
  );
}
