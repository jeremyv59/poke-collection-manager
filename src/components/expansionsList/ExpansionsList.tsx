import React from "react";
import { ItemsContainer, ListTitle } from "./expansionsList_styled";
import ListItem from "./listItem/ListItem";
import { ExpansionType } from "../../constants/expansionsData";

type ListProps = {
  listTitle: string;
  data: ExpansionType[];
};

const ExpansionsList: React.FC<ListProps> = ({ listTitle, data }) => {
  return (
    <React.Fragment>
      <ListTitle>{listTitle}</ListTitle>
      <ItemsContainer data-testid="expansions-list">
        {data.map((expansion: ExpansionType) => {
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
