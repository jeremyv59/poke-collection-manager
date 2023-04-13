import styled from "styled-components";
import { Layout } from "antd";
import { device } from "../../styles/Breakpoints";

export const HomepageLayout = styled(Layout)`
  min-height: 100vh;
  width: 90%;
  position: relative;

  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
  }
`;

export const MainContainer = styled.div`
  background: ${({ theme }) => theme.colors.darkSecondary};
  width: 100%;

  @media ${device.tablet} {
    padding-top: 100px;
  }

  @media ${device.laptop} {
    width: 70%;
  }
`;

export const MainCardContainer = styled.div`
  margin: 0.5rem;
  background: ${({ theme }) => theme.colors.dark};
  border-radius: 0.5rem;

  @media ${device.tablet} {
    margin: 1rem;
  }
`;

export const ListContainer = styled.div`
  margin: 0.5rem;

  @media ${device.tablet} {
    margin: 1rem;
  }
`;

export const RightContainer = styled.div`
  background: ${({ theme }) => theme.colors.dark};
  width: 100%;

  @media ${device.laptop} {
    width: 30%;
    padding-top: 100px;
  }
`;

export const ContentContainer = styled.div`
  padding: 0rem 2rem;
  margin: 1rem 0rem;
`;

export const TotalCards = styled.div`
  background: ${({ theme }) => theme.colors.darkSecondary};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 1.875rem;
  padding: 1.875rem 0rem;
  margin-bottom: 2rem;

  .ant-btn {
    display: flex;
    margin-top: 1.25rem;
    align-items: center;
    justify-content: center;
    width: 60%;
    flex-direction: row-reverse;
    background-color: ${({ theme }) => theme.colors.dark};
    color: white;
    transition: background 0.7s ease, color 0.7s linear;

    &:hover {
      background: white;
      color: ${({ theme }) => theme.colors.darkPurple};
    }
  }

  .anticon {
    margin-left: 0.5rem;
  }
`;

export const TotalTitle = styled.h6`
  font-size: 1rem;
  color: white;
  font-weight: 500;
`;

export const TotalCount = styled.h6`
  color: ${({ theme }) => theme.colors.purple};
  font-weight: 700;
  font-size: 2.75rem;
  line-height: 60px;
`;

export const Expansion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  .ant-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.purple};
    color: white;
    width: 20%;
    font-size: 0.7rem;
    font-weight: 700;
    transition: background 0.7s ease, color 0.7s linear;

    &:hover {
      background: white;
      color: ${({ theme }) => theme.colors.darkPurple};
    }
  }
`;
export const DescContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 64px;
  height: 48px;
  display: flex;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 50%;
  padding: 0.2rem;
`;

export const ExpansionImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

export const ExpansionName = styled.small`
  width: 100%;
  padding-left: 0.7rem;
  color: white;
`;

export const PokeCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  .ant-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.purple};
    color: white;
    width: 20%;
    font-size: 0.7rem;
    font-weight: 700;
  }
`;

export const PokeImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 0.75rem;
`;

export const PokeImg = styled.img`
  width: 100%;
  height: 70px;
  object-fit: contain;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardName = styled.small`
  width: 100%;
  color: white;
  font-size: 1rem;
`;

// export const SmallText = styled.p`
//   color: ${({ theme }) => theme.colors.gray};
//   font-size: 0.75rem;
//   font-weight: 600;
// `;
