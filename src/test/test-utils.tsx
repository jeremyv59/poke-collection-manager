import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme";
import { RenderOptions, render } from "@testing-library/react";
import { ReactElement } from "react";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });
