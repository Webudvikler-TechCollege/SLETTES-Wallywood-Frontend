import { HeaderStyle } from "./Header.style";
import { Link } from "react-router-dom";

const Header = props => {
	return (
		<>
		<HeaderStyle area={props.area}>
			<Link to="/">Wallywood</Link>
		</HeaderStyle>
		</>
	);
}

export default Header;
