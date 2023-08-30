import { SlideWrapperStyle } from './SlideWrapperStyle';

export const SlideWrapper = props => {
  return (
	<SlideWrapperStyle area={props.area}>
		<img src={require('../../../Assets/images/curtain.jpg')} alt="Wallywood" />
	</SlideWrapperStyle>
  )
}