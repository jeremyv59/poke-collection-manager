import React from "react";
import { HeadingText, PageLayout } from "../../styles/GlobalStyles";
import Header from "../../components/header/Header";
import { ContentContainer } from "../homepage/home_styled";
import Overview from "../../components/overview/Overview";

const Expansion = () => {
  return (
    <PageLayout data-testid="expansion-txt">
      <Header
        title="Expansions"
        subTitle="Welcome to expansions page"
        userName="Jérémy"
        userDesc="User"
      />

      <ContentContainer>
        <Overview></Overview>
        <HeadingText>All expansions</HeadingText>
      </ContentContainer>
    </PageLayout>
  );
};

export default Expansion;
