import React from 'react';
import { useContext } from 'react';
import UserContext from '../../contexts/UserProvider';

export const Navbar = () => {
	const { user, login, logout } = useContext(UserContext);
	return (
		<>
			<nav className='navbar navbar-dark bg-dark'>
				<div className='container'>
					<span className='navbar-brand'>
						<h2>Hola {user ? ` ${user.name}` : 'Bienvenid@'} </h2>
					</span>
					{user ? (
						<button onClick={logout} className='btn btn-primary'>
							Cerrar Sesión
						</button>
					) : (
						<button onClick={login} className='btn btn-primary'>
							Ingresar
						</button>
					)}
				</div>
			</nav>
		</>
	);
};
