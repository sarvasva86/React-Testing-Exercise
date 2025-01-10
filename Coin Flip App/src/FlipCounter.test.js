test("Coin image updates on flip", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /flip coin/i });

  // First flip (Heads)
  fireEvent.click(button);
  const coinImage = screen.getByAltText(/coin showing heads/i);
  expect(coinImage).toBeInTheDocument();

  // Second flip (Tails)
  fireEvent.click(button);
  expect(screen.getByAltText(/coin showing tails/i)).toBeInTheDocument();
});
