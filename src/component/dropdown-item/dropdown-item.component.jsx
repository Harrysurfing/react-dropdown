import React from "react";
import "./dropdown-item.style.scss";

const DropdownItem = (props) => {
	const { changeMenu, goToMenu } = props;

	return (
		<a
			href="#d"
			className="menu-item"
			onClick={() => (changeMenu ? changeMenu(goToMenu) : null)}
		>
			<span className="icon-button">{props.leftIcon}</span>
			{props.children}
			<span className="icon-right">{props.rightIcon}</span>
		</a>
	);
};

export default DropdownItem;
