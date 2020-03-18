import {
  Notification,
  NotificationType,
  SHOW_NOTIFICATION,
  CLEAR_NOTIFICATION,
  ShowNotificationAction,
  ClearNotificationAction
} from './types'
import {
  showNotification,
  clearNotification
} from './actions'

describe('system actions', () => {
  it('should create an action to show a notification', () => {
    const payload: Notification = {
      id: '1',
      type: NotificationType.Success,
      message: 'Note Archived.'
    }
    const expectedAction: ShowNotificationAction = {
      type: SHOW_NOTIFICATION,
      payload
    }
    expect(showNotification(payload)).toEqual(expectedAction)
  })

  it('should create an action to clear a notification', () => {
    const expectedAction: ClearNotificationAction = {
      type: CLEAR_NOTIFICATION,
      meta: {
        id: '1'
      }
    }
    expect(clearNotification('1')).toEqual(expectedAction)
  })
})