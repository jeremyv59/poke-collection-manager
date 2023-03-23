import styled from "styled-components";
import { AntDesignOutlined } from "@ant-design/icons";
import { BsInfoCircleFill } from "react-icons/bs";
import { device } from "../../styles/Breakpoints";
import { Menu } from "antd";

export const SidebarHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0.5rem 2.8rem;
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
  }
`;

export const GuidenceContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 10%;
  left: 25%;
  right: 25%;
`;

export const IconInfo = styled(BsInfoCircleFill)`
  color: ${({ theme }) => theme.colors.purple};
  background: transparent;
  font-size: 1.5rem;
`;
