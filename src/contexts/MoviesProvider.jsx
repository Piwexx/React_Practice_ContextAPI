import React from 'react';
import { createContext } from 'react';
import InitialMovies from '../data/InitialMovies';

const MovieContext = createContext();

export const MoviesProvider = ({ children }) => {

	const data = { movies: InitialMovies };
	return (
		<>
			<MovieContext.Provider value={data}>{children}</MovieContext.Provider>
		</>
	);
};

export default MovieContext;
