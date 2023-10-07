import React from "react";
import about from "../assets/img/about2.png";
const AboutUs2 = () => {
	return (
		<section className="about-section py-120">
			<div id="about-us" style={{ transform: "translateY(-120px)" }}></div>
			<div className="container">
				<div className="row gy-5 align-items-center">
					<div className="col-md-6">
						<img src={about} className="mw-100" alt="" />
					</div>
					<div className="col-md-6">
						<div className="about-content" style={{ maxWidth: "515px" }}>
							<h3 className="title">About Us</h3>
							<p>
								EliteCode Foundation, a nonprofit organization dedicated
								to <br /> transforming lives through tech education. We
								believe that every young mind, regardless of their
								background, deserves a chance to explore the boundless
								possibilities of the tech industry.
							</p>
							<p>
								At EliteCode, we are committed to nurturing talent,
								fostering creativity, and building confidence in our
								students. Our expert instructors are passionate about
								equipping the next generation of diverse tech
								professionals with the skills they need to succeed.
							</p>
							<p>
								Through our holistic approach to learning, we go beyond
								coding languages, emphasizing problem-solving, teamwork,
								and critical thinking.
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

export default AboutUs2;
