import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Row.css';
import movieTrailer from 'movie-trailer';
import Button from '@material-ui/core/Button';

const base_url = 'https://image.tmdb.org/t/p/original/';
const onClickURL = 'https://www.themoviedb.org/tv/';

const API_KEY = '1b5adf76a72a13bad99b8fc0c68cb085';

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
		window.open(onClickURL+movie.id);
		console.log(movie);
		console.log(movie.title);
		console.log(title);
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
				{movies.slice(0,4).map(
					(movie) =>
						((isLargeRow && movie.poster_path) ||
							(!isLargeRow && movie.backdrop_path)) && (
							<img
								onClick={() => handleClick(movie)}
								className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
								key={movie.id}
								src={`${base_url}${
									isLargeRow ? movie.poster_path : movie.backdrop_path
								}`}
								alt={movie.title}
							/>
						)
				)}
			</div>
			<Button variant="contained" color="secondary" disableElevation>More</Button>

		</div>
	);
};

export default Row;

// old handleClick
// const handleClick = (movie) => {
// 	if (trailerUrl) {
// 		setTrailerUrl('');
// 	} else {
// 		movieTrailer(movie?.name || '')
// 			.then((url) => {
// 				const urlParams = new URLSearchParams(new URL(url).search);
// 				setTrailerUrl(urlParams.get('v'));
// 			})
// 			.catch((e) => console.log(e));
// 	}
// };
