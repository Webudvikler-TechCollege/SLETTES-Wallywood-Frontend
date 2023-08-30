import styled from "styled-components"
import { ClearList } from "../../Styled/Mixins"

export const NavBarStyle = styled.nav`
  grid-area: ${(props) => props.area};
  height: 100%;
  padding-top: 2rem;

  /* Navbar */
  ul {
    display: none;
    align-content: flex-end;
    ${ClearList}

    li {
      margin-left: 2rem;

      a {
        font-family: ${(props) => props.theme.fonts[0]};
        text-decoration: none;
        color: ${(props) => props.theme.colors.tertiary};
        font-size: 1.1rem;
        white-space: nowrap;

        &:hover {
          color: ${(props) => props.theme.colors.secondary};
        }
      }
    }

    /* Tablet & Desktop */
    @media (min-width: ${(props) => props.theme.grid.breakpoints.m}) {
      display: flex;
    }
  }

  /* Navbar Active */
  &.active > ul {
    transition: 0.2s ease-in-out;
    align-content: flex-start;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 8.9vh;
    right: 30px;
    padding: 15px 30px;
    border: solid 1px #000;
    background: rgb(200, 200, 200, 0.9);    

    li {
      margin-left: 0;
      font-size: 1rem;
    }
  }

  /* Burgermenu Closed */
  & > div {
    display: none;
    position: absolute;
    width: 25px;
    height: 15px;
    right: 40px;

    div {
      position: absolute;
      width: 100%;
      height: 12%;
      background-color: black;
      transition: 0.2s ease-in-out;

      &:first-child {
        top: 0;
        left: 0;
      }

      &:nth-child(2) {
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }

      &:last-child {
        top: 90%;
        left: 0;
      }
    }

    /* Mobile & Tablet */
    @media (max-width: ${(props) => props.theme.grid.breakpoints.m}) {
      display: block;
    }
  }

  /* Burgermenu Open */
  &.active > div {
    position: absolute;
    width: 25px;
    height: 25px;
    right: 40px;

    div {
      position: absolute;
      width: 100%;
      height: 12%;
      background-color: black;
      transition: 0.2s ease-in-out;

      &:first-child {
        top: 50%;
        left: 0;
        transform: translateY(-50%) rotate(45deg);
      }

      &:nth-child(2) {
        top: 50%;
        left: 0;
        transform: translateY(-50%) rotate(45deg);
      }

      &:last-child {
        top: 50%;
        left: 0;
        transform: translateY(-50%) rotate(-45deg);
      }
    }
  }
`
