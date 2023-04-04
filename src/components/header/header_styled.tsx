import styled from "styled-components";
import { device } from "../../styles/Breakpoints";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";

export const CustomHeader = styled.div`
  padding: 1rem;
  display: flex;
  justify-content:space-between;
  width: 100%;
  align-items: center;
  color: white;
  background: ${({ theme }) => theme.colors.darkSecondary};
 

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
  
  @media ${device.tablet} {
    position: absolute;
    padding: 0;
    margin: auto;
    left: 0;
    right: 0;
    top: 1.5rem;
    background: transparent;
    width: 97%;
    flex-direction: row;
    justify-content: space-between;
`;

export const OptionsContainer = styled.div`
  display: none;

  @media ${device.laptopL} {
    display: flex;
    gap: 1.1rem;
  }
`;

export const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
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

export const MenuIcon = styled(FiMenu)`
  color: white;

  @media ${device.laptopL} {
    display: none;
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
