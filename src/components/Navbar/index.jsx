import React from 'react';
import './main.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const navigate = useNavigate();
	const handleGithubLink = () => {
		window.open('https://github.com/tommyhacker?tab=repositories', '_blank');
	};

	const redirectHome = () => {
		return navigate('/');
	};
	const redirectProjects = () => {
		return navigate('/projects');
	};

	return (
		<nav>
			<div className='nav-left'>
				<div className='logo-container'>
					<div className='logo' onClick={redirectHome}>
						logo here
					</div>
					<div className='title' onClick={redirectHome}>
						<h1>Tom Hacker</h1>
					</div>
				</div>
			</div>
			<div className='nav-right'>
				<button onClick={handleGithubLink}>Github</button>
				<button onClick={redirectProjects}>Projects</button>
			</div>
		</nav>
	);
};

export default Navbar;
