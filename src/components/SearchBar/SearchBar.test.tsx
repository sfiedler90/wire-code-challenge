import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchBar } from "./SearchBar";

describe("Searchbar", () => {
  test("call onQueryChange on user input", () => {
    const mockOnQueryChange = jest.fn();
    render(
      <SearchBar onQueryChange={mockOnQueryChange} onSortByChange={jest.fn()} />
    );

    waitFor(() => {
      userEvent.type(
        screen.getByPlaceholderText("Type a Name or Owner"),
        "Sun"
      );
    });

    expect(mockOnQueryChange).toHaveBeenCalledWith("Sun");
  });

  test("call onSortByChange on dropdown click", () => {
    const mockOnSortByChange = jest.fn();
    render(
      <SearchBar
        onQueryChange={jest.fn()}
        onSortByChange={mockOnSortByChange}
      />
    );

    waitFor(() => {
      userEvent.click(screen.getByText("Sort by"));
      userEvent.click(screen.getByText("Name"));
    });

    expect(mockOnSortByChange).toHaveBeenCalledWith("NAME");
  });
});
