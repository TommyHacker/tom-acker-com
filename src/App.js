import './main.css';
import React from 'react';
import '../public/styles/css/main.css';
import Navbar from './components/Navbar';
import News from './components/News';
import * as Pages from './pages';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';

const App = () => {
	return (
		<div className='app-container'>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<Pages.HomePage />} />
					<Route path='/projects' element={<Pages.ProjectsPage />} />
					<Route path='/cv' element={<Pages.cvPage />} />
				</Route>
			</Routes>
		</div>
	);
};

export default App;
