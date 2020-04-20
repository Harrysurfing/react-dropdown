import React, { useState } from "react";
import "./dorpdown-menu.style.scss";
import DropdownItem from "../dropdown-item/dropdown-item.component";
import { CSSTransition } from "react-transition-group";

const DropdownMenu = () => {
	const [activeMenu, setActiveMenu] = useState("main");
	const [menuHeight, setMenuHeight] = useState(null);

	const calcHeight = (el) => {
		const height = el.offsetHeight;
		setMenuHeight(height);
	};

	const changeMenu = (value) => {
		setActiveMenu(value);
	};
	return (
		<div className="dropdown" style={{ height: menuHeight }}>
			<CSSTransition
				in={activeMenu === "main"}
				unmountOnExit
				timeout={500}
				classNames="menu-primary"
				onEnter={calcHeight}
			>
				<div className="menu">
					<DropdownItem leftIcon={"💰"}>My Profile</DropdownItem>
					<DropdownItem
						leftIcon={"💻"}
						rightIcon={"▶️"}
						goToMenu="settings"
						changeMenu={changeMenu}
					>
						Settings
					</DropdownItem>
				</div>
			</CSSTransition>

			<CSSTransition
				in={activeMenu === "settings"}
				unmountOnExit
				timeout={500}
				classNames="menu-secondary"
				onEnter={calcHeight}
			>
				<div className="menu">
					<DropdownItem leftIcon={"◀️"} goToMenu="main" changeMenu={changeMenu}>
						Back
					</DropdownItem>
					<DropdownItem leftIcon={"💻"}>Haha</DropdownItem>
					<DropdownItem leftIcon={"💻"}>Haha</DropdownItem>
					<DropdownItem leftIcon={"💻"}>Haha</DropdownItem>
					<DropdownItem leftIcon={"💻"}>Haha</DropdownItem>
					<DropdownItem leftIcon={"💻"}>Haha</DropdownItem>
					<DropdownItem leftIcon={"💻"}>Haha</DropdownItem>
				</div>
			</CSSTransition>
		</div>
	);
};

export default DropdownMenu;
