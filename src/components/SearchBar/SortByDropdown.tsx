import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap/";
import { LibrarySortParamType } from "../../api/LibraryAPI";

const SORT_DROPWDOWN_VALUES: [string, LibrarySortParamType][] = [
  ["Name", "NAME"],
  ["Rating", "RATING"],
  ["Owner", "OWNER"],
];

type SearchBarProps = {
  value?: LibrarySortParamType;
  onClick: (key: LibrarySortParamType) => void;
};

export const SortByDropdown: React.FC<SearchBarProps> = ({
  value,
  onClick,
}) => (
  <DropdownButton variant="secondary" title="Sort by" align="end">
    {SORT_DROPWDOWN_VALUES.map(([name, key]) => (
      <Dropdown.Item
        key={key}
        onClick={() => onClick(key)}
        active={value === key}
      >
        {name}
      </Dropdown.Item>
    ))}
  </DropdownButton>
);
