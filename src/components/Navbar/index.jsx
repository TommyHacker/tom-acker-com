import React, { useState, useEffect } from 'react';
import './main.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const [burger, setBurger] = useState(true);
	const [menu, setMenu] = useState(false);

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

	const menuHandler = () => {
		setMenu(!menu);
	};

	return (
		<nav>
			<div className='nav-left'>
				<div className='logo' onClick={redirectHome}>
					Tom Hacker
				</div>
			</div>
			<div className='nav-right'>
				{!burger ? (
					<>
						<button onClick={handleGithubLink}>Github</button>
						<button onClick={redirectProjects}>Projects</button>
					</>
				) : (
					<>
						<div className='burger' onClick={menuHandler}>
							<div className='bar'></div>
							<div className='bar'></div>
							<div className='bar'></div>
						</div>
					</>
				)}
				{menu && (
					<div className='nav-menu'>
						<button onClick={handleGithubLink}>Github</button>
						<button onClick={redirectProjects}>Projects</button>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
