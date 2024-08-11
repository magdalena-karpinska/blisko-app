"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  // Lets you update the URL without a page reload
  const { replace } = useRouter();

  // Initial Search Term - what should appear in the search bar when the page loads, it checks
  // if the URL has already a query parameter and sets the initial search term to that value.
  const initialSearchTerm = searchParams.get("query") || "";
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  // When the search term changes, update the URL with the new query parameter.
  const handleSearch = useDebouncedCallback((term: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (term) {
      newParams.set("query", term);
    } else {
      newParams.delete("query");
    }
    replace(`${pathname}?${newParams.toString()}`);
  }, 300);
  return (
    <label className="input input-bordered flex items-center gap-2 w-full relative">
      <input
        type="text"
        value={searchTerm}
        className="grow pl-10"
        placeholder="Search"
        onChange={(e) => {
          handleSearch(e.target.value);
          setSearchTerm(e.target.value);
        }}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </label>
  );
}
