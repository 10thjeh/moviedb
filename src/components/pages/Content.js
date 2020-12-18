import React, { Component, Props, ReactDOM } from 'react';
import './Content.css';
import requests from './requests';
import Banner from './Banner';
import Row from './Row';


const base_url = 'https://image.tmdb.org/t/p/original/';

export default class Content extends React.Component{
	constructor(props) {
	    super(props);
			this.state = {
				name : window.localStorage.getItem("movieName"),
				genre : window.localStorage.getItem("genre"),
				overview : window.localStorage.getItem("overview"),
				backdrop : window.localStorage.getItem("backdrop"),
				poster : window.localStorage.getItem("poster"),
				rating : window.localStorage.getItem("rating"),
				date : window.localStorage.getItem("date")
			}
	  }

	render(){
		return(
			<>
	
				<img
				src = {`${base_url}${this.state.backdrop}`}
				className = {`poster`}>
			</img>
	
			<h1 class="judul">{this.state.name}</h1>
			<img
				src = {`${base_url}${this.state.poster}`}
				className = {`gambar`}>
			</img>
			<div class="isi3">
			<p class="rating">Rating : {this.state.rating}</p>
			<p class="release">Release Date : {this.state.date}</p><br/>
			<p>Sinopsis : <br/>
			{this.state.overview}</p>
			
			</div>

		
			</>
		)
	}
}

//export default Home;
