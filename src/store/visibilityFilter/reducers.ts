import { VisibilityFilterState, VisibilityFilter, VisibilityFilterActionTypes, SET_VISIBILITY_FILTER } from './types'

const initialState: VisibilityFilterState = VisibilityFilter.ShowAll

export const visibilityFilterReducer = (state = initialState, action: VisibilityFilterActionTypes): VisibilityFilterState => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.meta.visibilityFilter
    default:
      return state
  }
}
