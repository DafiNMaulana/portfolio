import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Tag from "./partials/project/Tag";
import Arrow from "@/icons/arrow";
import Image from "next/image";

export default function AncArrow({ title, desc, tags, href, titleClassName }) {
  return (
    <Link href={href} className="relative group flex gap-3 z-10" target="_blank">
      <div className="w-full border-b border-accent flex justify-between items-end pb-[16px]">
        <div className="flex flex-col gap-[16px]">
          <span className={`${titleClassName} text-accent text-2xl font-semibold`}>{title}</span>
          {desc && (
            <p className="text-secondary-dark text-base font-medium">{desc}</p>
          )}
          {tags && (
            <div className="flex flex-wrap w-full gap-5">
              {tags.map((tag, index) => (
                <Tag key={index} title={tag.attributes.title}/>
              ))}
            </div>
          )}
        </div>
        <Arrow className={"w-10 translate-x-3 sm:block hidden"}/>
      </div>
    </Link>
  );
}
