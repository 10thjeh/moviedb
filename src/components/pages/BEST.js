import React from 'react';
import BannerGenre from './BannerGenre';
import requests from './requests';
import '../../App.css';
import RowGenre from './RowGenre';
import Carousel from "react-elastic-carousel";

export default function BEST() {
  return (
    <div className='app'>
      <h1 className='BEST'>BEST RATING</h1>
      <BannerGenre fetchUrl={requests.fetchTopRated}/>
    <Carousel>
    <RowGenre title='Best Rating' start='0' end ='4' fetchUrl={requests.fetchTopRated} isLargeRow />
    <RowGenre start='5' end ='9' fetchUrl={requests.fetchTopRated} isLargeRow />
    <RowGenre start='10' end ='14' fetchUrl={requests.fetchTopRated} isLargeRow />
    <RowGenre start='15' end ='19' fetchUrl={requests.fetchTopRated} isLargeRow />
    </Carousel>
    </div>

  );

}
