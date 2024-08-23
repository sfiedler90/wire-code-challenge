import React, { useState } from "react";
import { LibraryTable } from "../components/LibraryTable/LibraryTable";
import { useLibraryItems } from "../hooks/useLibraryItems";
import { LibrarySortParamType } from "../api/LibraryAPI";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { Spinner } from "../components/Spinner/Spinner";
import { Informer } from "../components/Informer/Informer";

export const Search: React.FC = () => {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<LibrarySortParamType>("NAME");
  const [libraryItems, isLoading] = useLibraryItems(query, sortBy);

  return (
    <div className="search-page">
      <h2>Search for a shiny Library</h2>
      <SearchBar
        onQueryChange={setQuery}
        onSortByChange={setSortBy}
        sortBy={sortBy}
      />

      <LibraryTable items={isLoading ? [] : libraryItems} />
      {isLoading && <Spinner text="Loading sunny packages" />}
      {!isLoading && libraryItems.length === 0 && (
        <Informer message="Unfortunately no entries were found" />
      )}
    </div>
  );
};
