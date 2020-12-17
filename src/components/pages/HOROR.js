import React from 'react';
import BannerGenre from './BannerGenre';
import requests from './requests';
import '../../App.css';
import RowGenre from './RowGenre';
import Row from './Row';
import Carousel from "react-elastic-carousel";
import { Link } from 'react-router-dom';

export default function HOROR() {
  return (
    <div className='app'>
      <h1 className='home'>Horror</h1>
    <BannerGenre fetchUrl={requests.fetchHorrorMovies}/>
    <Row title='Horror' fetchUrl={requests.fetchHorrorMovies} isLargeRow />
    <RowGenre title='Horror' start='0' end ='4' fetchUrl={requests.fetchHorrorMovies} isLargeRow />
    <RowGenre start='5' end ='9' fetchUrl={requests.fetchHorrorMovies} isLargeRow />
    <RowGenre start='10' end ='14' fetchUrl={requests.fetchHorrorMovies} isLargeRow />
    <RowGenre start='15' end ='19' fetchUrl={requests.fetchHorrorMovies} isLargeRow />
    </div>
  );
}
