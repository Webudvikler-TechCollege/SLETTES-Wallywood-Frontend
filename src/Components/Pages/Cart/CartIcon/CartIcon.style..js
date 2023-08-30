import styled from 'styled-components'

export const CartIconStyle = styled.div`
	float: right;

	a {
		font-size: ${props => props.theme.fontsizes.xs};
		text-decoration: none;
	}

	svg {
		margin-left: 0.4rem;
		&:hover {
			color: ${props => props.theme.colors.secondary}
		}
	}
`
