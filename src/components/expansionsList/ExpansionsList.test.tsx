import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ExpansionsList from "./ExpansionsList";
import { customRender } from "../../test/test-utils";

test("Show all elements of expansions list", () => {
  const expansionsData = [
    {
      id: 1,
      expansionName: "Scarlet & Violet",
      image_url:
        "https://static.tcgcollector.com/content/images/86/19/cc/8619cc107698efa178405c44b4d4c184235dab87ccfbb7728c382abe8f2a2516.png",
      releaseDate: "23/03/2023",
    },
    {
      id: 2,
      expansionName: "Crown & Zenith",
      image_url:
        "https://static.tcgcollector.com/content/images/8a/92/a9/8a92a9e08d6b813b3ffbd58f482ef3e4b1ad220dc581283ed6eb626f33fc71bd.png",
      releaseDate: "23/03/2023",
    },
  ];

  customRender(
    <ExpansionsList listTitle="ExpansionsList" data={expansionsData} />
  );

  for (let expansion of expansionsData) {
    const image = screen.getByRole("img", {
      name: `${expansion.expansionName}`,
    });

    const name = screen.getByRole("heading", {
      name: `${expansion.expansionName}`,
    });

    const date = screen.getByTestId(expansion.id);
    const button = screen.getByTestId(expansion.id);

    expect(image).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  }
});
