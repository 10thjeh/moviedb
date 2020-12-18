import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Row.css';
import Carousel from "react-elastic-carousel";
import { Link } from 'react-router-dom';

const base_url = 'https://image.tmdb.org/t/p/original/';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchUrl]);

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
								onMouseDown={() => handleClick(movie)}
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
