import { VisibilityFilter, SET_VISIBILITY_FILTER, VisibilityFilterActionTypes } from './types'

export const setVisibilityFilter = (visibilityFilter: VisibilityFilter): VisibilityFilterActionTypes => ({
  type: SET_VISIBILITY_FILTER,
  meta: {
    visibilityFilter
  }
})
