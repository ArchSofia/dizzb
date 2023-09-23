import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="logo">
				<img src={logo} className="dizzb" alt="Dizzb logo" />
			</div>
			<nav className="navigation-menu">
				<ul>
					<li>
						<a href="#whydizzb" className="menu-button">
							Why Dizzb
						</a>
					</li>
					<li>
						<a href="#solutions" className="menu-button">
							Solutions
						</a>
					</li>
					<li>
						<a href="#experence" className="menu-button">
							Our experience
						</a>
					</li>
					<li>
						<a href="#partnerships" className="menu-button">
							Partnerships
						</a>
					</li>
				</ul>
				<button className="button">Get started</button>
			</nav>
		</div>
	);
};

export default Navbar;
