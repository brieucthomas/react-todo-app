// Describing the shape of the visibility filter's slice of state
export enum VisibilityFilter {
  ShowAll = 'SHOW_ALL',
  ShowCompleted = 'SHOW_COMPLETED',
  ShowActive = 'SHOW_ACTIVE'
}

type Values<T extends object> = T[keyof T];

export type VisibilityFilterState = Values<typeof VisibilityFilter>

// Describing the different ACTION NAMES available
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

interface SetVisibilityFilterAction {
  type: typeof SET_VISIBILITY_FILTER
  meta: {
    visibilityFilter: VisibilityFilter
  }
}

export type VisibilityFilterActionTypes = SetVisibilityFilterAction
