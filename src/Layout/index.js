import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import News from '../components/News';

const Layout = () => {
	return (
		<>
			<Navbar />
			<News />
			<Outlet />
		</>
	);
};

export default Layout;
