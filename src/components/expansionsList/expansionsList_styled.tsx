import styled from "styled-components";
import { device } from "../../styles/Breakpoints";

export const ListTitle = styled.h3`
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  margin-top: 1.5rem;

  @media (min-width: 600px) and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.desktopL} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
