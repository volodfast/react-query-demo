import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// components
import Header from 'modules/core/components/Header';
import CharacterList from 'pages/CharacterList';
import Home from 'pages/Home';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/characters">
          <CharacterList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
