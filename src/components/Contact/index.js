import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './contact.css';

export default function Contact() {
	return (
		<div className="container-fluid">
			<h2 className="pe-3 border-end text-end me-5">Contact</h2>

			<div className="container my-5 p-3 border-bottom">
				<h3 className="display-5">Let's Get in Touch!</h3>
				<p className="lead">
					Thank you for looking through my portfolio! I hope you found
					things that proved that I am willing to put in hard work and
					am committed to learning new technologies to create
					innovative and creative applications.
				</p>
				<p>
					If you'd like to reach me, send me an email at{' '}
					<a
						href="mailto:gknsvs.svs@gmail.com"
						target="_blank"
						rel="noreferrer"
						title="gknsvs.svs@gmail.com"
						className="custom-paragraph-link"
					>
						gknsvs.svs@gmail.com
					</a>{' '}
					or give me a call or text at{' '}
					<a
						href="tel:(555) 088-41-50"
						target="_blank"
						rel="noreferrer"
						title="(555) 088-41-50"
						className="custom-paragraph-link"
					>
						(555) 088-41-50
					</a>
					.
				</p>
			</div>

			<div className="section-content container d-flex justify-content-center">
				{/* Github link */}
				<a
					href="https://github.com/IRONSTONE-A"
					target="_blank"
					rel="noreferrer"
					title="https://github.com/IRONSTONE-A"
				>
					<FontAwesomeIcon
						icon={['fab', 'github']}
						size="3x"
						className="p-2 mx-2 text-light custom-icon"
					/>
				</a>

				

				{/* LinkedIn link */}
				<a
					href="https://www.linkedin.com/in/ironstone-/"
					target="_blank"
					rel="noreferrer"
					title="https://www.linkedin.com/in/ironstone-/"
				>
					<FontAwesomeIcon
						icon={['fab', 'linkedin-in']}
						size="3x"
						className="p-2 mx-2 text-light custom-icon"
					/>
				</a>

				{/* Mail link */}
				<a
					href="mailto:gknsvs.svs@gmail.com"
					target="_blank"
					rel="noreferrer"
					title="gknsvs.svs@gmail.com"
				>
					<FontAwesomeIcon
						icon={'envelope'}
						size="3x"
						className="p-2 mx-2 text-light custom-icon"
					/>
				</a>

				{/* Phone link */}
				<a
					href="tel:(555) 088-41-50"
					target="_blank"
					rel="noreferrer"
					title="(555) 088-41-50"
				>
					<FontAwesomeIcon
						icon={'phone'}
						size="3x"
						className="p-2 mx-2 text-light custom-icon"
					/>
				</a>
			</div>
		</div>
	);
}
