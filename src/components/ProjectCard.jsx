import React from "react";
import Image from "next/image";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import BacAccent from "./BacAccent";

export default function ProjectCard({thumbnail, title, desc, href, openSource}) {
  const truncateText = (sentence, maxWords) => {
    if (sentence) {
      const trimmedSentence = sentence.trim();
      const words = trimmedSentence.split(/\s+/);
      const wordCount = words.length;
      if (wordCount > maxWords) {
        const truncatedWords = words.slice(0, maxWords);
        return `${truncatedWords.join(" ")} ...`;
      }
      return sentence;
    }
  };
  return (
    <div className="card card-compact border border-accent p-5 rounded-lg gap-y-5 flex flex-col relative group duration-200">
      <div className="relative">
        <Image
          src={process.env.STRAPI_BASE_URL + thumbnail}
          loader={() => `${process.env.STRAPI_BASE_URL}${thumbnail}?w=500`}
          alt={title}
          className="h-52 object-cover border border-accent rounded-lg"
          width={500}
          height={208}
        />
        {openSource && (
          <Link
            href={openSource}
            target="_blank"
            className="bg-base-100 absolute top-0 left-0 pl-2 pt-2 pr-3 pb-3 border-l border-accent border-t rounded-tl-md rounded-br-[3rem]"
          >
            <FontAwesomeIcon icon={faGithub} className="text-lg text-accent" />
          </Link>
        )}
      </div>
      <div className="mb-auto">
        <h2 className="font-bold text-xl text-accent">{title}</h2>
        <p className="text-secondary-dark">{truncateText(desc, 20)}</p>
      </div>
      <div className="justify-start">
        <BacAccent title="Lihat Selengkapnya" url={href} />
      </div>
    </div>
  );
}
