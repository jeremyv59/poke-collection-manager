import React from "react";
import { ItemsContainer, ListTitle } from "./expansionsList_styled";
import ListItem from "./listItem/ListItem";

type ListProps = {
  listTitle: string;
};

type ExpansionType = {
  id: number;
  expansionName: string;
  image_url: string;
  releaseDate: string;
};

// TODO : Replace by TCG API data
const expansionsData: ExpansionType[] = [
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
  {
    id: 3,
    expansionName: "Silver Tempest",
    image_url:
      "https://static.tcgcollector.com/content/images/61/7b/d5/617bd5847f64d03af86e2a12c135d1d199263f439f24745be4b11c9a61305972.png",
    releaseDate: "25/03/2023",
  },
  {
    id: 4,
    expansionName: "Lost Origin",
    image_url:
      "https://static.tcgcollector.com/content/images/96/af/98/96af98db04114bfa1543978fd65775864ca254d9aa043d3fcc50844a75845609.png",
    releaseDate: "23/03/2023",
  },
  {
    id: 5,
    expansionName: "Pokemon GO",
    image_url:
      "https://static.tcgcollector.com/content/images/e5/13/c2/e513c2ef554ec5cbbae930bc6f6471a028ca002b82b34e669c161af0bcfdd68a.png",
    releaseDate: "23/03/2023",
  },
  {
    id: 6,
    expansionName: "Astral Radiance",
    image_url:
      "https://static.tcgcollector.com/content/images/32/6c/0b/326c0bc3cc5e7f8595c619f44f76b5c5b1b7a15824a351fed1394d306a21a0d2.png",
    releaseDate: "23/03/2023",
  },
];

const ExpansionsList: React.FC<ListProps> = ({ listTitle }) => {
  return (
    <React.Fragment>
      <ListTitle>{listTitle}</ListTitle>
      <ItemsContainer data-testid="expansions-list">
        {expansionsData.map((expansion: ExpansionType) => {
          return (
            <ListItem
              key={expansion.id}
              expansionName={expansion.expansionName}
              imageSrc={expansion.image_url}
              releaseDate={expansion.releaseDate}
            ></ListItem>
          );
        })}
      </ItemsContainer>
    </React.Fragment>
  );
};

export default ExpansionsList;
