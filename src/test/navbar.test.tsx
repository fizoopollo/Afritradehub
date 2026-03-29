import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { describe, it, expect } from "vitest";

describe("Navbar", () => {
  it("renders the AfriTradeHub logo text", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByText("Afri")).toBeInTheDocument();
    expect(screen.getByText("TradeHub")).toBeInTheDocument();
  });

  it("renders the primary navigation links", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByText("Pricing")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });
});
