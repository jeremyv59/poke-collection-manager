import App from "./App";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "@testing-library/react";

test("rendering full app/navigating", async () => {
  await act(async () => {
    render(<App />);
  });

  expect(screen.getByText("Latest expansions")).toBeInTheDocument();
  expect(screen.getByTestId("expansions-list")).toBeInTheDocument();

  await act(async () => {
    userEvent.click(screen.getByText(/Marketplace/i));
  });
  expect(screen.getByTestId("marketplace-txt")).toBeInTheDocument();
});
