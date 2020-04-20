import React from "react";
import "./navbar.style.scss";
import NavItem from "../nav-item/navitem.component";
import DropdownMenu from "../dropdown-menu/dropdown-menu.component";

const Navbar = () => (
	<nav className="navbar">
		<ul className="navbar-nav">
			<NavItem icon="😂" />
			<NavItem icon="😂" />
			<NavItem icon="😂" />
			<NavItem icon="🔽">
				<DropdownMenu />
			</NavItem>
		</ul>
	</nav>
);

export default Navbar;
