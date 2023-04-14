import React from "react";
import {
  Container,
  IconContainer,
  OverviewItem,
  TextContainer,
} from "./overview_styled";
import { TbNumber } from "react-icons/tb";
import { HeadingText, SmallText } from "../../styles/GlobalStyles";
import { theme } from "../../styles/Theme";

const Overview = () => {
  return (
    <Container>
      <OverviewItem>
        <IconContainer color={theme.colors.purple}>
          <TbNumber color="white" size={40}></TbNumber>
        </IconContainer>

        <TextContainer>
          <SmallText fontSize={"1.125rem"} fontWeight={500}>
            Artboard
          </SmallText>
          <HeadingText fontSize={"2.25rem"} fontWeight={800}>
            900
          </HeadingText>
        </TextContainer>
      </OverviewItem>

      <OverviewItem>
        <IconContainer color={theme.colors.secondary.orange}>
          <TbNumber color="white" size={40}></TbNumber>
        </IconContainer>

        <TextContainer>
          <SmallText fontSize={"1.125rem"} fontWeight={500}>
            Auction
          </SmallText>
          <HeadingText fontSize={"2.25rem"} fontWeight={800}>
            932
          </HeadingText>
        </TextContainer>
      </OverviewItem>

      <OverviewItem>
        <IconContainer color={theme.colors.secondary.yellow}>
          <TbNumber color="white" size={40}></TbNumber>
        </IconContainer>

        <TextContainer>
          <SmallText fontSize={"1.125rem"} fontWeight={500}>
            Creators
          </SmallText>
          <HeadingText fontSize={"2.25rem"} fontWeight={800}>
            932
          </HeadingText>
        </TextContainer>
      </OverviewItem>

      <OverviewItem>
        <IconContainer color={theme.colors.secondary.lightBlue}>
          <TbNumber color="white" size={40}></TbNumber>
        </IconContainer>

        <TextContainer>
          <SmallText fontSize={"1.125rem"} fontWeight={500}>
            Canceled
          </SmallText>
          <HeadingText fontSize={"2.25rem"} fontWeight={800}>
            932
          </HeadingText>
        </TextContainer>
      </OverviewItem>
    </Container>
  );
};

export default Overview;
