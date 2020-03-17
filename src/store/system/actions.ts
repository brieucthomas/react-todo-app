import { SystemActionTypes, Notification, SHOW_NOTIFICATION, CLEAR_NOTIFICATION } from "./types"

export const showNotification = (notification: Notification): SystemActionTypes => ({
  type: SHOW_NOTIFICATION,
  payload: notification
})

export const clearNotification = (id: string): SystemActionTypes => ({
  type: CLEAR_NOTIFICATION,
  meta: {
    id
  }
})