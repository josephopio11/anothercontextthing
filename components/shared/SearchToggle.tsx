"use client";

import { Button } from "@/components/ui/button";
import { useSearchStuff } from "../providers/search-provider";
import { Menu, X } from "lucide-react";
import { useHotkeys } from "react-hotkeys-hook";

export function SearchToggle() {
  const { isOpen, toggleOpen, resetSearch, openSearch } = useSearchStuff();

  useHotkeys("esc", resetSearch);
  useHotkeys("/", openSearch);

  return (
    <div className="relative">
      <div className="absolute top-5 right-5 z-10 s">
        <Button variant={"outline"} onClick={toggleOpen}>
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>
    </div>
  );
}
