import styled from 'styled-components'
import { Reset } from '../../Styled/Mixins'

export const FooterStyle = styled.footer`
	grid-area: ${props => props.area};
	border-top: solid 1px ${props => props.theme.colors.quinary};
	margin-top: 1rem;
	padding-top: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	> * {
		margin-bottom: 1rem;
		text-align: center;
	}

	h2 {
		text-transform: uppercase;
		color: ${props => props.theme.colors.secondary};
		${ Reset }
	}

	address {
		font-style: normal;
	}

	svg {
		margin-left: 0.8rem;
	}

	/* Tablet & Desktop */
    @media (min-width: ${(props) => props.theme.grid.breakpoints.m}) {
		flex-direction: row;
		> * {
			text-align: left;
			margin-bottom: 0;
		}
	}	
`