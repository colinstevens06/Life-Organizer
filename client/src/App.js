import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing Pages
import Main from "./pages/Main"
import SingleNote from './pages/SingleNote'
import Login from './pages/Login'
import NewUser from './pages/NewUser'

// Importing Firebase for authentication
import fire from './utils/fire'
import { AuthProvider } from './context/AuthContext';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)

  // fire.auth().onAuthStateChanged((user) => {
  //   return user ? setIsLoggedIn(true) : setIsLoggedIn(false)
  // })

  return (
    <div className="App">

      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Main} />
            <PrivateRoute exact path="/notes/:id" component={SingleNote} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/new-user" component={NewUser} />


          </Switch>



          {/* {!isLoggedIn
            ? (
              <>
                <Switch>
                  <Route exact path={["/", "/login"]}>
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

          } */}




        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
