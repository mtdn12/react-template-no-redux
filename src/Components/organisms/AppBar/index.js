import React from 'react'
import { object } from 'prop-types'
import { Menu } from 'antd'
import { withRouter } from 'react-router-dom'

const AppBar = ({ history }) => {
  const handleChangePage = path => () => {
    history.push(path)
  }
  return (
    <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
      <Menu.Item onClick={handleChangePage('/home')}>Home</Menu.Item>
      <Menu.Item onClick={handleChangePage('/product')}>Product</Menu.Item>
    </Menu>
  )
}

AppBar.propTypes = {
  history: object.isRequired,
}

export default withRouter(AppBar)
