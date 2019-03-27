import React from 'react'
import { BrowserRouter as Redirect, Router, Route, Switch } from "react-router-dom"
import history from './components/history'

import './css/main.css'

import Home from './pages/Home'
import NoMatch from './pages/404'

const App = () => (
  <Router history={history} component={App}>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
)

export default App