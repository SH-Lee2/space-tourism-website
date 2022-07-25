import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Destination from "./pages/destination/destination";
import Crew from "./pages/crew/crew";
import Technology from "./pages/technology/technology";
import SharedLayout from "./pages/sharedLayout/sharedLayout";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="destination" element={<Destination />} />
					<Route path="crew" element={<Crew />} />
					<Route path="Technology" element={<Technology />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
