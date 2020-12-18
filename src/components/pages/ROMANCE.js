import React from 'react';
import '../../App.css';
import requests from './requests';
import BannerGenre from './BannerGenre';
import RowGenre from './RowGenre';
import Carousel from "react-elastic-carousel";
import { Link } from 'react-router-dom';
import Row from './Row';

export default function ROMANCE() {
  return (
    <div className='app'>
      
    <BannerGenre fetchUrl={requests.fetchRomanceMovies}/>
    <Row title='Romance' fetchUrl={requests.fetchRomanceMovies} isLargeRow />

    <RowGenre title='Romance' start='0' end ='4' fetchUrl={requests.fetchRomanceMovies} isLargeRow />
    <RowGenre start='5' end ='9' fetchUrl={requests.fetchRomanceMovies} isLargeRow />
    <RowGenre start='10' end ='14' fetchUrl={requests.fetchRomanceMovies} isLargeRow />
    <RowGenre start='15' end ='19' fetchUrl={requests.fetchRomanceMovies} isLargeRow />

  </div>
  );
}

