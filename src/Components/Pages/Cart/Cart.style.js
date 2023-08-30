import styled from 'styled-components'
import { Reset } from '../../Styled/Mixins'

export const CartStyle = styled.section`

	&>div {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr 1fr;
		grid-row-gap: 0;
		padding: 0.5rem 0;
		border-bottom: solid 1px ${props => props.theme.colors.quinary};

		figure {
			display: none;
			${Reset}

			img {
				max-width: 5rem;
			}
		}
		
		div {
			font-size: 0.9rem;
			text-align: right;
			&:first-child {
				text-align: left;
			}
		}


	}

`