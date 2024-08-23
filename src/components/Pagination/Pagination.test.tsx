import { render, screen } from "@testing-library/react";
import { Pagination } from "./Pagination";
import userEvent from "@testing-library/user-event";

describe("Pagination", () => {
  test("renders number of buttons", () => {
    render(<Pagination active={1} number={3} onClick={() => {}} />);

    expect(screen.getByText(/1/i)).toBeInTheDocument();
    expect(screen.getByText(/2/i)).toBeInTheDocument();
    expect(screen.getByText(/3/i)).toBeInTheDocument();
    expect(screen.queryByText(/4/i)).toBeNull();
  });

  test("should fire onClick with index after click on page", () => {
    const mock = jest.fn();
    render(<Pagination active={1} number={3} onClick={mock} />);

    userEvent.click(screen.getByText(/1/i));
    expect(mock).toHaveBeenCalledWith(1);

    userEvent.click(screen.getByText(/2/i));
    expect(mock).toHaveBeenCalledWith(2);
  });

  test("should fire onClick with next index after click on 'Next'", () => {
    const mock = jest.fn();
    render(<Pagination active={2} number={3} onClick={mock} />);

    userEvent.click(screen.getByText(/Next/i));
    expect(mock).toHaveBeenCalledWith(3);
  });

  test("should fire onClick with last index after click on 'Last'", () => {
    const mock = jest.fn();
    render(<Pagination active={1} number={3} onClick={mock} />);

    userEvent.click(screen.getByText(/Last/i));
    expect(mock).toHaveBeenCalledWith(3);
  });

  test("should fire onClick with prev index after click on 'Previous'", () => {
    const mock = jest.fn();
    render(<Pagination active={3} number={3} onClick={mock} />);

    userEvent.click(screen.getByText(/Previous/i));
    expect(mock).toHaveBeenCalledWith(2);
  });

  test("should fire onClick with first index after click on 'First'", () => {
    const mock = jest.fn();
    render(<Pagination active={3} number={3} onClick={mock} />);

    userEvent.click(screen.getByText(/First/i));
    expect(mock).toHaveBeenCalledWith(1);
  });
});
