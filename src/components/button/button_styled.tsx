import { Button } from "antd";
import styled from "styled-components";

export const AntBtn = styled(Button)`
  background-color: ${({ theme }) => theme.colors.purple};
  color: white;
  border-radius: 3.125rem;
  width: 60%;
  height: 35px;

  & :nth-child(2) {
    font-size: 0.875rem;
    font-weight: 600;
  }
`;
