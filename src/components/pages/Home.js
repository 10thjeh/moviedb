import React from 'react';
import '../../App.css';
import requests from './requests';
import Banner from './Banner';
import Row from './Row';
import {Bootstrap, Grid, Col} from 'react-bootstrap';

export default function Home() {
	return (
		<>
    <div className='app'>

		<h1 className='home'>Boba Theater</h1>
      <Banner />
			<div className='baba'>
			<Row
				title='NETFLIX ORIGINALS'
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow
			/>
			<Row title='Trending Now' fetchUrl={requests.fetchTrending} isLargeRow/>
			<Row title='Top Rated' fetchUrl={requests.fetchTopRated} isLargeRow/>
			<Row title='Animation' fetchUrl={requests.fetchAnimationMovies}isLargeRow/>
			<Row title='Comedy' fetchUrl={requests.fetchComedyMovies} isLargeRow />
			<Row title='Horror' fetchUrl={requests.fetchHorrorMovies} isLargeRow />
			<Row title='Romance' fetchUrl={requests.fetchRomanceMovies} isLargeRow />
			<Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} isLargeRow />
			<Row title='Drama' fetchUrl={requests.fetchDramaMovies} isLargeRow />
    		</div>
	</div>	
			  </>
  );

  
}


//export default Home;
