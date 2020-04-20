import React, { useState } from "react";
import "./navitem.style.scss";

const NavItem = (props) => {
	const [open, setOpen] = useState(false);

	return (
		<li className="nav-item">
			<a href="#sdf" className="icon-button" onClick={() => setOpen(!open)}>
				{props.icon}
			</a>
			{open && props.children}
		</li>
	);
};

export default NavItem;
