import React from 'react'
import { bool } from 'prop-types'
import { Spin } from 'antd'
import './styles.scss'

const LoadingPage = props => {
  if (props.error) {
    throw new Error(`Couldn't load LoadingPage`)
  }
  return (
    <div id="loading-page">
      <Spin size="large" />
    </div>
  )
}

LoadingPage.propTypes = {
  error: bool,
}

export default LoadingPage
