import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'

import Home from './containers/Home'
import Contact from './containers/Contact'
import Company from './containers/Company'

export const routes = (
  <div>
      <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='home' component={Home}/>
          <Route path='contact' component={Contact}/>
          <Route path='company' component={Company}/>
      </Route>
  </div>
)
