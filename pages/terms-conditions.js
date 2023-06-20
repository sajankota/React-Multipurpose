import React from "react";
import Link from 'next/link';
import Navbar from "@/components/Layout/Navigations/Navbar1";
import FooterTwo from "@/components/Layout/Footer/FooterTwo";
import TermsConditionsContent from "@/components/TermsConditions/TermsConditionsContent";

const TermsConditions = () => {
	return (
		<>
			<Navbar />
			<div className="page-title-area">
				<div className="container">
					<div className="page-title-content">
						<h1>Terms & Conditions</h1>
						<ul>
							<li>
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li>Terms & Conditions</li>
						</ul>
					</div>
				</div>
			</div>
			<TermsConditionsContent />
			<FooterTwo />
		</>
	);
};

export default TermsConditions;
