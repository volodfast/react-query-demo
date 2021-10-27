import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
// components
import Header from 'modules/core/components/Header';
import CharacterListPage from 'pages/CharacterListPage';
import HomePage from 'pages/HomePage';
import CharacterShowPage from 'pages/CharacterShowPage';

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/characters" exact>
            <CharacterListPage />
          </Route>
          <Route path="/characters/:id" exact>
            <CharacterShowPage />
          </Route>
        </Switch>
        <ReactQueryDevtools />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
