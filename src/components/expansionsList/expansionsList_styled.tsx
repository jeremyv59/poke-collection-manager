import styled from "styled-components";
import { device } from "../../styles/Breakpoints";

export const ListTitle = styled.h3`
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const ItemsContainer = styled.div`
  @media ${device.tablet} {
    margin: 1.5rem 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }

  @media ${device.laptop} {
    margin: 1.5rem 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
`;
