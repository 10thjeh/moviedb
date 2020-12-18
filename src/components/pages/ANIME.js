import React from 'react';
import BannerGenre from './BannerGenre';
import requests from './requests';
import '../../App.css';
import RowGenre from './RowGenre';
import Carousel from "react-elastic-carousel";
import Row from './Row';
import { Link } from 'react-router-dom';

export default function ANIME() {
  return (
    <div className='app'>

    <BannerGenre fetchUrl={requests.fetchAnimationMovies}/>
    <Row title='Animation' fetchUrl={requests.fetchAnimationMovies} isLargeRow/>
     <RowGenre title='Comedy' start='0' end ='4' fetchUrl={requests.fetchAnimationMovies} isLargeRow />
     <RowGenre start='5' end ='9' fetchUrl={requests.fetchAnimationMovies} isLargeRow />
     <RowGenre start='10' end ='14' fetchUrl={requests.fetchAnimationMovies} isLargeRow />
     <RowGenre start='15' end ='19' fetchUrl={requests.fetchAnimationMovies} isLargeRow />
     </div>
  );
}
