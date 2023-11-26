"use client";
import {useState} from "react";

// partials
import MappedProject from "./MappedProject";
import BtnListFilter from "./BtnListFilter";

// components
import BoutlineAccent from "@/components/BoutlineAccent";
import IsDataFetched from "@/components/IsDataFetched";

// fontawesome
import {faMedapps} from "@fortawesome/free-brands-svg-icons";
import {faFilter, faGripHorizontal, faBarsStaggered, faCode, faLaptopCode} from "@fortawesome/free-solid-svg-icons";

// lib
import useFetcher from "@/lib/useFetcher";
import BacOutlineAccent from "@/components/BacOutlineAccent";

export default function MainContent({filteredOnPage = ""}) {
  const [gridMode, setGridMode] = useState(false);
  const [filter, setFilter] = useState("All");
  const toggleGridMode = () => {
    setGridMode(!gridMode);
  };

  const {data, isError, isLoading} = useFetcher({
    endpoint: "/api/projects?populate=*",
  });

  const filtered = () => {
    if (window.location.pathname.includes("/fullstack-web-development")) {
      return filteredOnPage;
    } else if (window.location.pathname.includes("/ui-ux-design")) {
      return filteredOnPage;
    } else {
      return filter;
    }
  };
  return (
    <>
      <div className="w-full flex flex-row justify-between flex-nowrap">
        <div className="dropdown">
          <BoutlineAccent content={filter} className={"mt-8 sm:px-8"} icon={faFilter} faClassName={"w-4"} />
          <ul tabIndex={0} className="dropdown-content z-[20] menu p-2 shadow bg-base-100 rounded-md w-64 border border-accent translate-y-3">
            <BtnListFilter onClick={() => setFilter("All")} title={"All"} icon={faFilter} />
            <BtnListFilter onClick={() => setFilter("Frontend Development")} title={"Frontend Development"} icon={faCode} />
            <BtnListFilter onClick={() => setFilter("Fullstack Web Development")} title={"Fullstack Web Development"} icon={faLaptopCode} />
            <BtnListFilter onClick={() => setFilter("UI/UX Design")} title={"UI/UX Design"} icon={faMedapps} />
          </ul>
        </div>

        <BoutlineAccent className={"mt-8"} icon={gridMode ? faBarsStaggered : faGripHorizontal} faClassName={"w-4"} onClick={toggleGridMode} />
      </div>

      <div
        className={`w-full ${
          gridMode == true ? "grid" : "flex"
        } grid-cols-1 sm:grid-cols-2 flex-col xl:grid-cols-3 xl:gap-[73px] gap-[20px] lg:gap-[50px] mt-[73px]`}
      >
        <IsDataFetched data={data} isError={isError} isLoading={isLoading} />
        {data.length > 0 && <MappedProject data={data} isInGridMode={gridMode} filter={filter} limited={5} />}

        {data.length > 0 && (
          <div className="text-center col-span-3">
            <BacOutlineAccent content={"View More Projects"} className={"mt-8"} icon={faMedapps} faClassName={"w-4"} href={"/projects"} />
          </div>
        )}
      </div>
    </>
  );
}
