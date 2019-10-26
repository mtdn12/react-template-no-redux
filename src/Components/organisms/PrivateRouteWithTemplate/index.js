import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import Template from 'Components/templates/AuthTemplate'

const PrivateRouteWithTemplate = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location, history, ...props }) => {
        return (
          <Template>
            <Component location={location} history={history} {...props} />
          </Template>
        )
      }}
    />
  )
}

PrivateRouteWithTemplate.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PrivateRouteWithTemplate
