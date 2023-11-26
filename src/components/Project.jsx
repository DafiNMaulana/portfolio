import React from "react";
import AncArrow from "./AncArrow";
import ProjectCard from "./ProjectCard";

export default function Project({isInGridMode, title, tags, href, desc, thumbnail}) {
  !isInGridMode ? (
    <AncArrow title={title} desc={desc} tags={tags} href={href} titleClassName={""} />
  ) : (
    <ProjectCard thumbnail={thumbnail} title={title} desc={desc} href={href} />
  );
}
