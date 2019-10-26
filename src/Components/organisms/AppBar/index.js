import React from 'react'
import { Menu } from 'antd'

const AppBar = () => {
  return (
    <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
      <Menu.Item>nav 1</Menu.Item>
      <Menu.Item>nav 2</Menu.Item>
      <Menu.Item>nav 3</Menu.Item>
    </Menu>
  )
}
export default AppBar
