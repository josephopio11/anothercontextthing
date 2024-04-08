"use client";
import React from "react";
import { SearchToggle } from "./SearchToggle";
import { useSearchStuff } from "../providers/search-provider";
import Overlay from "./Overlay";

const Hero = () => {
  const { isOpen, resetSearch, toggleOpen } = useSearchStuff();

  return (
    <>
      <SearchToggle />
      {isOpen && (
        <Overlay isOpen={isOpen} onClose={toggleOpen}>
          <div></div>
          This thing is open
        </Overlay>
      )}
    </>
  );
};

export default Hero;
