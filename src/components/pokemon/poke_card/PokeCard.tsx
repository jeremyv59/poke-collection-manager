import React from "react";
import {
  CardName,
  DescContainer,
  PokeCardContainer,
  PokeImg,
  PokeImgContainer,
  TextContainer,
} from "./pokecard_styled";
import { SmallText } from "../../../styles/GlobalStyles";

type PokeCardProps = {
  cardName: string;
  expansionName: string;
  imgUrl: string;
  addedDate: string;
};

const PokeCard: React.FC<PokeCardProps> = ({
  imgUrl,
  cardName,
  expansionName,
  addedDate,
}) => {
  return (
    <PokeCardContainer>
      <DescContainer>
        <PokeImgContainer>
          <PokeImg src={imgUrl}></PokeImg>
        </PokeImgContainer>
        <TextContainer>
          <CardName>{cardName}</CardName>
          <SmallText>{expansionName}</SmallText>
        </TextContainer>
      </DescContainer>
      <SmallText>{addedDate}</SmallText>
    </PokeCardContainer>
  );
};

export default PokeCard;
