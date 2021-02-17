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
// import { set } from 'mongoose';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [globalUID, setGlobalUID] = useState()
  const [allUserNotes, setAllUserNotes] = useState()

  fire.auth().onAuthStateChanged((user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false)
  })

  const updateGlobalUID = (input) => {
    console.log("user updated!", input)
    setGlobalUID(input)
  }

  const updateGlobalUserNotes = (input) => {
    console.log("*** Global User Notes Updated!", input)
    setAllUserNotes(input)
  }



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
                  <Main
                    updateGlobalUID={updateGlobalUID}
                    updateGlobalUserNotes={updateGlobalUserNotes}
                  />
                </Route>
                <Route exact path="/notes/:id">
                  {allUserNotes &&
                    <SingleNote
                      uid={globalUID}
                      allNotes={allUserNotes}
                    />

                  }

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
