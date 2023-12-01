import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const Fetch = (props) => {
	const userData = props.searchData;
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch(
			`https://newsapi.org/v2/everything?q=${userData.input}&language=${userData.language}&apiKey=c8d8352106614dc09c4b532f88f6354e`,
		)
			.then((response) => response.json())
			.then((data) => setData({ ...data }))
			.then(console.log("!!!!!Fetched!!!!"))
			.catch((err) => console.log(err));
	}, [userData]);
	return (
		<section>
			{data
				? data.articles.map((article) => (
						<article
							key={uuidv4()}
							className='article'>
							<h2>{article.title}</h2>
							<img
								src={article.urlToImage}
								alt=''
							/>
							<p>{article.description}</p>
							<Link
								to={`/info/${article.title}`}
								state={{ article }}>
								read more
							</Link>
						</article>
				  ))
				: console.log("data loading")}
		</section>
	);
};

export default Fetch;
