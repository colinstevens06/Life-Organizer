import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing Pages
import Main from "./pages/Main"
import SingleNote from './pages/SingleNote'
import Login from './pages/Login'
import NewUser from './pages/NewUser'

// Importing Firebase for authentication
import { AuthProvider } from './context/AuthContext';
import NavBar from './components/global/NavBar';

function App() {


  return (
    <div>

      <Router>
        <AuthProvider>
          <NavBar />
          <Switch>
            <PrivateRoute exact path="/" component={Main} />
            <PrivateRoute exact path="/notes/:id" component={SingleNote} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/new-user" component={NewUser} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
