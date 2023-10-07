import React from "react";
import { Confidence, Instructors, Opportunities } from "./Icon";
const Introducing = () => {
	return (
		<section className="py-120">
			<div id="why" style={{ transform: "translateY(-120px)" }}></div>
			<div className="container">
				<h3
					className="mb-60 text-center mx-auto"
					style={{ maxWidth: "574px" }}
				>
					Introducing their first steps into the world of coding
				</h3>
				<div className="row gy-4 gx-0">
					{data?.map(({ icon, title, text }, i) => (
						<div className="col-md-4" key={i}>
							<div className="intro-item">
								<div className="icon">{icon}</div>
								<h5 className="title">{title}</h5>
								<p>{text}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
const data = [
	{
		icon: <Instructors />,
		title: "Expert Instructors",
		text: "Our team of experienced and passionate instructors is dedicated to providing top-notch coding lessons.",
	},
	{
		icon: <Confidence />,
		title: "Building Confidence",
		text: "Through hands-on projects and real-world applications, we help our students build confidence in their coding abilities.",
	},
	{
		icon: <Opportunities />,
		title: "Creating Opportunities",
		text: "EliteCode Foundation opens doors to a world of possibilities, preparing students for a bright future in the tech industry.",
	},
];
export default Introducing;
