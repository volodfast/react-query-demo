import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// components
import CharacterList from 'modules/characters/components/CharacterList';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="characters">Characters</Link>
          </li>
        </ul>
      </nav>
      <div>App wrapper</div>
      <Switch>
        <Route path="/" exact>
          <div>Home page</div>
        </Route>
        <Route path="/characters">
          <CharacterList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
