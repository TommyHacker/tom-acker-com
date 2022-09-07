import React from 'react';
import '../public/styles/css/main.css';
import Navbar from './components/Navbar';
import News from './components/News';
import * as Pages from './pages';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='/' element={<Pages.HomePage />} />
				<Route path='/projects' element={<Pages.ProjectsPage />} />
			</Route>
		</Routes>
	);
};

export default App;
