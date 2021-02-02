import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import Main from "./pages/Main"
import SingleNote from './pages/SingleNote'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/notes/:id">
            <SingleNote />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
