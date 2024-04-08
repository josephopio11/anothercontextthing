"use client";

import { ReactNode, createContext, useContext, useState } from "react";

export const SearchContext = createContext({
  isOpen: false,
  toggleOpen: () => {},
  resetSearch: () => {},
  openSearch: () => {},
});

type Props = {
  children?: ReactNode;
};

export const SearchContextProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const resetSearch = () => setIsOpen(false);
  const openSearch = () => setIsOpen(true);

  return (
    <SearchContext.Provider
      value={{ isOpen, toggleOpen, resetSearch, openSearch }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchStuff = () => useContext(SearchContext);
