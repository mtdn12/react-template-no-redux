import { notification } from 'antd'

const openNotification = (message, description) => {
  notification.open({
    message,
    description,
    duration: 3,
  })
}

export const notificationActions = {
  openNotification,
}
