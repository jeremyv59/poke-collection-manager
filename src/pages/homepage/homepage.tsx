import {
  ContentContainer,
  DescContainer,
  Expansion,
  ExpansionImg,
  ExpansionName,
  HomepageLayout,
  ImageContainer,
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
import { HeadingText, SmallText } from "../../styles/GlobalStyles";
import { pokecardsData } from "../../constants/pokecardsData";
import PokeCard from "../../components/pokemon/poke_card/PokeCard";

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
            <SmallText fontSize={"0.875rem"} fontWeight={500}>
              06 avr 2023 at 14:18 PM
            </SmallText>
            <CustomBtn
              buttonSize="small"
              icon={<ArrowRightOutlined />}
              btnTitle="My collection"
              btnType="text"
            />
          </TotalCards>

          <HeadingText marginBottom={"1.5rem"}>
            Top expansions collected
          </HeadingText>
          {expansionsData.map((expansion) => {
            return (
              <Expansion key={expansion.id}>
                <DescContainer>
                  <ImageContainer>
                    <ExpansionImg src={expansion.image_url}></ExpansionImg>
                  </ImageContainer>
                  <ExpansionName>{expansion.expansionName}</ExpansionName>
                </DescContainer>
                <CustomBtn buttonSize="small" btnType="text" btnTitle="View" />
              </Expansion>
            );
          })}
          <HeadingText marginBottom={"1.5rem"}>
            Last added in collection
          </HeadingText>
          {pokecardsData.map((pokecard) => {
            return (
              <PokeCard
                imgUrl={pokecard.image_url}
                cardName={pokecard.pokeName}
                expansionName={pokecard.expansionName}
                addedDate="1hr ago"
              />
            );
          })}
        </ContentContainer>
      </RightContainer>
    </HomepageLayout>
  );
};

export default Homepage;
