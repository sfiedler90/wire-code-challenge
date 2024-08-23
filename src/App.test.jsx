import { render, screen } from "@testing-library/react";
import { App } from "./App";
import { MemoryRouter } from "react-router-dom";

test("renders header", async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const textElement = await screen.findByText(/Sanny Search/i);
  expect(textElement).toBeInTheDocument();
});

test("renders navbar link", async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const textElement = await screen.findByText(/Creating Package/i);
  expect(textElement).toBeInTheDocument();
});

test("renders footer", async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const textElement = await screen.findByText(
    /This page is for code challenge purposes only and is not intended to be representative content/i
  );
  expect(textElement).toBeInTheDocument();
});

test("renders create page", async () => {
  render(
    <MemoryRouter initialEntries={["/create"]}>
      <App />
    </MemoryRouter>
  );
  const textElement = await screen.findByText(
    /On this page you can get more information about how to create your own sunny library/i
  );
  expect(textElement).toBeInTheDocument();
});

test("renders a not found page", async () => {
  render(
    <MemoryRouter initialEntries={["/notFindable"]}>
      <App />
    </MemoryRouter>
  );
  const textElement = await screen.findByText(/This page is not available/i);
  expect(textElement).toBeInTheDocument();
});
