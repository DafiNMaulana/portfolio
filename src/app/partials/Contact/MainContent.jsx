"use client";

// component
import IsDataFetched from "@/components/IsDataFetched";

// icons
import AncArrow from "@/components/AncArrow";

// lib
import useFetcher from "@/lib/useFetcher";

export default function MainContent() {
  const {data, isError, isLoading} = useFetcher({
    endpoint: "/api/contacts",
  });

  return (
    <div className="w-full md:w-[60%] flex flex-col gap-5">
      <IsDataFetched data={data} isError={isError} isLoading={isLoading} />
      {data.map((contact) => (
        <AncArrow
          key={contact.id}
          title={contact.attributes.name}
          href={contact.attributes.url}
          titleClassName={"translate-y-2"}
        />
      ))}
    </div>
  );
}
