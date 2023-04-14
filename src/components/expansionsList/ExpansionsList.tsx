import React from "react";
import { ItemsContainer } from "./expansionsList_styled";
import ListItem from "./listItem/ListItem";
import { ExpansionType } from "../../constants/expansionsData";
import { HeadingText } from "../../styles/GlobalStyles";

type ListProps = {
  listTitle: string;
  data: ExpansionType[];
};

const ExpansionsList: React.FC<ListProps> = ({ listTitle, data }) => {
  return (
    <React.Fragment>
      <HeadingText>{listTitle}</HeadingText>
      <ItemsContainer data-testid="expansions-list">
        {data.map((expansion: ExpansionType) => {
          return (
            <ListItem
              key={expansion.id}
              id={expansion.id}
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
