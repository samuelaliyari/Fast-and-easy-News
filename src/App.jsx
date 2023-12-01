import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MoreInfo from "./pages/MoreInfo";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/info/:title'
						element={<MoreInfo />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
