import React from 'react';
import { useContext } from 'react';
import MovieContext from '../../contexts/MoviesProvider';
import { Movie } from './Movie';

export const MovieList = () => {
	const { movies } = useContext(MovieContext);

	return (
		<div className='container'>
			<div className='row'>
				{movies.map(movie => (
					<div className='col-md-4 mb-5'>
						<Movie key={movie.id} movie={movie} />
					</div>
				))}
			</div>
		</div>
	);
};
