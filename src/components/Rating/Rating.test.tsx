import { render, screen } from "@testing-library/react";
import { Rating } from "./Rating";

describe("Rating", () => {
  test("renders", () => {
    render(<Rating rating={2} />);

    expect(screen.getAllByTestId("rating-rated").length).toBe(2);
    expect(screen.getAllByTestId("rating-unrated").length).toBe(3);
  });
});
