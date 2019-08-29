import React from 'react'
import './App.css'

import { Route, Link, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import Room from './pages/Room'
import SingleRoom from './pages/SingleRoom'

function App() {
  return (
    <>
    <Route path='/' exact component={Home} />
    <Route path='/room/' component={Room} />
    <Route path='/single-room' component={SingleRoom} />
    </>
  );
}

export default App
