import styled from 'styled-components'

export const ButtonStyle = styled.button`
	background-color: ${props => props.theme.colors.quinary};
	border: solid 1px ${props => props.theme.colors.tertiary};
	color: ${props => props.theme.colors.tertiary};
	padding: 0.5rem 0.8rem;
	border-radius: 3px;

	&:hover {
		background-color: ${props => props.theme.colors.tertiary};
		border: solid 1px ${props => props.theme.colors.tertiary};
		color: ${props => props.theme.colors.light};
	}
`