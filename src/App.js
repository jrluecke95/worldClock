import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <form>
          <h1>World Clock</h1>
          <Switch>
            <Route path='/' exact>
              <Home></Home>
            </Route>
            <Route path='/timezones' exact>
              test2
            </Route>
          </Switch>
        </form>
      </div>
    </Router>
    
  );
}

export default App;
