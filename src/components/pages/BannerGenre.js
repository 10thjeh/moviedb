import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Banner.css';
import { Link } from 'react-router-dom';

function BannerGenre({title,fetchUrl}) {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovie(request.data.results[
				Math.floor(Math.random() * request.data.results.length - 1)
			]);
			return request;
		}
		fetchData();
	}, [fetchUrl]);

	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + '...' : str;
	}
	
		const handleClick = (movie) => {
		console.log(movie?.title || movie?.name || movie?.original_name);
		localStorage.setItem('movieid',movie.id);
		localStorage.setItem('movieName',movie.name? movie.name : movie.title);
		localStorage.setItem('backdrop',movie.backdrop_path);
		localStorage.setItem('poster',movie.poster_path);
		localStorage.setItem('overview',movie.overview);
		localStorage.setItem('genre', movie.genre_ids);
		localStorage.setItem('rating', movie.vote_average);
		localStorage.setItem('date',  movie.first_air_date?movie.first_air_date : movie.release_date);
	};

	return (
			<Link to="/Content" style={{textDecoration: "none"}}>
			<header
			className='GambarUtama'
			style={{
				backgroundSize: 'cover',
				backgroundImage: `url(
          "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
				backgroundPosition: 'center center'
					
			}}
		>	

		<h1 className='genre__title'>{title}</h1>
			<div className='IsiGambar' onMouseDown={() => handleClick(movie)} >
				<h1 className='Judul'>
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<br></br>
				<h1 className='Deskripsi'>
					{truncate(movie?.overview, 100)}
				</h1>
			</div>

			<div className='Bayangan' />
	
		</header>
		</Link>
	);
}

export default BannerGenre;
