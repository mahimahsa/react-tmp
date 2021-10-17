import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import loadable from '@loadable/component'

import PrivateRoute from './PrivateRoute'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
const PinActivation = loadable(() => import('src/pages/modern/PinActivation'))






export const MainRouter = () => {


  return (
      <>
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/login' exact component={Login} />
        <PrivateRoute path='/modern/pin-activation' component={PinActivation} />
        <Route component={NotFound}/>
    </Switch>
    </>
  )
}
