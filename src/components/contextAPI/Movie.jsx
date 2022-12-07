import React from 'react';
import { useContext } from 'react';
import UserContext from '../../contexts/UserProvider';

export const Movie = ({ movie }) => {
	const imgStyles = {
		height: '260px',
		objectFit: 'cover',
		objectPosition: 'center',
	};
	const { addFavorite, user } = useContext(UserContext);

	const isFavorite = user?.favoriteMovies?.includes(movie.id);
	return (
		<div className='card'>
			<img src={`${movie.imageUrl}`} style={imgStyles} alt={movie.title}></img>
			<div className='card-body'>
				<h4>{movie.title}</h4>
				{user?.id && (
					<button
						onClick={() => addFavorite(movie.id)}
						className={`btn ${isFavorite ? 'btn-success' : 'btn-outline-primary'}`}>
						Favoritos
					</button>
				)}
			</div>
		</div>
	);
};
