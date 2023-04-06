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
    padding-top: 100px;
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

export const ListContainer = styled.div`
  margin: 0.5rem;

  @media ${device.tablet} {
    margin: 1rem;
  }
`;

export const RightContainer = styled.div`
  background: ${({ theme }) => theme.colors.dark};
  width: 100%;

  @media ${device.tablet} {
    width: 30%;
    padding-top: 100px;
  }
`;

export const ContentContainer = styled.div`
  padding: 0rem 2rem;
  margin-top: 1rem;
`;

export const TotalCards = styled.div`
  background: ${({ theme }) => theme.colors.darkSecondary};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 1.875rem;
  padding: 1.875rem 0rem;

  .ant-btn {
    display: flex;
    background: brown;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    flex-direction: row-reverse;
    background-color: #5464f7;
    color: white;
  }
`;

export const TotalTitle = styled.h6`
  font-size: 1rem;
  color: white;
  font-weight: 500;
`;

export const TotalCount = styled.h6`
  color: ${({ theme }) => theme.colors.purple};
  font-weight: 700;
  font-size: 2.75rem;
  line-height: 60px;
`;

export const DateInfo = styled.small`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 500;
  font-size: 0.875rem;
  margin-bottom: 1.25rem;
`;
