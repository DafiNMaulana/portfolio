import React from "react";

export default function IsDataFetched({isLoading, isError, data}) {
  return (
    <>
      {isLoading && <span className="loading loading-spinner loading-lg mx-auto col-span-3"></span>}
      {isError ? (
        <p className="text-center text-accent font-medium tracking-wide col-span-3">Whoops, there&apos;s something wrong 😅</p>
      ) : data.length == 0 && !isLoading ? (
        <p className="text-center text-accent font-medium tracking-wide col-span-3">Whoops, the data couldn&apos;t be found. 😅</p>
      ) : data.length == 0 && isError && !isLoading ? (
        <p className="text-center text-accent font-medium tracking-wide col-span-3">Whoops, the data couldn&apos;t be found. 😅</p>
      ) : null}
    </>
  );
}
