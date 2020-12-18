import React, { Component } from 'react';
import './SEARCH';
import TVRow from './TVRow.js'
import $ from 'jquery'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}
     console.log("This is my initializer")
    this.performSearch("")
  }

  performSearch(searchTerm) {
    console.log("Perform search using moviedb")
    const urlString = "https://api.themoviedb.org/3/search/tv?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        // console.log(searchResults)
        const results = searchResults.results
        // console.log(results[0])

        var movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          // console.log(movie.poster_path)
          const movieRow = <TVRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }

  render() {
    return (
      <div class="Search">
        <input style={{
          fontSize: 24,
          width: "99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }} onChange={this.searchChangeHandler.bind(this)} placeholder="Search TV"/>

        {this.state.rows}

      </div>
    );
  }
}

export default App;
