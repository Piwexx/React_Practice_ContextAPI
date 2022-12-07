import { useState } from 'react';
import { Navbar } from './components/contextAPI/Navbar';
import { MovieList } from './components/contextAPI/MovieList';
import UserContext from './contexts/UserContext';
import { UserProvider } from './contexts/UserProvider';
import { MoviesProvider } from './contexts/MoviesProvider';

// const Initialuser = {
// 	id: 1,
// 	name: 'Juan',
// 	favoriteMovies: [1, 2, 3],
// };
function App() {
	/**
	 *Context UserContext
	 */

	// const [user, setUser] = useState(Initialuser);
	// const login = () => {
	// 	setUser(Initialuser);
	// };
	// const logout = () => {
	// 	setUser(null);
	// };
	// const data = { user, login, logout };

	return (
		<>
			{/* 
		SI algo de data cambia , todo lo que esta dentro 
		del contexto sera renderizado nuevamente 

		<UserContext.Provider value={data}>
				<Navbar />
				<MovieList />
		</UserContext.Provider>
			*/}

			<UserProvider>
				<MoviesProvider>
					<Navbar />
					<MovieList />
				</MoviesProvider>
			</UserProvider>
		</>
	);
}

export default App;
