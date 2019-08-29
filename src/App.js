import React from 'react'
import './App.css'

import { Route, Link, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import Room from './pages/Room'
import SingleRoom from './pages/SingleRoom'
import Navbar from './components/Navbar'

function App() {
  return (

    <>
    <Navbar />
      <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/rooms/' exact component={Room} />
    <Route path='/rooms/:id' exact component={SingleRoom}
     />
    <Route component={Error} />
    </Switch>
    </>

  );
}

export default App
