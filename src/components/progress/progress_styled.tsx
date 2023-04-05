import styled from "styled-components";
import { Progress } from "antd";
import { device } from "../../styles/Breakpoints";

export const AntProgress = styled(Progress)`
  width: 98%;

  @media ${device.tablet} {
    width: 85%;
  }

  .ant-progress-text {
    color: white;
  }
`;
