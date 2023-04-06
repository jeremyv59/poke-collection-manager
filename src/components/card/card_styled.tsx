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
      width: 100%;
    }
  }

  .ant-card-meta-avatar {
    padding: 0 !important;
    width: 100%;
    display: flex;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 1.5rem;
  }

  .ant-card-meta-title {
    margin-top: 0.3rem;
    color: white;
  }

  .ant-card-actions {
    background: transparent;
    border-top: 1px solid ${({ theme }) => theme.colors.gray};

    .ant-btn {
      background-color: ${({ theme }) => theme.colors.purple};
      color: white;
      transition: background 0.7s ease, color 0.7s linear;

      &:hover {
        background: white;
        color: ${({ theme }) => theme.colors.darkPurple};
      }
    }
  }
`;

export const ContainerDesc = styled.div`
  width: 100%;
  padding-left: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ExpansionTitle = styled.h4`
  display: none;
  color: white;
  font-size: 1rem;

  @media ${device.tablet} {
    display: block;
    padding-top: 0.5rem;
  }
`;

export const PercentageTxt = styled.p`
  color: ${({ theme }) => theme.colors.gray};
`;
