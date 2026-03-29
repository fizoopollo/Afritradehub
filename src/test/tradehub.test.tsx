import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TradehubDirectory from "../pages/TradehubDirectory";
import { describe, it, expect, vi } from "vitest";

// Mock framer-motion to avoid issues in test environment
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

describe("TradehubDirectory", () => {
  it("renders the directory with all companies initially", () => {
    render(
      <BrowserRouter>
        <TradehubDirectory />
      </BrowserRouter>
    );
    // There are 6 companies in mockCompanies
    expect(screen.getByText(/companies found/i)).toHaveTextContent("6 companies found");
  });

  it("filters companies by search query", () => {
    render(
      <BrowserRouter>
        <TradehubDirectory />
      </BrowserRouter>
    );
    const searchInput = screen.getByPlaceholderText(/Search companies, products, or industries/i);
    fireEvent.change(searchInput, { target: { value: "Lagos" } });

    expect(screen.getByText(/companies found/i)).toHaveTextContent("1 companies found");
    expect(screen.getByText("Lagos Textiles Co.")).toBeInTheDocument();
  });

  it("filters companies by industry", () => {
    render(
      <BrowserRouter>
        <TradehubDirectory />
      </BrowserRouter>
    );
    const industrySelect = screen.getByLabelText(/Industry/i);
    fireEvent.change(industrySelect, { target: { value: "Agriculture" } });

    expect(screen.getByText(/companies found/i)).toHaveTextContent("1 companies found");
    expect(screen.getByText("GhanaGreen Exports")).toBeInTheDocument();
  });

  it("filters companies by country", () => {
    render(
      <BrowserRouter>
        <TradehubDirectory />
      </BrowserRouter>
    );
    const countrySelect = screen.getByLabelText(/Country/i);
    fireEvent.change(countrySelect, { target: { value: "Kenya" } });

    expect(screen.getByText(/companies found/i)).toHaveTextContent("1 companies found");
    expect(screen.getByText("Nairobi Solar Solutions")).toBeInTheDocument();
  });

  it("filters companies by verified status", () => {
    render(
      <BrowserRouter>
        <TradehubDirectory />
      </BrowserRouter>
    );
    const verifiedCheckbox = screen.getByLabelText(/Verified only/i);
    fireEvent.click(verifiedCheckbox);

    // 5 out of 6 companies are verified
    expect(screen.getByText(/companies found/i)).toHaveTextContent("5 companies found");
    expect(screen.queryByText("Addis Construction Materials")).not.toBeInTheDocument();
  });

  it("filters companies by premium status", () => {
    render(
      <BrowserRouter>
        <TradehubDirectory />
      </BrowserRouter>
    );
    const premiumCheckbox = screen.getByLabelText(/Premium suppliers/i);
    fireEvent.click(premiumCheckbox);

    // 3 out of 6 companies are premium
    expect(screen.getByText(/companies found/i)).toHaveTextContent("3 companies found");
    expect(screen.getByText("Lagos Textiles Co.")).toBeInTheDocument();
    expect(screen.getByText("GhanaGreen Exports")).toBeInTheDocument();
    expect(screen.getByText("Cairo Food Processing")).toBeInTheDocument();
  });
});
