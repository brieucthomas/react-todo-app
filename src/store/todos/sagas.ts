import { call, put, takeLatest } from 'redux-saga/effects'
import API, { graphqlOperation } from '@aws-amplify/api'

import { FETCH_TODOS_REQUESTED, ADD_TODO_REQUESTED, AddTodoRequestedAction, DeleteTodoRequestedAction, DELETE_TODO_REQUESTED, EDIT_TODO_REQUESTED } from './types'
import { fetchTodosSucceeded, fetchTodosFailed, fetchTodosFinished, addTodoSucceeded, addTodoFailed, addTodoFinished, editTodoSucceeded, editTodoFailed, editTodoFinished, deleteTodoSucceeded, deleteTodoFailed, deleteTodoFinished } from './actions'
import { listTodos } from '../../graphql/queries'
import { createTodo, updateTodo, deleteTodo } from '../../graphql/mutations'
import { showNotification } from '../system/actions'
import { createSuccessNotification, createErrorNotification } from '../system/utils'

export function* fetchTodos() {
  try {
    const response = yield call([API, 'graphql'], graphqlOperation(listTodos))
    yield put(fetchTodosSucceeded(response.data.listTodos.items))
  } catch (e) {
    yield put(fetchTodosFailed(e))
  }

  yield put(fetchTodosFinished())
}

export function* addTodo(action: AddTodoRequestedAction) {
  try {
    const response = yield call([API, 'graphql'], graphqlOperation(createTodo, { input: action.payload }))
    yield put(addTodoSucceeded(response.data.createTodo))
    yield put(showNotification(createSuccessNotification('Todo created')))        
    action.meta && action.meta.onSuccess && action.meta.onSuccess()
  } catch (e) {
    yield put(addTodoFailed(action.payload, e))
    yield put(showNotification(createErrorNotification()))
  }

  yield put(addTodoFinished())
}

export function* editTodo(action: AddTodoRequestedAction) {
  try {
    const response = yield call([API, 'graphql'], graphqlOperation(updateTodo, { input: action.payload }))
    yield put(editTodoSucceeded(response.data.updateTodo.id, response.data.updateTodo))
    yield put(showNotification(createSuccessNotification('Todo edited')))
    action.meta && action.meta.onSuccess && action.meta.onSuccess()
  } catch (e) {
    yield put(editTodoFailed(action.payload, e))
    yield put(showNotification(createErrorNotification()))
  }

  yield put(editTodoFinished())
}

export function* removeTodo(action: DeleteTodoRequestedAction) {
  try {
    yield call([API, 'graphql'], graphqlOperation(deleteTodo, { input: { id: action.meta.id } }))
    yield put(deleteTodoSucceeded(action.meta.id))
    yield put(showNotification(createSuccessNotification('Todo deleted')))
    action.meta && action.meta.onSuccess && action.meta.onSuccess()
  } catch (e) {
    yield put(deleteTodoFailed(action.meta.id, e))
    yield put(showNotification(createErrorNotification()))
  }

  yield put(deleteTodoFinished())
}

export function* todosSaga() {
  yield takeLatest(FETCH_TODOS_REQUESTED, fetchTodos)
  yield takeLatest(ADD_TODO_REQUESTED, addTodo)
  yield takeLatest(EDIT_TODO_REQUESTED, editTodo)
  yield takeLatest(DELETE_TODO_REQUESTED, removeTodo)
}