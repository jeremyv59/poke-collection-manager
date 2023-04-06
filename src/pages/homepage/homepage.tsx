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
import { expansionsData } from "../../constants/expansionsData";

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
      <RightContainer>Right Container</RightContainer>
    </HomepageLayout>
  );
};

export default Homepage;
