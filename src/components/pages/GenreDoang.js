import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Banner.css';

function GenreDoang({title,fetchUrl}) {
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

	return (

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
			<div className='IsiGambar'  >
				
			</div>

			<div className='Bayangan' />
	
		</header>
				
	);
}

export default GenreDoang;