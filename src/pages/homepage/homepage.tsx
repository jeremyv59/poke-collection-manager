import {
  HomepageLayout,
  MainCardContainer,
  MainContainer,
  RightContainer,
} from "./home_styled";
import Header from "../../components/header/Header";
import CustomCard from "../../components/card/CustomCard";

const Homepage = () => {
  return (
    <HomepageLayout>
      <Header />
      <MainContainer>
        <MainCardContainer>
          <CustomCard expansionTitle="Scarlet & Violet" />
        </MainCardContainer>
      </MainContainer>
      <RightContainer>Right Container</RightContainer>
    </HomepageLayout>
  );
};

export default Homepage;
