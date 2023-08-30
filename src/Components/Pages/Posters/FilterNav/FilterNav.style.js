import styled from "styled-components"

export const FilterNavStyle = styled.nav`
  width: 15rem;
  ul {
    /* border: 1px solid black */
    /* display: inline-block; */
    padding: 0;
    border-radius: 4px;
    position: relative;
  }
  @media (min-width: ${(props) => props.theme.grid.breakpoints.m}) {
    border-right: solid 1px ${(props) => props.theme.colors.quinary};
  }
`
