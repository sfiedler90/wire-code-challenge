import { render, screen, waitFor } from "@testing-library/react";
import { Search } from "./Search";
import { useLibraryItems } from "../hooks/useLibraryItems";
import userEvent from "@testing-library/user-event";

jest.mock("../hooks/useLibraryItems");
const mockUseLibraryItems = jest.mocked(useLibraryItems);

const items = [
  {
    name: "Lib 1",
    owner: "Owner 1",
    rating: 1,
  },
];

test("displays ‘No entries’ if no items have been returned", async () => {
  mockUseLibraryItems.mockReturnValue([[], false]);
  render(<Search />);

  const textElement = await screen.findByText(
    /Unfortunately no entries were found/i
  );
  expect(textElement).toBeInTheDocument();
});

test("shows spinner while loading", async () => {
  mockUseLibraryItems.mockReturnValue([[], true]);
  render(<Search />);

  const textElement = await screen.findByText(/Loading sunny packages/i);
  expect(textElement).toBeInTheDocument();
});

test("shows library items", async () => {
  mockUseLibraryItems.mockReturnValue([items, false]);
  render(<Search />);

  const textElement = await screen.findByText(/Lib 1/i);
  expect(textElement).toBeInTheDocument();
});

test("call library api with search params", () => {
  mockUseLibraryItems.mockReturnValue([[], false]);
  render(<Search />);

  waitFor(() => {
    userEvent.type(screen.getByPlaceholderText("Type a Name or Owner"), "Sun");
  });

  expect(mockUseLibraryItems).toHaveBeenCalledWith("Sun", "NAME");
});
