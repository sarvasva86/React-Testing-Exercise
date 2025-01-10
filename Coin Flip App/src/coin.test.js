import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  jest
    .spyOn(Math, "random")
    .mockReturnValueOnce(0.25) // Heads
    .mockReturnValueOnce(0.75); // Tails
});

afterEach(() => {
  Math.random.mockRestore();
});

test("Coin flip updates the counts correctly", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /flip coin/i });

  // First flip (Heads)
  fireEvent.click(button);
  expect(screen.getByText(/heads: 1/i)).toBeInTheDocument();
  expect(screen.getByText(/tails: 0/i)).toBeInTheDocument();

  // Second flip (Tails)
  fireEvent.click(button);
  expect(screen.getByText(/heads: 1/i)).toBeInTheDocument();
  expect(screen.getByText(/tails: 1/i)).toBeInTheDocument();
});
