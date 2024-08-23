import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SortByDropdown } from "./SortByDropdown";

describe("SortByDropwdown", () => {
  test("show dropdown values", () => {
    const mock = jest.fn();
    render(<SortByDropdown onClick={mock} />);

    waitFor(() => {
      userEvent.click(screen.getByText("Sort by"));
    });

    expect(screen.getByText(/Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Rating/i)).toBeInTheDocument();
    expect(screen.getByText(/Owner/i)).toBeInTheDocument();
  });

  test("call onClick after click on dropdown value", () => {
    const mock = jest.fn();
    render(<SortByDropdown onClick={mock} />);

    userEvent.click(screen.getByText("Sort by"));

    waitFor(() => {
      userEvent.click(screen.getByText("Rating"));
    });

    expect(mock).toHaveBeenCalledWith("RATING");
  });

  test("show active dropdown value", () => {
    const mock = jest.fn();
    render(<SortByDropdown value="RATING" onClick={mock} />);

    userEvent.click(screen.getByText("Sort by"));

    expect(screen.getByText("Rating")).toHaveClass("active");
  });
});
