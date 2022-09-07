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

	const menuHandler = (e) => {
		e.stopPropagation();
		setMenu(!menu);
	};

	useEffect(() => {
		window.addEventListener('click', (e) => {
			e.stopPropagation();
			if (menu) {
				setMenu(false);
			}
		});
	}, [menu]);

	const navLinks = () => {
		return (
			<>
				<button onClick={handleGithubLink}>Github</button>
				<button onClick={() => navigate('/projects')}>Projects</button>
				<button onClick={() => navigate('/cv')}>CV</button>
			</>
		);
	};

	return (
		<nav>
			<div className='nav-left'>
				<div className='logo' onClick={() => navigate('/')}>
					Tom Hacker
				</div>
			</div>
			<div className='nav-right'>
				{!burger ? (
					navLinks()
				) : (
					<>
						<div className='burger' onClick={menuHandler}>
							<div className='bar'></div>
							<div className='bar'></div>
							<div className='bar'></div>
						</div>
					</>
				)}
				{menu && <div className='nav-menu'>{navLinks()}</div>}
			</div>
		</nav>
	);
};

export default Navbar;
