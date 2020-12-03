import logo from './logo.svg';
import './App.css';
import React from 'react';

let imgBaseURL = 'https://image.tmdb.org/t/p/w500';

class Fetch extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      overview: '',
      image: ''
    }
  }

  componentDidMount(){
   const urlFetch = fetch('https://api.themoviedb.org/3/movie/550?api_key=ef3b7e9dfef3057a8dba1691a414348c')
   urlFetch.then( res => {
      if(res.status === 200)
         return res.json()
   }).then( resJson => {
      console.log(resJson);
      console.log(typeof(resJson));
      console.log(resJson.original_title);
      this.setState({title: resJson.original_title,overview: resJson.overview,image: imgBaseURL+resJson.backdrop_path})
   })
  }
  render(){
    return (
      <>
      <h1>{this.state.title}</h1>
      <p>{this.state.overview}</p>
      <img src={this.state.image}></img>
      </>
    )
  }
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Fetch />
      </header>
    </div>
  );
}

export default App;
