import React from 'react';
import { GridPrimaryStyle } from './Grids.style';

export const GridPrimary = props => {
	return (
		<GridPrimaryStyle>
			{props.children}
		</GridPrimaryStyle>
	);
}