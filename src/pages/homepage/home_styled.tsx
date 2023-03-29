import styled from "styled-components";
import { Layout } from "antd";
import { device } from "../../styles/Breakpoints";

export const HomepageLayout = styled(Layout)`
  min-height: 100vh;
  width: 90%;
  background: red;

  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
  }
`;

export const MainContainer = styled.div`
  background: green;
  width: 100%;

  @media ${device.tablet} {
    width: 70%;
  }
`;

export const RightContainer = styled.div`
  background: yellow;
  width: 100%;

  @media ${device.tablet} {
    width: 30%;
  }
`;
