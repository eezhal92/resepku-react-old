import React from 'react'
import App from './App'
import Home from './components/Home'
import About from './components/About'
import Staff from './components/Staff'
import Single from './components/Single'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { Route, IndexRoute } from 'react-router'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/about" component={About}>
      <Route path="/about/:nick" component={Staff} />
    </Route>
    <Route path="/recipes/:slug" component={Single} />
    <Route path="/sign-in" component={SignIn} />
    <Route path="/sign-up" component={SignUp} />
  </Route>
)

export default routes
