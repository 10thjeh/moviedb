import React from 'react';
//import '../../App.css';
import BannerGenre from './BannerGenre';
import requests from './requests';

export default function Services() {
  return (
    
  <div className='app'>
    <BannerGenre title='Romance' fetchUrl={requests.fetchRomanceMovies}/>
    <BannerGenre title='Animation' fetchUrl={requests.fetchAnimationMovies}/>
    <BannerGenre title='Comedy' fetchUrl={requests.fetchComedyMovies}/>
    <BannerGenre title='Horror' fetchUrl={requests.fetchHorrorMovies}/>
    <BannerGenre title='Documentary' fetchUrl={requests.fetchDocumentaries}/>

    </div>
  );

}
