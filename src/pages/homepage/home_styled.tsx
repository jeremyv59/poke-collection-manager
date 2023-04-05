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
  background: ${({ theme }) => theme.colors.darkSecondary};
  width: 100%;

  @media ${device.tablet} {
    width: 70%;
    padding-top: 120px;
  }
`;

export const MainCardContainer = styled.div`
  margin: 0.5rem;
  background: ${({ theme }) => theme.colors.dark};
  border-radius: 0.5rem;

  @media ${device.tablet} {
    margin: 1rem;
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
