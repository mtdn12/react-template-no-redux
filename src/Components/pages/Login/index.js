import React from 'react'
import { Input, Icon, Typography, Button } from 'antd'
import { object } from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Redirect } from 'react-router-dom'
import { useAuthAction, useAuthState } from 'Contexts/Authentication'
import { useLoadingState } from 'Contexts/Loading'
import './styles.scss'

const Login = ({ history }) => {
  const actions = useAuthAction()
  const loadingState = useLoadingState()
  const authState = useAuthState()
  // handle login success
  const handleLoginSuccess = () => {
    history.push('/home')
  }
  return (
    <div className="login-page">
      {authState.auth && <Redirect exact from="/login" to="/home" />}
      <div className="content-wrap">
        <Typography.Title style={{ textAlign: 'center' }}>
          Login
        </Typography.Title>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email('Invalid Email')
              .required('Please input email'),
            password: Yup.string().required('Please input password'),
          })}
          onSubmit={values => {
            actions.logIn(values, handleLoginSuccess)
          }}>
          {({
            handleBlur,
            handleChange,
            values,
            errors,
            touched,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="input-wrap">
                <Input
                  prefix={
                    <Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Email"
                  id="email"
                />
              </div>
              <div className="input-wrap">
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  value={values.password}
                  placeholder="Password"
                  id="password"
                  onChange={handleChange}
                />
              </div>
              <Button
                type="primary"
                block
                htmlType="submit"
                disabled={loadingState.isLoadingAction}
                loading={loadingState.isLoadingAction}>
                Submit
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}

Login.propTypes = {
  history: object.isRequired,
}

export default Login
