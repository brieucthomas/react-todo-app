import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

import { Notification as NotificationType } from '../store/system/types'

export interface NotificationProps {
  notification: NotificationType,
  onClose: (n: NotificationType) => void
}

const Notification: React.FunctionComponent<NotificationProps> = ({ notification, onClose }) => {
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    onClose(notification)
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open
        autoHideDuration={notification.duration}
        onClose={handleClose}
      >
        <MuiAlert elevation={6} variant="filled" severity={notification.type} onClose={handleClose}>
          {notification.message}
        </MuiAlert>
      </Snackbar>
    </div>
  )
}

export default Notification