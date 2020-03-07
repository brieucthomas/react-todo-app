import * as actions from './actions'
import * as types from './types'

describe('visibilityFilters actions', () => {
  it('should create an action to set the visibility filter', () => {
    const newFilter = types.VisibilityFilter.ShowActive
    const expectedAction = {
      type: types.SET_VISIBILITY_FILTER,
      meta: {
        visibilityFilter: newFilter
      }
    }
    expect(actions.setVisibilityFilter(newFilter)).toEqual(expectedAction)
  })
})