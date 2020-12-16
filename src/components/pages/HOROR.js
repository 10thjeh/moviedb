import React from 'react';
import BannerGenre from './BannerGenre';
import requests from './requests';
import '../../App.css';
import Row from './Row';

export default function HOROR() {
  return (
    <div className='app'>
    <BannerGenre fetchUrl={requests.fetchHorrorMovies}/>
    <Row title='Horror' fetchUrl={requests.fetchHorrorMovies} isLargeRow />
    </div>
  );
}
