import React, { useEffect, useState } from 'react';
import axios from './axios';
import './RowGenre.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { Link } from 'react-router-dom';

const base_url = 'https://image.tmdb.org/t/p/original/';

const RowGenre = ({ title, fetchUrl, isLargeRow = false,start,end}) => {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState('');

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchUrl]);

	const handleClick = (movie) => {
		localStorage.setItem('movieid',movie.id);
		localStorage.setItem('movieName',movie.name? movie.name : movie.title);
		localStorage.setItem('backdrop',movie.backdrop_path);
		localStorage.setItem('poster',movie.poster_path);
		localStorage.setItem('overview',movie.overview);
		localStorage.setItem('genre', movie.genre_ids);
		localStorage.setItem('rating', movie.vote_average);
		localStorage.setItem('date', movie.first_air_date?movie.first_air_date : movie.release_date);
	};

	const opts = {
		height: '390',
		width: '100%',
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1
		}
	};

	return (
			<>
		<div className='row'>
			<h2>{title}</h2>
			<div className='row__posters'>
				{movies.slice(start,end).map(
					(movie) =>
						((isLargeRow && movie.poster_path) ||
							(!isLargeRow && movie.backdrop_path)) && (
								<Link to="/Content">
							<img 
								onMouseDown={() => handleClick(movie)}
								className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
								key={movie.id}
								src={`${base_url}${
									isLargeRow ? movie.poster_path : movie.backdrop_path
								}`}
								alt={movie.name}
								/></Link>
								
						)
						
							
				)}
				
				
				
			</div> 
			</div>
					</>
	);
};

export default RowGenre;