import {
  ContentContainer,
  DateInfo,
  DescContainer,
  Expansion,
  ExpansionImg,
  ExpansionName,
  HomepageLayout,
  ImageContainer,
  ListContainer,
  ListTitle,
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

          <ListTitle>Top expansions collected</ListTitle>
          {/* <Expansion>
            <DescContainer>
              <ImageContainer>
                <ExpansionImg src="https://static.tcgcollector.com/content/images/e5/13/c2/e513c2ef554ec5cbbae930bc6f6471a028ca002b82b34e669c161af0bcfdd68a.png"></ExpansionImg>
              </ImageContainer>
              <ExpansionName>Pokemon GO</ExpansionName>
            </DescContainer>
            <CustomBtn btnType="text" btnTitle="View" />
          </Expansion>

          <Expansion>
            <DescContainer>
              <ImageContainer>
                <ExpansionImg src="https://static.tcgcollector.com/content/images/e5/13/c2/e513c2ef554ec5cbbae930bc6f6471a028ca002b82b34e669c161af0bcfdd68a.png"></ExpansionImg>
              </ImageContainer>
              <ExpansionName>Pokemon GO</ExpansionName>
            </DescContainer>
            <CustomBtn btnType="text" btnTitle="View" />
          </Expansion>

          <Expansion>
            <DescContainer>
              <ImageContainer>
                <ExpansionImg src="https://static.tcgcollector.com/content/images/e5/13/c2/e513c2ef554ec5cbbae930bc6f6471a028ca002b82b34e669c161af0bcfdd68a.png"></ExpansionImg>
              </ImageContainer>
              <ExpansionName>Pokemon GO</ExpansionName>
            </DescContainer>
            <CustomBtn btnType="text" btnTitle="View" />
          </Expansion> */}
          {expansionsData.map((expansion) => {
            return (
              <Expansion key={expansion.id}>
                <DescContainer>
                  <ImageContainer>
                    <ExpansionImg src={expansion.image_url}></ExpansionImg>
                  </ImageContainer>
                  <ExpansionName>{expansion.expansionName}</ExpansionName>
                </DescContainer>
                <CustomBtn btnType="text" btnTitle="View" />
              </Expansion>
            );
          })}
        </ContentContainer>
      </RightContainer>
    </HomepageLayout>
  );
};

export default Homepage;
