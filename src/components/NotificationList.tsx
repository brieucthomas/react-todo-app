import React from 'react'

import NotificationComponent from './Notification'
import { Notification } from '../store/system/types'

export interface NotificationListProps {
  notifications: Notification[],
  clearNotification: (id: string) => void
}

const NotificationList: React.FunctionComponent<NotificationListProps> = ({ notifications, clearNotification }) => {
  return (
    <React.Fragment>
      {notifications.map(n =>
        <NotificationComponent key={n.id} notification={n} onClose={({ id }) => clearNotification(id)} />
      )}
    </React.Fragment>
  )
}

export default NotificationList