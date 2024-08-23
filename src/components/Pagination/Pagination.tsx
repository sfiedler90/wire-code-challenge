import React from "react";
import { Pagination as BootstrapPagination } from "react-bootstrap/";

type PaginationProps = {
  active: number;
  number: number;
  onClick: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
  active,
  number,
  onClick,
}) => {
  const items = [];

  for (let nr = 1; nr <= number; nr++) {
    items.push(
      <BootstrapPagination.Item
        key={nr}
        active={nr === active}
        onClick={() => onClick(nr)}
      >
        {nr}
      </BootstrapPagination.Item>
    );
  }

  return (
    <BootstrapPagination>
      <BootstrapPagination.First
        disabled={active === 1}
        onClick={() => onClick(1)}
      />
      <BootstrapPagination.Prev
        disabled={active === 1}
        onClick={() => onClick(Math.max(active - 1, 1))}
      />

      {items}

      <BootstrapPagination.Next
        disabled={active === number}
        onClick={() => onClick(Math.min(active + 1, number))}
      />
      <BootstrapPagination.Last
        disabled={active === number}
        onClick={() => onClick(number)}
      />
    </BootstrapPagination>
  );
};
