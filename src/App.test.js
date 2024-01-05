import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Board from "./App";

describe("App", () => {
  it("should render a button", () => {
    render(<Board />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBeGreaterThan(0);
  });

  it("should render X when button is clicked", () => {
    render(<Board />);
    const button = screen.getAllByRole("button")[0];
    fireEvent.click(button);
    expect(button.textContent).toBe("X");
  });

  it("should render O when clicked again", () => {
    render(<Board />);
    const squares = screen.getAllByRole("button");
    fireEvent.click(squares[0]);
    fireEvent.click(squares[1]);
    expect(squares[1].textContent).toBe("O");
  });

  it("should display a value only when an empty square is clicked", () => {
    render(<Board />);
    const squares = screen.getAllByRole("button");
    fireEvent.click(squares[0]);
    fireEvent.click(squares[0]);
    expect(squares[0].textContent).toBe("X");
  });

  it("should calculate the winner", () => {
    render(<Board />);
    const winner = screen.getByText("Winner: X");
    const squares = screen.getAllByRole("button");
    fireEvent.click(squares[0]);
    fireEvent.click(squares[3]);
    fireEvent.click(squares[1]);
    fireEvent.click(squares[4]);
    fireEvent.click(squares[2]);
    expect(winner).toBeInTheDocument();
  });
});

