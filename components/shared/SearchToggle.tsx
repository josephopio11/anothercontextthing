"use client";

import { Button } from "@/components/ui/button";
import { useSearchStuff } from "../providers/search-provider";
import { Menu, Search, X } from "lucide-react";
import { useHotkeys } from "react-hotkeys-hook";

export function SearchToggle() {
  const { isOpen, toggleOpen, resetSearch, openSearch } = useSearchStuff();

  useHotkeys("esc", resetSearch);
  useHotkeys("/", openSearch);

  return (
    <div className="relative">
      <div className="absolute top-5 right-5 z-10 s">
        <Button
          variant={"ghost"}
          onClick={toggleOpen}
          className="outline-none focus:outline-none flex flex-row gap-2"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Search className="h-4 w-4" />}
          <span className="items-center justify-between gap-2 hidden sm:flex">
            <span className="">Search</span>
            <span className="border border-gray-500 px-3 py-1 rounded-md text-sm">
              /
            </span>
          </span>
        </Button>
      </div>
    </div>
  );
}
