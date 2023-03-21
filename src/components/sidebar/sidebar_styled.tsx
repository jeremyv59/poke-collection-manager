import styled from "styled-components";
import { AntDesignOutlined } from "@ant-design/icons";
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
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .ant-menu-item {
    color: green;
  }
`;
