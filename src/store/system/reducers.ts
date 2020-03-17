import { SystemState, SystemActionTypes, SHOW_NOTIFICATION, CLEAR_NOTIFICATION } from "./types"

const initialState: SystemState = {
  notifications: []
}

export const systemReducer = (state = initialState, action: SystemActionTypes): SystemState => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return { ...state, notifications: [...state.notifications, action.payload] }
    case CLEAR_NOTIFICATION:
      return { ...state, notifications: state.notifications.filter(n => n.id !== action.meta.id)}
    default:
      return state
  }
}
