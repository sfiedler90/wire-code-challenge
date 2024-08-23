import { render, screen, waitFor } from "@testing-library/react";
import { Informer } from "./Informer";

describe("Informer", () => {
  test("render message", () => {
    render(<Informer message="Test message" />);

    const textElement = screen.getByText(/Test message/i);
    expect(textElement).toBeInTheDocument();
  });

  test("render image", () => {
    render(<Informer message="" />);

    const imageElement = screen.getByAltText(/cloudy sun/i);
    expect(imageElement).toBeInTheDocument();
  });
});
