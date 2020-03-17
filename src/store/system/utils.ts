import { v4 as uuid } from 'uuid'

import { Notification, NotificationType } from './types'

export const createInfoNotification = (message: string = ''): Notification => (
  createNotification(message, NotificationType.Info)
)

export const createSuccessNotification = (message: string = ''): Notification => (
  createNotification(message, NotificationType.Success)
)

export const createWarningNotification = (message: string = ''): Notification => (
  createNotification(message, NotificationType.Warning)
)

export const createErrorNotification = (message: string = 'An error occurred'): Notification => (
  createNotification(message, NotificationType.Error)
)

export const createNotification = (message: string = '', type: NotificationType = NotificationType.Info): Notification => ({
  id: uuid(),
  message,
  type,
  duration: 6000
})