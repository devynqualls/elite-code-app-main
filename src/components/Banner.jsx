import React from "react";
import bg from "../assets/img/banner/banner-bg.jpg";
import mobileImg from "../assets/img/banner/banner-img-mobile.png";
import img from "../assets/img/banner/banner.png";
import useMobile from "../hooks/useMobile";
const Banner = () => {
	const mobile = useMobile();
	return (
		<section
			className="banner-section"
			style={{ background: `url(${bg}) no-repeat center center / cover` }}
		>
			<div className="container">
				<div className="banner-content">
					<h1 className="title">
						Offering <span className="text-base">Coding Lessons</span> to
						help Minority Kids get into the tech field.
					</h1>
					<p>
						We are a nonprofit organization dedicated to providing coding
						lessons and opportunities for underprivileged minority
						children.
					</p>
					<a href="#contact" className="cmn-btn">
						Contact Us
					</a>
				</div>
				<div className="banner-img">
					<img src={img} className="d-none d-sm-block" alt="" />
					<img src={mobileImg} className="d-sm-none" alt="" />
				</div>
			</div>
		</section>
	);
};

export default Banner;
