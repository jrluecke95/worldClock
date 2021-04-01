import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {
  const [ timezones, setTimezones ] = useState([])
  return (
    <Router>
      <div className="App">
        <h1>World Clock</h1>
        <Switch>
          <Route path='/' exact>
            <Home setTimezones={setTimezones} timezones={timezones}></Home>
          </Route>
          <Route path='/timezones' exact>
            test2
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
