This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app):

```
$ npx create-react-app react-todo-app --template typescript
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Cypress tests

Run Cypress tests: 

```
# 1. Run the app in the development mode
$ yarn start

# 2. Run mocks
$ yarn mock

# 3. Open Cypress
$ yarn test:cypress
```


![Cypress](docs/cypress.png)

## Store

### Actions

[FSA](https://github.com/redux-utilities/flux-standard-action) defines four properties that are allowed on an action:

*  type: *Required*. A string or Symbol indicating the action type.
*  payload: *Optional*. Any value or object containing data related to the action.
*  error: *Optional*. A boolean that, when true, indicates that the payload is an Error object.
*  meta: *Optional*. Any value or object containing data that isn’t part of the payload.

## Next steps

*  [ ]  How to update automatically the API key?
*  [ ]  Add unit tests for Sagas
*  [ ]  Add sync tests for Cypress

## Learn More

### React

*  [React documentation](https://reactjs.org/)
*  [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
*  [Material UI](https://material-ui.com/)
*  [End to End Testing React with Cypress](https://www.robinwieruch.de/react-testing-cypress)

### Typescript

*  [Material UI - TypeScript](https://material-ui.com/guides/typescript/)
*  [Cypress - TypeScript](https://docs.cypress.io/guides/tooling/typescript-support.html)
*  [Redux - Typescript](https://redux.js.org/recipes/usage-with-typescript/)

### Tests

*  [Cypress - Best Practices](https://docs.cypress.io/guides/references/best-practices.html)
*  [Cypress - Testing Library](https://github.com/testing-library/cypress-testing-library)