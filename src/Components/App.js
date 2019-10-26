import React from 'react'
import { Switch } from 'react-router-dom'
import Home from 'Components/pages/Home'
import Product from 'Components/pages/Product'
import PrivateRouteWithTemplate from 'Components/organisms/PrivateRouteWithTemplate'

const App = () => {
  return (
    <Switch>
      <PrivateRouteWithTemplate path="/home" exact component={Home} />
      <PrivateRouteWithTemplate path="/product" exact component={Product} />
    </Switch>
  )
}

export default App
