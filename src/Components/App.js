import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'Components/pages/Home'
import Product from 'Components/pages/Product'

const App = () => {
  return (
    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/product" exact component={Product} />
    </Switch>
  )
}

export default App
