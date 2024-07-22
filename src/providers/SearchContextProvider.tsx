'use client';

import { useContext, useState, createContext } from 'react';

type SearchContextType = {
  searchQuery: string;
  handleChangeSearchQuery: (searchQuery: string) => void;
};

const SearchContext = createContext<SearchContextType | null>(null);

export const SearchContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChangeSearchQuery = (searchQuery: string) => {
    // TODO: add validation
    setSearchQuery(searchQuery);
  };

  const value = {
    searchQuery,
    handleChangeSearchQuery,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error(
      'useSearchContext must be used within a SearchContextProvider'
    );
  }

  return context;
};
