import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Chat from './pages/Chat';
import Login from './pages/Login';
import UserDeatil from './pages/UserDetail';

function Routes() {
  return (
    <Router>
        <Switch>
        <Route path="/"  exact component={Login}></Route>
        <Route path="/chat" component={Chat}></Route>
        <Route path="/user/:id" component={UserDeatil}></Route>
        </Switch>
    </Router>
  )
}

export default Routes
