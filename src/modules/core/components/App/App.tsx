import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// components
import Header from 'modules/core/components/Header';
import CharacterListPage from 'pages/CharacterListPage';
import HomePage from 'pages/HomePage';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/characters">
          <CharacterListPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
