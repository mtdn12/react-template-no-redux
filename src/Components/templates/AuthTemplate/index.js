import React, { lazy, Suspense } from 'react'
import { node } from 'prop-types'
import { Layout } from 'antd'
import AppBar from 'Components/organisms/AppBar'

const Modal = lazy(() => import('Components/organisms/ModalManager'))

const { Header, Content, Footer } = Layout

const AuthTemplate = ({ children }) => {
  console.log('template render')
  return (
    <Layout>
      <Header>
        <AppBar />
      </Header>
      <Content>{children}</Content>
      <Footer>Template - react</Footer>
      <Suspense fallback={<span />}>
        <Modal />
      </Suspense>
    </Layout>
  )
}

AuthTemplate.propTypes = {
  children: node.isRequired,
}

export default AuthTemplate
