import styled from "styled-components"

export const PosterDetailsStyle = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;

  /* Tablet */
  @media (min-width: ${(props) => props.theme.grid.breakpoints.m}) {
    grid-template-columns: 4fr 4fr;

  }

  figure {
	margin-top: 0px;

    img {
      width: 300px;
    }
  }

  div:last-child {
	margin-left: 2.5rem;

	/* Tablet */
	@media (min-width: ${(props) => props.theme.grid.breakpoints.m}) {
		margin-left: 0rem;		
	}


}

`
