import styled from "styled-components";

export const PokeCardContainer = styled.div`
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

export const DescContainer = styled.div`
  display: flex;
  align-items: center;
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
