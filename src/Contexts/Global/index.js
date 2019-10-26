import React, { useMemo } from 'react'
import { node } from 'prop-types'
import AuthProvider from '../Authentication'
import ModalProvider, { useModalActions } from '../Modal'
import LoadingProvider, { useLoadingActions } from '../Loading'
import { notificationActions } from '../Notification'

const GlobalProvider = ({ children }) => {
  return (
    <LoadingProvider>
      <ModalProvider>
        <AuthProvider>{children}</AuthProvider>
      </ModalProvider>
    </LoadingProvider>
  )
}

export const useGlobalAction = () => {
  const modalActions = useModalActions()
  const loadingActions = useLoadingActions()
  const globalActions = useMemo(() => {
    return { ...modalActions, ...loadingActions, ...notificationActions }
  }, [modalActions, loadingActions, notificationActions])
  return globalActions
}

GlobalProvider.propTypes = {
  children: node.isRequired,
}

export default GlobalProvider
