"use client";
import React, { useState } from "react";
import { SearchToggle } from "./SearchToggle";
import { useSearchStuff } from "../providers/search-provider";
import Overlay from "./Overlay";
import { Input } from "../ui/input";

const Hero = () => {
  const { isOpen, resetSearch, toggleOpen } = useSearchStuff();
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  return (
    <>
      <SearchToggle />
      {isOpen && (
        <Overlay isOpen={isOpen} onClose={toggleOpen}>
          <p className="text-gray-100 text-sm mb-2">
            Search Powered by Joseph Opio
          </p>
          <Input
            type="text"
            value={"Something here and there for shizzle"}
            className="rounded-md w-full p-4 text-lg bg-gray-800 text-gray-100 border-2 border-teal-500 mb-8 focus:outline-none"
            placeholder="Search for an item"
            // autoFocus
          />

          {loading && (
            <p className="text-gray-100 text-center mt-8 text-xl">Loading</p>
          )}

          {!loading && posts.length < 1 && (
            <p className="text-gray-100 text-center mt-8 text-xl">
              Search for a quick reference
            </p>
          )}
        </Overlay>
      )}
    </>
  );
};
// https://youtu.be/n-q_knJOQMo?t=456
export default Hero;
