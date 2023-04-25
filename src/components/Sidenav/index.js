import React from 'react';
import './sidenav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import foto from "../../images/foto.jpg"
import resume from "../../images/Resume.pdf"

const date = new Date();
const days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

export default function Sidenav({ currentPage, handlePageChange }) {
	return (
		<nav className="side-nav">
			<div className="container-fluid text-center">
				{/* Headshot */}
				<img
					src={foto}
					alt="ironstone"
					className="side-nav-img mb-4"
				/>
				{/* Sidenav heading */}
				<h2 className="nav-title text-center pb-lg-3 pb-0">
					Ironstone-A
				</h2>

				{/* Sidenav links */}
				<ul className="d-flex flex-lg-column flex-row justify-content-center flex-wrap text-center px-0 pt-lg-3 pt-0">
					<a
						className={
							currentPage === 'Projects'
								? 'custom-nav-link link-active'
								: 'custom-nav-link'
						}
						href="#projects"
						onClick={() => handlePageChange('Projects')}
					>
						Projects
					</a>

					<a
						className={
							currentPage === 'About'
								? 'custom-nav-link link-active'
								: 'custom-nav-link'
						}
						href="#about"
						onClick={() => handlePageChange('About')}
					>
						About
					</a>

					<a
						className={
							currentPage === 'Skills'
								? 'custom-nav-link link-active'
								: 'custom-nav-link'
						}
						href="#skills"
						onClick={() => handlePageChange('Skills')}
					>
						Skills
					</a>

					<a
						className={
							currentPage === 'Contact'
								? 'custom-nav-link link-active'
								: 'custom-nav-link'
						}
						href="#contact"
						onClick={() => handlePageChange('Contact')}
					>
						Contact
					</a>

					<a
						className="custom-nav-link"
						href={resume}
						target="_blank"
						rel="noreferrer"
					>
						<span>
							Resume{' '}
							<FontAwesomeIcon
								icon={'arrow-up-right-from-square'}
							></FontAwesomeIcon>
						</span>
					</a>
				</ul>
			</div>

			<footer className="mt-auto side-nav-footer">
				<div className="social">
					{/* Github link */}
					<a
						href="https://github.com/IRONSTONE-A"
						target="_blank"
						rel="noreferrer"
						title="https://github.com/IRONSTONE-A"
					>
						<FontAwesomeIcon
							icon={['fab', 'github']}
							size="2x"
							className="p-2 mx-2 text-light"
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
							size="2x"
							className="p-2 mx-2 text-light"
						/>
					</a>
					<p className="text-center mb-5">
						Have a great {days[date.getDay()]}!
					</p>
				</div>
			</footer>
		</nav>
	);
}
