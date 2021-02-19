import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import NewUser from './pages/NewUser'
import 'bootstrap/dist/css/bootstrap.min.css';


// Importing Pages
import Main from "./pages/Main"
import SingleNote from './pages/SingleNote'

// Importing Firebase for authentication
import fire from './utils/fire'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  fire.auth().onAuthStateChanged((user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false)
  })

  return (
    <div className="App">
      <Router>

        {!isLoggedIn
          ? (
            <>
              <Switch>
                <Route exact path="/">
                  <Login />
                </Route>
                <Route exact path="/new-user">
                  <NewUser />
                </Route>
              </Switch>
            </>
          )
          : (
            <>
              <Switch>
                <Route exact path={["/", "/new-user", '/notes']}>
                  <Main />
                </Route>
                <Route exact path="/notes/:id">
                  <SingleNote />



                </Route>
              </Switch>

            </>
          )

        }




      </Router>
    </div>
  );
}

export default App;
