import React from 'react';
//import '../../App.css';
import BannerGenre from './BannerGenre';
import requests from './requests';
import { Link } from 'react-router-dom';


export default function Services() {
  return (
    
  <div className='app'>
    <Link
								to="/ROMANCE"
                style={{textDecoration: "none"}}>
    <BannerGenre title='Romance' fetchUrl={requests.fetchRomanceMovies}/></Link>
    <Link
								to="/ANIME"
                style={{textDecoration: "none"}}>
    <BannerGenre title='Animation' fetchUrl={requests.fetchAnimationMovies}/></Link>
    <Link
								to="/Comedy"
                style={{textDecoration: "none"}}>
    <BannerGenre title='Comedy' fetchUrl={requests.fetchComedyMovies}/></Link>
    <Link
								to="/HOROR"
                style={{textDecoration: "none"}}>
    <BannerGenre title='Horror' fetchUrl={requests.fetchHorrorMovies}/></Link>
    <Link
								to="/Documentaries"
                style={{textDecoration: "none"}}>
    <BannerGenre title='Documentary' fetchUrl={requests.fetchDocumentaries}/></Link>
    <Link
								to="/Drama"
                style={{textDecoration: "none"}}>
    <BannerGenre title='Drama' fetchUrl={requests.fetchDramaMovies}/></Link>
    </div>
  );

}
