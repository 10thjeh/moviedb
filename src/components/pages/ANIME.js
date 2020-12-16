import React from 'react';
import BannerGenre from './BannerGenre';
import requests from './requests';
import '../../App.css';

export default function ANIME() {
  return (
    <div className='app'>
    <BannerGenre fetchUrl={requests.fetchAnimationMovies}/></div>
  );
}
