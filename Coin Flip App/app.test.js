import { render, screen } from "@testing-library/react";
import App from "./App";

test("No coin is displayed on initial load", () => {
  render(<App />);
  expect(screen.getByText(/no coin flipped yet/i)).toBeInTheDocument();
});
