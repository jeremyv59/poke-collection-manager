import styled from "styled-components";
import { Layout } from "antd";
import { device } from "../../styles/Breakpoints";

export const HomepageLayout = styled(Layout)`
  min-height: 100vh;
  width: 90%;
  position: relative;

  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
  }
`;

export const MainContainer = styled.div`
  // background: ${({ theme }) => theme.colors.darkSecondary};
  background: red;
  width: 100%;

  @media ${device.tablet} {
    width: 70%;
    padding-top: 150px;
  }
`;

export const MainCardContainer = styled.div`
  background: yellow;
  margin: 0rem 0.2rem;

  @media ${device.tablet} {
    margin: 0rem 1.875rem;
  }
`;

export const RightContainer = styled.div`
  background: ${({ theme }) => theme.colors.dark};
  width: 100%;

  @media ${device.tablet} {
    width: 30%;
    padding-top: 150px;
  }
`;
