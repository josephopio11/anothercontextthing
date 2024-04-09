"use client";
import React, { useState } from "react";
import { SearchToggle } from "./SearchToggle";
import { useSearchStuff } from "../providers/search-provider";
import Overlay from "./Overlay";
import { Input } from "../ui/input";
import Link from "next/link";
import { Button } from "../ui/button";

const Hero = () => {
  const { isOpen, resetSearch, toggleOpen } = useSearchStuff();
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  return (
    <>
      <SearchToggle />
      {isOpen && (
        <Overlay isOpen={isOpen} onClose={toggleOpen}>
          <p className="dark:text-gray-100 text-gray-600 text-sm mb-2">
            Search Powered by Joseph Opio
          </p>
          <Input
            type="text"
            value={"Something here and there for shizzle"}
            className="rounded-md w-full p-4 text-lg bg-gray-100  dark:bg-gray-800 dark:text-gray-100 text-gray-600 border-2 border-teal-300 dark:border-teal-500 mb-8 focus:outline-none"
            placeholder="Search for an item"
            // autoFocus
          />

          {loading && (
            <p className="dark:text-gray-100 text-gray-700  text-center mt-8 text-xl">
              Loading
            </p>
          )}

          {!loading && posts.length < 1 && (
            <p className="dark:text-gray-100 text-gray-700  text-center mt-8 text-sm">
              Type in at least 3 letter to start your search...
            </p>
          )}
          <div className="h-full overflow-y-scroll">
            {!loading && posts.length > 0 && (
              <div className="grow flex flex-col gap-y-4 p-8 pb-20 items-stretch">
                {posts.map((post, index) => (
                  <Link
                    href={`${index}`}
                    key={index}
                    className="py-6 px-4 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-950 border-2 border-gray-200 rounded-lg shadow hover:scale-[1.01] hover:border-teal-500 cursor-pointer transition-all duration-300 ease-in-out relative block"
                  >
                    <h2 className="text-2xl font-bold tracking-tight">
                      This is the title {index + 1}
                    </h2>
                    <p className="font-normal text-sm text-gray-600 dark:text-gray-300">
                      Here is the description
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div>THe mistery of its origins</div>
        </Overlay>
      )}
    </>
  );
};

export default Hero;
