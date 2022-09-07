import React from 'react';
import './main.css';
const Article = ({ article }) => {
	return (
		<article>
			<h4 className='article-title'>{article.title}</h4>
			<p className='article-body'>{article.body}</p>
		</article>
	);
};

export default Article;
