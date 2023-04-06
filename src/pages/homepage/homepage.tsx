import {
  ContentContainer,
  DateInfo,
  HomepageLayout,
  ListContainer,
  MainCardContainer,
  MainContainer,
  RightContainer,
  TotalCards,
  TotalCount,
  TotalTitle,
} from "./home_styled";
import Header from "../../components/header/Header";
import CustomCard from "../../components/card/CustomCard";
import ExpansionsList from "../../components/expansionsList/ExpansionsList";
import { expansionsData } from "../../constants/expansionsData";
import CustomBtn from "../../components/button/CustomBtn";
import { ArrowRightOutlined } from "@ant-design/icons";

const Homepage = () => {
  return (
    <HomepageLayout>
      <Header />
      <MainContainer>
        <MainCardContainer data-testid="main-card">
          <CustomCard expansionTitle="Scarlet & Violet" />
        </MainCardContainer>
        <ListContainer>
          <ExpansionsList listTitle="Latest expansions" data={expansionsData} />
        </ListContainer>
      </MainContainer>
      <RightContainer>
        <ContentContainer>
          <TotalCards>
            <TotalTitle>Your total of cards :</TotalTitle>
            <TotalCount>3875</TotalCount>
            <DateInfo>06 avr 2023 at 14:18 PM</DateInfo>
            <CustomBtn
              icon={<ArrowRightOutlined />}
              btnTitle="My collection"
              btnType="text"
            />
          </TotalCards>
        </ContentContainer>
      </RightContainer>
    </HomepageLayout>
  );
};

export default Homepage;
