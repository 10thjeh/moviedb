import React from 'react';
//import '../../App.css';
import GenreDoang from './GenreDoang';
import requests from './requests';
import { Link } from 'react-router-dom';


export default function GENRE() {
  return (
    
  <div className='app'>
    <Link
								to="/ROMANCE"
                style={{textDecoration: "none"}}>
    <GenreDoang title='Romance' fetchUrl={requests.fetchRomanceMovies}/></Link>
    <Link
								to="/ANIME"
                style={{textDecoration: "none"}}>
    <GenreDoang title='Animation' fetchUrl={requests.fetchAnimationMovies}/></Link>
    <Link
								to="/Comedy"
                style={{textDecoration: "none"}}>
    <GenreDoang title='Comedy' fetchUrl={requests.fetchComedyMovies}/></Link>
    <Link
								to="/HOROR"
                style={{textDecoration: "none"}}>
    <GenreDoang title='Horror' fetchUrl={requests.fetchHorrorMovies}/></Link>
    <Link
								to="/Documentaries"
                style={{textDecoration: "none"}}>
    <GenreDoang title='Documentary' fetchUrl={requests.fetchDocumentaries}/></Link>
    <Link
								to="/Drama"
                style={{textDecoration: "none"}}>
    <GenreDoang title='Drama' fetchUrl={requests.fetchDramaMovies}/></Link>
    </div>
  );

}
