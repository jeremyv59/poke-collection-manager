import { Card } from "antd";
import styled from "styled-components";

export const AntCard = styled(Card)`
  .ant-card-meta {
    display: flex;
    flex-direction: column;
    padding: 0.8rem;
    // background: yellow;
  }

  .ant-card-meta-avatar {
    padding: 0 !important;
    background: green;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;