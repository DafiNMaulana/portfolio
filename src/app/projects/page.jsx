"use client";

// react
import {useState} from "react";

// partials
import BtnListFilter from "../partials/Projects/BtnListFilter";

// component
import IsDataFetched from "@/components/IsDataFetched";
import MappedProject from "../partials/Projects/MappedProject";
import Container from "@/components/Container";
import BoutlineAccent from "@/components/BoutlineAccent";

// fontawesome
import {faMedapps} from "@fortawesome/free-brands-svg-icons";
import {faFilter, faGripHorizontal, faBarsStaggered, faCode, faLaptopCode} from "@fortawesome/free-solid-svg-icons";

// lib
import useFetcher from "@/lib/useFetcher";

export default function Page() {
  const [gridMode, setGridMode] = useState(false);
  const [filter, setFilter] = useState("All");
  const {data, isError, isLoading} = useFetcher({
    endpoint: "/api/projects?populate=*",
  });
  const toggleGridMode = () => {
    setGridMode(!gridMode);
  };
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
    <Container className={"pt-28"}>
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
        {data.length > 0 && <MappedProject data={data} isInGridMode={gridMode} filter={filtered()} />}
      </div>
    </Container>
  );
}
