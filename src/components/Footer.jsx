/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Logo } from "./Header";
import { Facebook, Instagram, LinkedinIn, Twitter, Youtube } from "./Icon";

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="footer-wrapper">
					<div className="footer-widget widget-about">
						<div className="logo">
							<Logo />
						</div>
						<p>
							Don't wait - contact us now to learn more about our
							services.
						</p>
						<SocialIcon />
						<p style={{ fontSize: "15px" }}>
							&copy; 2023. All rights reserved.
						</p>
					</div>
					<div className="footer-widget widget-address">
						<h6 className="widget-title">Address</h6>
						<p>123 Main St, Anytown USA 12345</p>
						<br />
						<h6 className="widget-title">Contact</h6>
						<ul className="contact-link">
							<li>
								<a href="tel:(434) 546-4356">(434) 546-4356</a>
							</li>
							<li>
								<a href="mailto:contact@elitecode.com">
									contact@elitecode.com
								</a>
							</li>
						</ul>
					</div>
					<div className="footer-widget">
						<ul className="footer-link">
							<li>
								<a href="#">Services</a>
							</li>
							<li>
								<a href="#">About Us</a>
							</li>
							<li>
								<a href="#">Reviews</a>
							</li>
							<li>
								<a href="#">Free Resources </a>
							</li>
							<li>
								<a href="#contact">Contact Us </a>
							</li>
							<li>
								<a href="#">Service Area</a>
							</li>
						</ul>
					</div>
					<div className="footer-widget">
						<ul className="footer-link">
							<li>
								<a href="#">Terms & Conditions</a>
							</li>
							<li>
								<a href="#">Privacy Policy</a>
							</li>
							<li>
								<a href="#">Cookies Policy</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};
const SocialIcon = () => {
	return (
		<>
			<ul className="social">
				{social?.map(({ icon, link }, i) => (
					<li key={i}>
						<a href={link}>{icon}</a>
					</li>
				))}
			</ul>
		</>
	);
};

const social = [
	{
		icon: <Facebook />,
		link: "#",
	},
	{
		icon: <LinkedinIn />,
		link: "#",
	},
	{
		icon: <Instagram />,
		link: "#",
	},
	{
		icon: <Youtube />,
		link: "#",
	},
	{
		icon: <Twitter />,
		link: "#",
	},
];

export default Footer;
