import './App.css';
import Header from './components/Header';
import Books from './components/books';
import Categories from './components/Categories';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Books />
          </Route>
          <Categories path="/categories" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
