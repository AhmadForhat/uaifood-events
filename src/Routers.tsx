import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Restaurants from './pages/Restaurants'

const Routers: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/restaurantes">
          <Restaurants />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routers
