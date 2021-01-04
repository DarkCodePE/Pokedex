import React from 'react';
import HomePoke from './HomePoke';
import SummaryPoke from './SummaryPoke';
import PokeContextProvider from '../contexts/pokemon/pokeContextProvider';
import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";

function App() {
  return (
    <PokeContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePoke} />
          <Route exact path="/summary" component={SummaryPoke} />
        </Switch>
      </Router>
    </PokeContextProvider>
  );
}

export default App;
