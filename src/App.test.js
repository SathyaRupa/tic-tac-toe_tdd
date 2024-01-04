import { render, fireEvent } from "@testing-library/react";

test("renders initial board", () => {
  const { getByText } = render(<Board />);

  expect(getByText(/Next player/i)).toBeInTheDocument();

  expect(getByText(/Go to game start/i)).toBeInTheDocument();
});

test("Uodates status when a move is made", () => {
  const { getByText } = render(<Board />);

  fireEvent.click(getByText(/Go to move #0/i));

  expect(getByText(/Next player: O/i)).toBeInTheDocument();
});

test("displays winner status", () => {
  const { getByText } = render(<Board />);

  fireEvent.click(getByText(/Go to move #0/i));
  fireEvent.click(getByText(/Go to move #1/i));
  fireEvent.click(getByText(/Go to move #3/i));
  fireEvent.click(getByText(/Go to move #2/i));
  fireEvent.click(getByText(/Go to move #6/i));

  expect(getByText(/Winner: X/i)).toBeInTheDocument();
});