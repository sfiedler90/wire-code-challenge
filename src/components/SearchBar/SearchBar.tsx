import React from "react";
import { Form, InputGroup } from "react-bootstrap/";
import { LibrarySortParamType } from "../../api/LibraryAPI";
import { SortByDropdown } from "./SortByDropdown";

import "./SearchBar.css";

type SearchBarProps = {
  onQueryChange: (query: string) => void;
  onSortByChange: (key: LibrarySortParamType) => void;
  sortBy?: LibrarySortParamType;
};

export const SearchBar: React.FC<SearchBarProps> = ({
  onQueryChange,
  onSortByChange,
  sortBy,
}) => (
  <div className="search-bar">
    <InputGroup className="mb-3">
      <Form.Control
        onChange={(event) => onQueryChange(event.target.value)}
        aria-label="Type a Name or Owner"
        placeholder="Type a Name or Owner"
      />
      <SortByDropdown value={sortBy} onClick={onSortByChange} />
    </InputGroup>
  </div>
);
