import React, { useState } from "react";
import { FaqClose, FaqOpen } from "./Icon";
const Faqs = () => {
	return (
		<section className="bg-section py-120">
			<div id="FAQ" style={{ transform: "translateY(-120px)" }}></div>
			<div className="container">
				<h3
					className="mb-50 text-center mx-auto"
					style={{ maxWidth: "444px" }}
				>
					Frequently asked questions
				</h3>
				<FaqItems id="faqs-items" data={data} />
			</div>
		</section>
	);
};

const FaqItems = ({ data, id }) => {
	const [open, setOpen] = useState(null);
	return (
		<div className="accordion" id={id}>
			{data?.map(({ title, text, linkText, link }, i) => (
				<div className="accordion-item" key={i}>
					<h2 className="accordion-header">
						<button
							className={`accordion-button  ${
								open === i ? "active" : ""
							}`}
							type="button"
							data-bs-toggle="collapse"
							data-bs-target={`#accordion-${id}-${i}`}
							aria-expanded="false"
							onClick={() => (open == i ? setOpen(null) : setOpen(i))}
						>
							<span className="me-2">{title} </span>
							<span className="plus ms-auto">
								<FaqOpen />
							</span>
							<span className="minus ms-auto">
								<FaqClose />
							</span>
						</button>
					</h2>
					<div
						id={`accordion-${id}-${i}`}
						className={`accordion-collapse collapse ${
							i === "0" ? "show" : ""
						}`}
						data-bs-parent={`#${id}`}
					>
						<div className="accordion-body">
							{text && (
								<p>
									{text}{" "}
									<a href={link} className="text-base">
										{linkText}
									</a>{" "}
								</p>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
export default Faqs;

const data = [
	{
		title: "Who is eligible to participate in EliteCode Foundation's coding lessons?",
		text: "he coding lessons offered by EliteCode Foundation are open to underprivileged minority children who are eager to explore the world of technology and coding. We aim to provide equal opportunities for bright minds from diverse backgrounds, empowering them with essential coding skills and inspiring them to pursue careers in the tech field.",
	},
	{
		title: "What coding languages and technologies will be covered in the lessons?",
		text: "he coding lessons offered by EliteCode Foundation are open to underprivileged minority children who are eager to explore the world of technology and coding. We aim to provide equal opportunities for bright minds from diverse backgrounds, empowering them with essential coding skills and inspiring them to pursue careers in the tech field.",
	},
	{
		title: "How can I support EliteCode Foundation's mission as a volunteer or donor?",
		text: "he coding lessons offered by EliteCode Foundation are open to underprivileged minority children who are eager to explore the world of technology and coding. We aim to provide equal opportunities for bright minds from diverse backgrounds, empowering them with essential coding skills and inspiring them to pursue careers in the tech field.",
	},
	{
		title: "Are the coding lessons offered online or in-person?",
		text: "he coding lessons offered by EliteCode Foundation are open to underprivileged minority children who are eager to explore the world of technology and coding. We aim to provide equal opportunities for bright minds from diverse backgrounds, empowering them with essential coding skills and inspiring them to pursue careers in the tech field.",
	},
	{
		title: "Is there any cost associated with enrolling in the coding programs?",
		text: "he coding lessons offered by EliteCode Foundation are open to underprivileged minority children who are eager to explore the world of technology and coding. We aim to provide equal opportunities for bright minds from diverse backgrounds, empowering them with essential coding skills and inspiring them to pursue careers in the tech field.",
	},
	{
		title: "What age groups do the coding lessons cater to?",
		text: "he coding lessons offered by EliteCode Foundation are open to underprivileged minority children who are eager to explore the world of technology and coding. We aim to provide equal opportunities for bright minds from diverse backgrounds, empowering them with essential coding skills and inspiring them to pursue careers in the tech field.",
	},
	{
		title: "How can underprivileged minority kids apply for the coding programs?",
		text: "he coding lessons offered by EliteCode Foundation are open to underprivileged minority children who are eager to explore the world of technology and coding. We aim to provide equal opportunities for bright minds from diverse backgrounds, empowering them with essential coding skills and inspiring them to pursue careers in the tech field.",
	},
];
