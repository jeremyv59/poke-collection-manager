import styled from "styled-components";
import { Layout } from "antd";
import { device } from "../../styles/Breakpoints";

export const HomepageLayout = styled(Layout)`
  min-height: 100vh;
  width: 90%;
  background: red;
  position: relative;

  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
  }
`;

export const CustomHeader = styled(Layout.Header)`
  margin-top: 1.6rem;
  display: flex;
  background: blue;
  width: 95%;
  align-self: center;

  @media ${device.tablet} {
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 2rem;
  }
`;

export const MainContainer = styled.div`
  background: green;
  width: 100%;

  @media ${device.tablet} {
    width: 70%;
    padding-top: 150px;
  }
`;

export const RightContainer = styled.div`
  background: yellow;
  width: 100%;

  @media ${device.tablet} {
    width: 30%;
    padding-top: 150px;
  }
`;
