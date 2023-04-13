import {
  CardName,
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
  PokeCard,
  PokeImg,
  PokeImgContainer,
  RightContainer,
  TextContainer,
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
                <CustomBtn btnType="text" btnTitle="View" />
              </Expansion>
            );
          })}
          <HeadingText marginBottom={"1.5rem"}>
            Last added in collection
          </HeadingText>
          <PokeCard>
            <DescContainer>
              <PokeImgContainer>
                <PokeImg src="https://static.tcgcollector.com/content/images/0f/92/b3/0f92b3895160814220958def7b08276a88204f1bd55e0f34e0e89355bded0273.jpg"></PokeImg>
              </PokeImgContainer>
              <TextContainer>
                <CardName>Sulfura de galar</CardName>
                <SmallText>Crown & Zenith</SmallText>
              </TextContainer>
            </DescContainer>
            <SmallText>Just now</SmallText>
          </PokeCard>

          <PokeCard>
            <DescContainer>
              <PokeImgContainer>
                <PokeImg src="https://static.tcgcollector.com/content/images/0f/92/b3/0f92b3895160814220958def7b08276a88204f1bd55e0f34e0e89355bded0273.jpg"></PokeImg>
              </PokeImgContainer>
              <TextContainer>
                <CardName>Sulfura de galar</CardName>
                <SmallText>Crown & Zenith</SmallText>
              </TextContainer>
            </DescContainer>
            <SmallText>1hr ago</SmallText>
          </PokeCard>

          <PokeCard>
            <DescContainer>
              <PokeImgContainer>
                <PokeImg src="https://static.tcgcollector.com/content/images/0f/92/b3/0f92b3895160814220958def7b08276a88204f1bd55e0f34e0e89355bded0273.jpg"></PokeImg>
              </PokeImgContainer>
              <TextContainer>
                <CardName>Sulfura de galar</CardName>
                <SmallText>Crown & Zenith</SmallText>
              </TextContainer>
            </DescContainer>
            <SmallText>2hr ago</SmallText>
          </PokeCard>

          <PokeCard>
            <DescContainer>
              <PokeImgContainer>
                <PokeImg src="https://static.tcgcollector.com/content/images/0f/92/b3/0f92b3895160814220958def7b08276a88204f1bd55e0f34e0e89355bded0273.jpg"></PokeImg>
              </PokeImgContainer>
              <TextContainer>
                <CardName>Sulfura de galar</CardName>
                <SmallText>Crown & Zenith</SmallText>
              </TextContainer>
            </DescContainer>
            <SmallText>3hr ago</SmallText>
          </PokeCard>

          <PokeCard>
            <DescContainer>
              <PokeImgContainer>
                <PokeImg src="https://static.tcgcollector.com/content/images/0f/92/b3/0f92b3895160814220958def7b08276a88204f1bd55e0f34e0e89355bded0273.jpg"></PokeImg>
              </PokeImgContainer>
              <TextContainer>
                <CardName>Sulfura de galar</CardName>
                <SmallText>Crown & Zenith</SmallText>
              </TextContainer>
            </DescContainer>
            <SmallText>4hr ago</SmallText>
          </PokeCard>
        </ContentContainer>
      </RightContainer>
    </HomepageLayout>
  );
};

export default Homepage;
