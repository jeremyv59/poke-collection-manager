import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.dark};
  border-radius: 1.25rem;
  padding: 0rem 0.6rem;
  margin-bottom: 1rem;
  width: 100%;

  .ant-btn {
    width: 100%;
    background: ${({ theme }) => theme.colors.purple};
    color: white;
    align-self: center;
    margin-bottom: 0.8rem;
    transition: background 0.7s ease, color 0.7s linear;

    &:hover {
      background: white;
      color: ${({ theme }) => theme.colors.darkPurple};
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: contain;
  padding: 1rem;
  border-bottom: 1px solid white;
`;

export const ExpansionName = styled.h6`
  font-size: 1rem;
  color: white;
  font-weight: 600;
  margin-top: 0.5rem;
`;
