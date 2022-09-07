import React, { useEffect, useState } from 'react';
import './main.css';
import { data } from '../../data';
import Article from '../Article';

const News = () => {
	const [articles, setArticles] = useState('');

	useEffect(() => {
		let temp = [];
		data.map((article) => {
			temp.push(article);
			setArticles(temp);
		});
	}, []);

	return (
		<div className='news-feed'>
			{articles &&
				articles.map((article, index) => {
					return <Article article={article} key={index} />;
				})}
		</div>
	);
};

export default News;
