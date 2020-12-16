import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GENRE from './components/pages/GENRE';
import BEST from './components/pages/BEST';
import YEAR from './components/pages/YEAR';
import HOROR from './components/pages/HOROR';
import ROMANCE from './components/pages/ROMANCE';
import DRAMA from './components/pages/DRAMA';
import ANIME from './components/pages/ANIME';
import SEARCH from './components/pages/SEARCH';
import Documentaries from './components/pages/Documentaries';
import Comedy from './components/pages/Comedy';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/GENRE' component={GENRE} />
        <Route path='/BEST' component={BEST} />
        <Route path='/YEAR' component={YEAR} />
        <Route path='/HOROR' component={HOROR} />
        <Route path='/ROMANCE' component={ROMANCE} />
        <Route path='/DRAMA' component={DRAMA}/>
        <Route path='/ANIME' component={ANIME}/>
        <Route path='/SEARCH' component={SEARCH}/>
        <Route path='/Comedy' component={Comedy}/>
        <Route path='/Documentaries' component={Documentaries}/>
      </Switch>
    </Router>
  );
}

export default App;
