import App from "./App";
import React, { ReactDOM } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { waitFor } from "@testing-library/dom";

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
