import styled from "styled-components";
import { Layout } from "antd";
import { device } from "../../styles/Breakpoints";
import { CgProfile } from "react-icons/cg";

export const HomepageLayout = styled(Layout)`
  min-height: 100vh;
  width: 90%;
  position: relative;

  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
  }
`;

export const CustomHeader = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: center;
  color: white;
 

  @media ${device.tablet} {
    position: absolute;
    padding: 0;
    margin: auto;
    left: 0;
    right: 0;
    top: 1.5rem;
    width: 97%;
    flex-direction: row;
    justify-content: space-between;

  h1 {
    font-size: 250%;
    font-weight: 600;
    line-height: 40px;
  }

  text {
    font-size: 112.5%;
    color: ${({ theme }) => theme.colors.gray};
    line-height: 25px;
  }
`;

export const OptionsContainer = styled.div`
  display: none;

  @media ${device.tablet} {
    display: flex;

    gap: 1.1rem;
  }
`;

export const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.gray};
  border-radius: 50%;

  .icon {
    color: white;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const UserDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-left: 0.3rem;
`;

export const UserName = styled.small`
  font-size: 0.75rem;
  font-weight: 600;
  padding-bottom: 0.13rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const Status = styled.small`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.gray};
`;

export const ProfileIcon = styled(CgProfile)`
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: 2.5rem;
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
