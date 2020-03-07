import * as types from './types'
import { visibilityFilterReducer } from './reducers'

describe('visibilityFilter reducer', () => {
  it('should handle SET_VISIBILITY_FILTER', () => {
    const action: types.VisibilityFilterActionTypes = {
      type: types.SET_VISIBILITY_FILTER,
      meta: {
        visibilityFilter: types.VisibilityFilter.ShowCompleted
      }
    }
    const initialState: types.VisibilityFilterState = types.VisibilityFilter.ShowAll
    const expectedState: types.VisibilityFilterState = types.VisibilityFilter.ShowCompleted
    expect(visibilityFilterReducer(initialState, action)).toEqual(expectedState)
  })
})