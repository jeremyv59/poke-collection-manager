import {
  HomepageLayout,
  ListContainer,
  MainCardContainer,
  MainContainer,
  RightContainer,
} from "./home_styled";
import Header from "../../components/header/Header";
import CustomCard from "../../components/card/CustomCard";
import ExpansionsList from "../../components/expansionsList/ExpansionsList";

const Homepage = () => {
  return (
    <HomepageLayout>
      <Header />
      <MainContainer>
        <MainCardContainer>
          <CustomCard expansionTitle="Scarlet & Violet" />
        </MainCardContainer>
        <ListContainer>
          <ExpansionsList listTitle="Latest expansions" />
        </ListContainer>
      </MainContainer>
      <RightContainer>Right Container</RightContainer>
    </HomepageLayout>
  );
};

export default Homepage;
