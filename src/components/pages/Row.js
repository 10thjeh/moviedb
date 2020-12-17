import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';
import './Row.css';
import Carousel from "react-elastic-carousel";
import { Link } from 'react-router-dom';
//import YouTube from 'react-youtube';
//import movieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original/';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
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
		/*if (trailerUrl) {
			setTrailerUrl('');
		} else {
			movieTrailer(movie?.name || '')
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search);
					setTrailerUrl(urlParams.get('v'));
				})
				.catch((e) => console.log(e));
		}*/	
		console.log(movie?.title || movie?.name || movie?.original_name);
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
		
		<div className='row'>
			<h2>{title}</h2>
			<div className='row__posters'>
				<Carousel itemsToShow={5} enableAutoPlay > 
				{movies.map(
					(movie) =>
						
						((isLargeRow && movie.poster_path) ||
							(!isLargeRow && movie.backdrop_path)) && (
							<Link
								to={{
									pathname: "/Content",
									state: {movie}
									}}
							>
							<img
								onClick={() => handleClick(movie)}
								className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
								key={movie.id}
								src={`${base_url}${
									isLargeRow ? movie.poster_path : movie.backdrop_path
								}`}
								alt={movie.name}
							/>
							</Link>
						)
						
				)}
				
				</Carousel>	
				
			</div>
								
		</div>
	);
};

export default Row;
