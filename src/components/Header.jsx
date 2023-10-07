/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import { useScreenSize } from "../hooks/useMobile";
import { BarIcon, ClearIcon } from "./Icon";
const Header = () => {
	const [open, setOpen] = useState(false);
	const screen = useScreenSize();
	return (
		<header>
			<div className="container">
				{screen < 992 ? (
					<div className="mobile-header">
						<Logo />
						<a href="#contact" className="header-btn">
							Contact Us
						</a>
						<button
							type="button"
							className="no-gutter"
							onClick={() => setOpen(!open)}
						>
							<BarIcon />
						</button>
					</div>
				) : (
					""
				)}
				<div className={`header-wrapper ${open ? "active" : ""}`}>
					{screen < 992 ? (
						<div className="w-100 d-flex align-items-center justify-content-between mb-3">
							<div></div>
							<button
								className="close-btn no-gutter"
								type="button"
								onClick={() => setOpen(!open)}
							>
								<ClearIcon />
							</button>
						</div>
					) : (
						<Logo />
					)}
					<ul className="menu heading-fonts">
						{menu?.map(({ name, url }, i) => (
							<li key={i}>
								<a href={url}>{name}</a>
							</li>
						))}
					</ul>
					<a href="#contact" className="header-btn">
						Contact Us
					</a>
				</div>
			</div>
		</header>
	);
};

export const Logo = () => {
	return (
		<>
			<a href="#" className="logo">
				<img src={logo} alt="" />
			</a>
		</>
	);
};

const menu = [
	{
		name: "Why Us?",
		url: "#why",
	},
	{
		name: "About Us",
		url: "#about-us",
	},
	{
		name: "FAQ",
		url: "#FAQ",
	},
];

export default Header;
