import App from "./App";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("rendering full app/navigating", () => {
  render(<App />);

  // Verify content of default page
  expect(screen.getByText(/Latest Expansions/i)).toBeInTheDocument();
  expect(screen.getByTestId("expansions-list")).toBeInTheDocument();

  // Verify page content after navigating
  userEvent.click(screen.getByText(/Cards/i));
  expect(screen.getByText(/Cards/i)).toBeInTheDocument();
});
