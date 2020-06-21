import React from 'react';
import './styles/pallete.css';
import './styles/globalStyles.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './pages/menu';
import Game from './pages/game';

function App() {
  return (
    // <Menu />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Menu} />
        <Route path="/game/:id" component={Game} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
