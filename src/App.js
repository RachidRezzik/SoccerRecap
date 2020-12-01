import React from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom'
// IMPORTING COMPONENTS
import Home from './components/Home'
import Header from './components/Header'
import WorldCup from './components/WorldCup'
import ChampionsLeague from './components/ChampionsLeague'
import BallonDor from './components/BallonDor'
import NotFound from './components/NotFound'


const App = () => (
  <HashRouter>
  <h1 className="app_title">Soccer Recap (2000-2020)</h1>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/WorldCup" component={WorldCup} />
        <Route path="/ChampionsLeague" component={ChampionsLeague} />
        <Route path="/BallonDor" component={BallonDor} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </HashRouter>
);

export default App;
