import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.dark};
  display: flex;
  padding: 3.125rem 3.75rem;
  border-radius: 1.875rem;
  justify-content: space-between;
  margin-bottom: 1.375rem;
`;

export const OverviewItem = styled.div`
  display: flex;
  align-items: center;
`;

export const IconContainer = styled.div`
  background: ${(p) => (p.color ? p.color : "white")};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 72px;
  width: 72px;
  border-radius: 50%;
  margin-right: 1.8rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
