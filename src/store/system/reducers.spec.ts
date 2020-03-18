import {
  SystemState,
  Notification,
  NotificationType,
  ShowNotificationAction,
  SHOW_NOTIFICATION,
  CLEAR_NOTIFICATION,
  ClearNotificationAction
} from "./types"
import { systemReducer } from "./reducers"

const initialState: SystemState = {
  notifications: [
    {
      id: 'a',
      type: NotificationType.Success,
      message: 'File moved.'
    },
    {
      id: 'b',
      type: NotificationType.Success,
      message: 'Directory deleted.'
    },
    {
      id: 'c',
      type: NotificationType.Error,
      message: 'Failed to note.'
    }
  ]
}

describe('system reducer', () => {
  it('should handle SHOW_NOTIFICATION', () => {
    const payload: Notification = {
      id: '1',
      type: NotificationType.Success,
      message: 'Note Archived.'
    }
    const action: ShowNotificationAction = {
      type: SHOW_NOTIFICATION,
      payload
    }
    const expectedState: SystemState = {
      notifications: [...initialState.notifications, payload]
    }
    expect(systemReducer(initialState, action)).toEqual(expectedState)
  })

  it('should handle CLEAR_NOTIFICATION', () => {
    const action: ClearNotificationAction = {
      type: CLEAR_NOTIFICATION,
      meta: {
        id: 'b'
      }
    }
    const nextState = systemReducer(initialState, action)    
    expect(nextState.notifications.length).toEqual(2)
    expect(nextState.notifications.map(n => n.id)).toEqual(['a', 'c'])
  })
})