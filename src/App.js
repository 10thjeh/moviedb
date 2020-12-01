import logo from './logo.svg';
import './App.css';
import React from 'react';


// Commit Test

class Fetch extends React.Component{
  componentDidMount(){
   const urlFetch = fetch('https://api.themoviedb.org/3/movie/550?api_key=ef3b7e9dfef3057a8dba1691a414348c')
   urlFetch.then( res => {
      if(res.status === 200)
         return res.json()
   }).then( resJson => {
      console.log(resJson);
   })
  }
  render(){
    return (
      <h1>Hi</h1>
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
