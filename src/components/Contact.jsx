import React from "react";
import logo from "../assets/img/white-logo.png";
import { Email, Phone, Telegram } from "./Icon";
const Contact = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<section className="contact-section py-120">
			<div id="contact" style={{ transform: "translateY(-120px)" }}></div>
			<div className="container">
				<div className="mb-40">
					<h3 className="mb-2">Contact Us</h3>
					<p className="text-20">
						Leave a message to us. We will get <br /> back to you soon!
					</p>
				</div>
				<div className="contact-wrapper">
					<div className="contact-left">
						<div className="w-100">
							<img src={logo} className="logo" alt="" />
							<ul className="info">
								<li>
									<a href="tel:454545454545">
										<Phone /> <span> +44 XXXXXXXXX</span>
									</a>
								</li>
								<li>
									<a href="mailto:Info@elitecode.com">
										<Email /> <span>Info@elitecode.com</span>
									</a>
								</li>
								<li>
									<a href="#">
										<Telegram /> <span> c/o eNavis AG, Germany</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="contact-right">
						<form onSubmit={handleSubmit}>
							<div className="form-group">
								<label className="form-label">Name</label>
								<input
									type="text"
									className="form-control form--control"
									placeholder="Md. Abdullah"
								/>
							</div>
							<div className="form-group">
								<label className="form-label">Email Address</label>
								<input
									type="text"
									className="form-control form--control"
									placeholder="example@example.com"
								/>
							</div>
							<div className="form-group">
								<label className="form-label">Message</label>
								<textarea
									className="form-control form--control"
									placeholder="Your messages here..."
								></textarea>
							</div>
							<button type="submit" className="cmn-btn">
								Contact Us
							</button>{" "}
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
