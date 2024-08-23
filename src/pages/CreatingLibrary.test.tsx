import { render, screen } from "@testing-library/react";
import { CreatingLibrary } from "./CreatingLibrary";

test("displays page", async () => {
  render(<CreatingLibrary />);

  await screen.findByText(/On this page you can get more information/i);
});
