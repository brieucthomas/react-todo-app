// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import '@testing-library/cypress/add-commands'

import API, { graphqlOperation } from '@aws-amplify/api'
import { listTodos } from '../../src/graphql/queries'
import { createTodo, deleteTodo } from '../../src/graphql/mutations'
import awsconfig from '../../src/aws-exports'
import todoFixtures from '../fixtures/todos'

API.configure(awsconfig)

Cypress.Commands.add("resetApi", () => {
  cy.cleanTodos()
  cy.loadTodos(todoFixtures)
})

Cypress.Commands.add("cleanTodos", () => (
  API.graphql(graphqlOperation(listTodos))
    .then((response) => response.data.listTodos.items)
    .then((todos) => Promise.all(todos.map(
      t => API.graphql(graphqlOperation(deleteTodo, { input: { id: t.id } }))
    )))
))

Cypress.Commands.add("loadTodos", (todos) => (
  Promise.all(todos.map(t =>
    API.graphql(graphqlOperation(createTodo, { input: t }))
  ))
))


  // data.listTodos.items.map(async (t) => {
  // await API.graphql(graphqlOperation(deleteTodo, { input: { id: t.id } }))
  // }) 
  //console.log(data)