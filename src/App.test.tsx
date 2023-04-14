import App from "./App";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/react";
import user from "@testing-library/user-event";

describe("rendering full app/navigating", () => {
  render(<App />);

  test("Show default content", async () => {
    expect(
      screen.getByRole("heading", { name: /latest expansions/i })
    ).toBeInTheDocument();

    expect(screen.getByTestId("expansions-list")).toBeInTheDocument();

    const navItem = screen.getByRole("menuitem", {
      name: /marketplace/i,
    });

    // eslint-disable-next-line testing-library/no-wait-for-side-effects
    await waitFor(() => user.click(navItem));

    const pageTitle = await screen.findByTestId("marketplace-txt");
    expect(pageTitle).toBeInTheDocument();
  });
});
