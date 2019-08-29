import React from 'react'
import './App.css'

import Home from './pages/Home'
import Error from './pages/Error'
import Room from './pages/Room'
import SingleRoom from './pages/SingleRoom'

function App() {
  return (
    <React.Fragment>
      <Home />
      <Room />
      <SingleRoom />
      <Error />
    </React.Fragment>
  );
}

export default App
