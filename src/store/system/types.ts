// Describing the shape of the system's slice of state
export enum NotificationType {
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Error = 'error'
}

export interface Notification {
  id: string,
  type: NotificationType,
  message: string,
  duration?: number
}

export interface SystemState {
  notifications: Notification[]
}

// Describing the different ACTION NAMES available
export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION'
export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION'

export interface ShowNotificationAction {
  type: typeof SHOW_NOTIFICATION
  payload: Notification
}

export interface ClearNotificationAction {
  type: typeof CLEAR_NOTIFICATION
  meta: {
    id: string
  }
}

export type SystemActionTypes =
  | ShowNotificationAction
  | ClearNotificationAction