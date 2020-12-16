import React from 'react';
import '../../App.css';
import requests from './requests';
import BannerGenre from './BannerGenre';
import Row from './Row';

export default function ROMANCE() {
  return (
    <div className='app'>
    <BannerGenre fetchUrl={requests.fetchRomanceMovies}/>


    <Row title='Romance' fetchUrl={requests.fetchRomanceMovies} isLargeRow />
  </div>
  );
}
