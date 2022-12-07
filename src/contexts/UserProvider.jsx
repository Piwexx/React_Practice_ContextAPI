import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const UserContext = createContext();

const Initialuser = {
	id: 1,
	name: 'Juan',
	favoriteMovies: [1],
};

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(Initialuser);

	const addFavorite = movieId => {
		const isFavorite = user.favoriteMovies.includes(movieId);
		const favoriteMovies = isFavorite
			? user.favoriteMovies.filter(favMovId => favMovId !== movieId)
			: [...user.favoriteMovies, movieId];

		setUser({
			...user,
			favoriteMovies,
		});
	};
	const login = () => {
		setUser(Initialuser);
	};
	const logout = () => {
		setUser(null);
	};
	const data = { user, login, logout, addFavorite };
	return (
		<>
			<UserContext.Provider value={data}>{children}</UserContext.Provider>
		</>
	);
};

export default UserContext;
