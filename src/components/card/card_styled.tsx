import { Card } from "antd";
import styled from "styled-components";
import { device } from "../../styles/Breakpoints";

export const AntCard = styled(Card)`
  background: transparent;
  .ant-card-body {
    @media ${device.tablet} {
      display: flex;
      margin: 0.4rem;
    }
  }

  .ant-card-meta {
    display: flex;
    flex-direction: column;
    padding: 0.8rem;

    @media ${device.tablet} {
      flex-direction: row;
      width: 80%;
    }
  }

  .ant-card-meta-avatar {
    padding: 0 !important;
    width: 100%;
    display: flex;
    justify-content: center;
    border: 1px solid red;
    border-radius: 1.5rem;
  }

  .ant-card-meta-title {
    margin-top: 0.3rem;
  }
`;

export const ContainerDesc = styled.div`
  width: 100%;
  padding-left: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .expansion_title {
    display: none;

    @media ${device.tablet} {
      display: block;
    }
  }
`;
