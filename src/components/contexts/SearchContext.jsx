import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setSearchResult(null);
      setNotFound(false);
      return;
    }

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
      if (!response.ok) throw new Error("Not found");

      const data = await response.json();
      setSearchResult(data);
      setNotFound(false);
    } catch (error) {
      console.log("An error occured:", error);  
      setSearchResult(null);
      setNotFound(true);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSearchResult(null);
    setNotFound(false);
  };

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        searchResult,
        notFound,
        handleSearch,
        handleInputChange,
        clearSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

// Custom hook
export const useSearch = () => useContext(SearchContext);
