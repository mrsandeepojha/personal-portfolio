import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Get in Touch: Connect with Me
						</div>

						<div className="subtitle contact-subtitle">
							Thank you for reaching out! I value your feedback, questions, and suggestions.
							You can email me directly at&nbsp;
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							, and I aim to respond within 24 hours (though it may take longer during busy periods).
							Alternatively, use the contact form on my website. Fill out the required fields,
							and I'll get back to you promptly.

							For social media enthusiasts, connect with me on&nbsp;
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								Instagram
							</a>
							. I post updates and engage with followers there. Feel free to reach out!

							Thank you once again for your interest. I look forward to hearing from you!
						</div>
					</div>


					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
