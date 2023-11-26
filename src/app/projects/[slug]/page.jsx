"use client";

// react
import {useState} from "react";


// component
import IsDataFetched from "@/components/IsDataFetched";
import MappedProject from "../../partials/Projects/MappedProject";
import Container from "@/components/Container";
import BoutlineAccent from "@/components/BoutlineAccent";

// fontawesome
import {faGripHorizontal, faBarsStaggered} from "@fortawesome/free-solid-svg-icons";

// lib
import UseFetcher from "@/lib/useFetcher";

export default function Page() {
  const [gridMode, setGridMode] = useState(false);
  const {data, isError, isLoading} = UseFetcher({
    endpoint: "/api/projects?populate=*",
  });
  const toggleGridMode = () => {
    setGridMode(!gridMode);
  };

  const filtered = () => {
    if (window.location.pathname.includes("/fullstack-web-development")) {
      return "Fullstack Web Development";
    } else if (window.location.pathname.includes("/ui-ux-design")) {
      return "UI/UX Design";
    } else {
      window.location.href = '/projects'
    }
  }
  return (
    <Container className={"pt-28"}>
      <div className="w-full flex flex-row justify-between flex-nowrap">
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
