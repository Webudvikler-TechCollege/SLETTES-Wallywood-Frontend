import styled from 'styled-components'
import { Reset } from '../../Styled/Mixins'

export const SlideWrapperStyle = styled.div`
	grid-area: ${props => props.area};
	padding-top: 1.0rem;
	border-top: solid 1px ${props => props.theme.colors.primary};
	img {
		width: 100%;
		${Reset}
	}

	@media (max-width: ${(props) => props.theme.grid.breakpoints.m}) {
    	border-top: 0px none;
		padding-top: 0rem;
  	}	

	@media (max-width: ${(props) => props.theme.grid.breakpoints.s}) {
    	display: none;
  	}	
`
