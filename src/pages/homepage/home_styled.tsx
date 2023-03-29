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

export const CustomHeader = styled.span`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: center;
  color: white;
  background: ${({ theme }) => theme.colors.darkSecondary};

  @media ${device.tablet} {
    position: absolute;
    padding: 0;
    margin: auto;
    left: 0;
    right: 0;
    top: 2rem;
    width: 97%;
  }

  h1 {
    background: yellow;
    font-size: 250%;
    font-weight: 600;
    line-height: 40px;
  }

  text {
    background: green;
    font-size: 112.5%;
    color: ${({ theme }) => theme.colors.gray};
    line-height: 25px;
  }
`;

export const MainContainer = styled.div`
  background: ${({ theme }) => theme.colors.darkSecondary};
  width: 100%;

  @media ${device.tablet} {
    width: 70%;
    padding-top: 150px;
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
