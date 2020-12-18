import React from 'react';
import './Content.css';


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
				className = {`poster`}
				alt = "poster"
				>

			</img>

			<h1 class="judul">{this.state.name}</h1>
			<div class="row">
      <div class="col-3 col-m-12 col-sm-12">
			<img
				src = {`${base_url}${this.state.poster}`}
				className = {`gambar`}
				alt = "gambar"
				>
			</img>
			</div>
			<div class="col-8 col-m-12 col-sm-12">
			<div class="isi5">
			<p class="rating">Rating : {this.state.rating}</p>
			<p class="release">Release Date : {this.state.date}</p><br/>
			<p>Sinopsis : <br/>
			{this.state.overview}</p>
			</div>
			</div>

			</div>


			</>
		)
	}
}

//export default Home;
