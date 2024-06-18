import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./companyLogo.jfif"
								alt="gateway2it pvt. ltd."
								className="work-image"
							/>
							<div className="work-title">Gateway2IT Private Limited</div>
							<div className="work-subtitle">
								Full Stack Java Developer
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
