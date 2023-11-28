import React from "react";
import AncArrow from "@/components/AncArrow";
import ProjectCard from "@/components/ProjectCard";

export default function MappedProject({data, isInGridMode, filter, limited}) {
  const filteredProject = data.filter((project) => {
    return project.attributes.project_categories.data.some((category) => category.attributes.title === filter);
  });

  if (filteredProject.length == 0 && filter !== "All") {
    return <p className="text-center text-accent font-medium tracking-wide">Whoops, this project isn&apos;t uploaded yet 😅</p>;
  } else {
    const projectsToDisplay = filter === "All" ? data.slice(0, limited) : filteredProject;
    return projectsToDisplay.slice(0, limited).map((project) =>
      !isInGridMode ? (
        <AncArrow
          key={project.id}
          title={project.attributes.title}
          desc={project.attributes.description}
          tags={project.attributes.project_categories.data}
          href={project.attributes.production_url ? project.attributes.production_url : project.attributes.opensource_url}
          titleClassName={""}
        />
      ) : (
        <ProjectCard
          key={project.id}
          thumbnail={project?.attributes?.thumbnail?.data?.attributes.url}
          title={project.attributes.title}
          desc={project.attributes.description}
          href={project.attributes.production_url ? project.attributes.production_url : project.attributes.opensource_url}
          openSource={project.attributes.opensource_url ? project.attributes.opensource_url : null}
        />
      )
    );
  }
}
