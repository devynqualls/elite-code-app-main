import React from "react";
import about from "../assets/img/about.png";
const About = () => {
	return (
		<section className="about-section bg-section py-120">
			<div className="container">
				<div className="row gy-5 align-items-center">
					<div className="col-md-6 text-md-center">
						<img src={about} className="about-img" alt="" />
					</div>
					<div className="col-md-6">
						<div className="about-content">
							<h3 className="title">
								Empowering young minds from diverse backgrounds.
							</h3>
							<p>
								At EliteCode Foundation, our mission is to bridge the
								digital divide by empowering young minds from diverse
								backgrounds. We aim to equip these bright individuals
								with essential coding skills.
							</p>
							<div>
								<a href="#contact" className="cmn-btn">
									Contact Us
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
