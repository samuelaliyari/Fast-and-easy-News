import { Link, useLocation } from "react-router-dom";

const MoreInfo = () => {
	const article = useLocation().state.article;
	console.log(article);
	return (
		<section>
			<Link to='/'>Go Back</Link>
			{
				<article className='article'>
					<img
						src={article.urlToImage}
						alt=''
					/>
					<h2>{article.title}</h2>
					<p>{article.description}</p>
					<p>{article.content}</p>
					<p>{article.author}</p>
				</article>
			}
		</section>
	);
};

export default MoreInfo;
