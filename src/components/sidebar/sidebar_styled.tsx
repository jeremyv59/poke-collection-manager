import styled from "styled-components";
import { AntDesignOutlined } from "@ant-design/icons";
import { BsInfoCircleFill, BsFillPlayCircleFill } from "react-icons/bs";
import { device } from "../../styles/Breakpoints";
import { Layout, Menu } from "antd";

export const SidebarLayout = styled(Layout.Sider)`
  min-height: 100vh;
  padding-top: 1.5rem;
  background: ${({ theme }) => theme.colors.dark};
  position: relative;
`;

export const SidebarHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
  align-items: center;
  justify-content: center;

  @media ${device.laptopL} {
    flex-direction: row;
    gap: 0.5rem;
  }
`;

export const HeaderIcon = styled(AntDesignOutlined)`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 0.3rem;
  font-size: 2rem;

  @media ${device.laptopL} {
    margin-bottom: 0;
  }
`;

export const HeaderTxt = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  text-align: center;

  &:after {
    content: "";
    display: block;
    width: 100%;
    padding-top: 3px;
    border-bottom: 2px solid white;

    @media ${device.laptopL} {
      width: 60%;
    }
  }
`;

export const SidebarMenu = styled(Menu)`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0rem 1rem;

  .ant-menu-item {
    color: ${({ theme }) => theme.colors.gray};
    font-weight: 500;
    border-radius: 2.5rem;
    margin: 0rem !important;
  }

  && .ant-menu-item:hover {
    color: ${({ theme }) => theme.colors.white} !important;
    background: transparent !important;
  }

  .ant-menu-item-selected,
  && .ant-menu-item-selected:hover {
    background-color: ${({ theme }) => theme.colors.purple} !important;
    color: ${({ theme }) => theme.colors.white};
    transition: background-color 0.5s linear;
  }
`;

export const GuidenceContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 10%;
  left: 25%;
  right: 25%;

  @media ${device.laptopL} {
    width: 80%;
    left: 10%;
    background-color: ${({ theme }) => theme.colors.darkPurple};
    flex-direction: column;
    border-radius: 1.5rem;
    align-items: center;
  }
`;

export const InfoIconContainer = styled.div`
  display: block;

  @media ${device.laptopL} {
    position: absolute;
    top: -1.2rem;
    padding: 0.4rem 0.5rem;
    background: ${({ theme }) => theme.colors.darkPurple};
    border-color: transparent;
    border-radius: 2rem;
  }
`;

export const IconInfo = styled(BsInfoCircleFill)`
  color: ${({ theme }) => theme.colors.purple};
  background: transparent;
  font-size: 1.5rem;

  @media ${device.laptopL} {
    font-size: 1.8rem;
    border: 5px solid ${({ theme }) => theme.colors.dark};
    border-radius: 2rem;
  }
`;

export const GuidenceTitle = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  margin-top: 1.8rem;
  color: ${({ theme }) => theme.colors.white};
  display: none;
  text-align: center;

  @media ${device.laptopL} {
    display: block;
  }
`;

export const GuidenceDesc = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.6rem;
  text-align: center;
  display: none;
  margin: 0.4rem 1.4rem 0.6875rem;
  line-height: 150%;
  opacity: 0.6;

  @media ${device.laptopL} {
    display: block;
  }
`;

export const GuidenceButton = styled.button`
  width: 75%;
  background-color: ${({ theme }) => theme.colors.dark};
  cursor: pointer;
  display: none;
  border-radius: 1.25rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.7rem;
  padding: 0.5rem;
  margin-bottom: 1.3rem;

  @media ${device.laptopL} {
    display: flex;
    justify-content: center;
    gap: 0.25rem;
  }
`;

export const IconPlay = styled(BsFillPlayCircleFill)`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.white};
`;
