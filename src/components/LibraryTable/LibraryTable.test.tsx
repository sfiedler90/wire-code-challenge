import { render, screen } from "@testing-library/react";
import { LibraryTable } from "./LibraryTable";

const items = Array.from({ length: 15 }).map((item, index) => {
  const nr = index + 1;
  return {
    name: `Lib ${nr}`,
    owner: `Owner ${nr}`,
    rating: 3,
  };
});

test("displays 5 items per page", () => {
  render(<LibraryTable items={items} />);

  expect(screen.getByText(/Lib 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Lib 2/i)).toBeInTheDocument();
  expect(screen.getByText(/Lib 3/i)).toBeInTheDocument();
  expect(screen.getByText(/Lib 4/i)).toBeInTheDocument();
  expect(screen.getByText(/Lib 5/i)).toBeInTheDocument();
  expect(screen.queryByText(/Lib 6/i)).toBeNull();
});

test("shows pagination", () => {
  render(<LibraryTable items={items} />);

  expect(screen.getAllByRole("button")[0]).toHaveTextContent("2");
  expect(screen.getAllByRole("button")[1]).toHaveTextContent("3");
  expect(screen.getAllByRole("button")[2]).toHaveTextContent("Next");
});
