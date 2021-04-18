import React from 'react';
import Header from './UI/header/header';
import { Switch, Route } from 'react-router-dom';
import Rules from './UI/rules/rules';
import Game from './UI/game/game';

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Rules} />
        <Route exact path="/game" component={Game} />
      </Switch>
    </div>
  );
}

export default App;
