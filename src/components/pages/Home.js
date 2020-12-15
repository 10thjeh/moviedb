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
			<Row title='Trending Now' fetchUrl={requests.fetchTrending} />
			<Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
			<Row title='Animation' fetchUrl={requests.fetchAnimationMovies} />
			<Row title='Comedy' fetchUrl={requests.fetchComedyMovies} />
			<Row title='Horror' fetchUrl={requests.fetchHorrorMovies} />
			<Row title='Romance' fetchUrl={requests.fetchRomanceMovies} />
			<Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

//export default Home;
