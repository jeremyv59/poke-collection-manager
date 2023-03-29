import { HomepageLayout, MainContainer, RightContainer } from "./home_styled";
import Header from "../../components/header/Header";

const Homepage = () => {
  return (
    <HomepageLayout>
      <Header />
      <MainContainer>Main Container</MainContainer>
      <RightContainer>Right Container</RightContainer>
    </HomepageLayout>
  );
};

export default Homepage;
