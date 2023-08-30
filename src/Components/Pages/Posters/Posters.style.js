import styled from 'styled-components'
import { ClearList } from '../../Styled/Mixins'

export const PostersStyle = styled.div`
	display: flex;

	ul {
		${ ClearList };
		
		a {
			text-decoration: none;
			font-size: small;

			&:hover {
				color: ${props => props.theme.colors.secondary}
			}
		}
	}
`