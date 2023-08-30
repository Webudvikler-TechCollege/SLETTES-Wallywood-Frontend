import styled from "styled-components"
import { Reset } from "../../Styled/Mixins"

export const HeaderStyle = styled.header`
  grid-area: ${(props) => props.area};

  > a {
    font-family: ${(props) => props.theme.fonts[0]};
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.secondary};
    font-size: 2.5rem;
    font-weight: 900;
    text-decoration: none;
    ${Reset}
    @media (min-width: ${(props) => props.theme.grid.breakpoints.m}) {
		font-size: 3rem;
    }
  }
`
