import './App.css';
import Header from './Components/Header';
import Recommended from './Components/Recommended';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
      <Header />
        <Switch>
        <Route path="/search/:searchparams">
            <h1>Search Page </h1>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <Recommended />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
