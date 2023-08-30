import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavBarStyle } from "./NavBar.style";

const NavBar = props => {
	const [ isActive, setActive ] = useState(false)

    const handleToggle = () => {
        setActive(!isActive);
    }	

	return (
		<NavBarStyle area={props.area} className={isActive ? 'active' : ''}>
            <div onClick={handleToggle}>
                <div></div>
                <div></div>
                <div></div>
            </div>

			<ul className={isActive ? 'activeMenu' : ''}>
				<li><NavLink to="/">HOME</NavLink></li>
				<li><NavLink to="/posters/drama">PLAKATER</NavLink></li>
				<li><NavLink to="/about">OM OS</NavLink></li>
				<li><NavLink to="/contact">KONTAKT</NavLink></li>
				<li><NavLink to="/login">LOGIN</NavLink></li>
			</ul>
		</NavBarStyle>

	);
}

export default NavBar;
