import React from 'react';
import BannerGenre from './BannerGenre';
import requests from './requests';
import '../../App.css';
import RowGenre from './RowGenre';
import Row from './Row';

export default function Comedy() {
  return (
    <div className='app'>

    <BannerGenre fetchUrl={requests.fetchComedyMovies}/>
    <Row title='Comedy' fetchUrl={requests.fetchComedyMovies} isLargeRow />
    <RowGenre title='Comedy' start='0' end ='4' fetchUrl={requests.fetchComedyMovies} isLargeRow />
    <RowGenre start='5' end ='9' fetchUrl={requests.fetchComedyMovies} isLargeRow />
    <RowGenre start='10' end ='14' fetchUrl={requests.fetchComedyMovies} isLargeRow />
    <RowGenre start='15' end ='19' fetchUrl={requests.fetchComedyMovies} isLargeRow /></div>
  );
}
