import { Button } from "antd";
import styled from "styled-components";
import { device } from "../../styles/Breakpoints";

export const AntBtn = styled(Button)`
  background-color: ${({ theme }) => theme.colors.purple};
  color: white;
  border-radius: 3.125rem;
  width: 55%;
  height: 40px;

  @media ${device.mobileM} {
    width: 50%;
  }

  @media ${device.mobileL} {
    width: 45%;
  }

  @media ${device.tablet} {
    width: 35%;
  }

  @media ${device.desktop} {
    width: 20%;
  }

  & :nth-child(2) {
    font-size: 0.875rem;
    font-weight: 600;
  }
`;
