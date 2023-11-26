import React from "react";

export default function IsDataFetched({isLoading, isError, data}) {
  return (
    <>
      {isLoading && <span className="loading loading-spinner loading-lg mx-auto col-span-3"></span>}

      {!isLoading && isError && <p className="text-center text-accent font-medium tracking-wide col-span-3">Whoops, there's something wrong 😅</p>}

      {!isLoading && !isError && data.length === 0 && (
        <p className="text-center text-accent font-medium tracking-wide col-span-3">Whoops, the data couldn't be found. 😅</p>
      )}
    </>
  );
}
