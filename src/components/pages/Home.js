import React from 'react';
import '../../App.css';
import requests from './requests';
import Banner from './Banner';
import Row from './Row';

export default function Home() {
  return (
    <div className='app'>
      <Banner />

			<Row
				title='NETFLIX ORIGINALS'
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow
			/>
			<Row title='Trending Now' fetchUrl={requests.fetchTrending} 
			isLargeRow/>
			<Row title='Top Rated' fetchUrl={requests.fetchTopRated} 
			isLargeRow/>
			<Row title='Animation' fetchUrl={requests.fetchAnimationMovies}
			isLargeRow/>
			<Row title='Comedy' fetchUrl={requests.fetchComedyMovies} isLargeRow />
			<Row title='Horror' fetchUrl={requests.fetchHorrorMovies} isLargeRow />
			<Row title='Romance' fetchUrl={requests.fetchRomanceMovies} isLargeRow />
			<Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} isLargeRow />
    </div>
  );
}

//export default Home;
