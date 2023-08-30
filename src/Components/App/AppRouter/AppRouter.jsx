import { Routes, Route } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import { Posters } from '../../Pages/Posters/Posters';
import { PosterList } from '../../Pages/Posters/PosterList/PosterList';
import { PosterDetails } from '../../Pages/Posters/PosterDetails/PosterDetails';
import { Login } from '../../Pages/Login/Login';
import Cart from '../../Pages/Cart/Cart';
import About from '../../Pages/About/About';
import Contact from '../../Pages/Contact/Contact';

const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/posters" element={<Posters />}>
				<Route path=":genre" element={<PosterList />} />
				<Route path=":genre/:poster" element={<PosterDetails />} />
			</Route>
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	);
}

export default AppRouter;