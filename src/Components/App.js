import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import PrivateRouteWithTemplate from 'Components/organisms/PrivateRouteWithTemplate'
import { Routes } from './routes'

const App = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <PrivateRouteWithTemplate
        path="/home"
        exact
        component={Routes.asyncHome}
      />
      <PrivateRouteWithTemplate
        path="/product"
        exact
        component={Routes.asyncProduct}
      />
      <Route path="/login" exact component={Routes.asyncLogin} />
      {/* <PrivateRouteWithTemplate path="/loading" exact component={LoadingPage} /> */}
    </Switch>
  )
}

export default App
