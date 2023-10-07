import React, { useEffect, useState } from "react";
import img from "../assets/img/get-started-bg.png";
import bgMobile from "../assets/img/get-started-mobile-bg.png";
const GetStartedSection = () => {
	const [mobile, setMobile] = useState(true);

	const handleMobile = () => {
		const width = window.innerWidth;
		if (width < 575) {
			setMobile(true);
		} else {
			setMobile(false);
		}
	};

	useEffect(() => {
		handleMobile();
		window.addEventListener("resize", handleMobile);
	}, []);
	return (
		<section
			className="get-started-section py-120"
			style={{
				background: `url(${
					mobile ? bgMobile : img
				}) no-repeat right center / cover`,
			}}
		>
			<div className="container">
				<div className="get-started-content text-center">
					<h3
						className="mb-30 mx-auto text-white"
						style={{ maxWidth: "574px" }}
					>
						Breaking barriers: Teaching coding to underprivileged kids for
						tech careers.
					</h3>
					<a href="#" className="cmn-btn btn-white">
						Get Started
					</a>
				</div>
			</div>
		</section>
	);
};
export default GetStartedSection;
