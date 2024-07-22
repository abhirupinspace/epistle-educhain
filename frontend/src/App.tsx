import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/PageComponents/Dashboard';
import Login from './components/PageComponents/Login';
import SubmitArticle from './components/PageComponents/SubmitArticle';
import ArticleFarm from './components/PageComponents/ArticleFarm';
import Profile from './components/PageComponents/Profile';
import NewsFullPage from './components/showNews/NewsFullPage';

function App() {
	const [count, setCount] = useState<number>(0); // Example of useState with type annotation

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/submitArticle' element={<SubmitArticle />} />
				<Route path='/articleFarm' element={<ArticleFarm />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/newsFullpage' element={<NewsFullPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;