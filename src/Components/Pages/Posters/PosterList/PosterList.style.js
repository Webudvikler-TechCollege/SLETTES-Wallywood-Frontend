import styled from "styled-components"
import { Reset } from "../../../Styled/Mixins"

export const PosterListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(200px, 1fr));
  grid-template-rows: auto;
  grid-gap: 0rem;

  /* Tablet */
  @media (min-width: ${(props) => props.theme.grid.breakpoints.m}) {
	grid-template-columns: repeat(2, minmax(150px, 1fr));
  }

  /* Desktop */
  @media (min-width: ${(props) => props.theme.grid.breakpoints.l}) {
	grid-template-columns: repeat(3, minmax(150px, 1fr));
  }

  > div {
    width: 100%;
    margin-bottom: 1.5rem;

    figure {
      ${Reset}
      text-align: center;
    }

    img {
      width: 200px;
      height: 270px;
      object-fit: cover;
    }

    h3,
    p {
      text-align: center;
    }
  }
`
