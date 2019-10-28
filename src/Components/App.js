import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
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
      {/* <PrivateRouteWithTemplate path="/loading" exact component={LoadingPage} /> */}
    </Switch>
  )
}

export default App
