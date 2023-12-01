import { useEffect, useState } from "react";
import "./Home.css";
import Fetch from "./Fetch";

const Home = () => {
	const [searchData, setSearchData] = useState({
		input: "",
		language: "",
	});

	const changeData = () => {
		const userSearch = document.body.querySelector("#userSearch");
		const userLanguage = document.body.querySelector("#userLanguage");
		const search = userSearch.value;
		const language = userLanguage.value;
		setSearchData({ input: search, language: language });
		console.log(searchData);
	};

	useEffect(() => {}, [searchData]);
	return (
		<main>
			<h1>Breaking News</h1>
			<section className='searchArea'>
				<input
					type='text'
					id='userSearch'
					placeholder='Type to search...'
				/>
				<select
					name=''
					id='userLanguage'>
					<option value=''>select your language</option>
					<option value='ar'>Arabic</option>
					<option value='de'>German</option>
					<option value='en'>English</option>
					<option value='es'>Spanish</option>
					<option value='fr'>French</option>
					<option value='he'>Hebrew</option>
					<option value='it'>Italian</option>
					<option value='nl'>Dutch</option>
					<option value='no'>Norwegian</option>
					<option value='pt'>Portuguese</option>
					<option value='ru'>Russian</option>
					<option value='sv'>Swedish</option>
					<option value='ud'>Udmurt</option>
					<option value='zh'>Chinese</option>
				</select>
				<button onClick={changeData}>search</button>
			</section>
			<hr />
			{searchData.input !== "" ? (
				<Fetch searchData={searchData} />
			) : (
				console.log("searchdata not found")
			)}
		</main>
	);
};

export default Home;
