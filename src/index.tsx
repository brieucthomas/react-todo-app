import 'typeface-roboto'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@material-ui/core'

import * as serviceWorker from './serviceWorker'
import theme from './theme'
import Page from './components/Page'
import Home from './components/Home'
import EditTodo from './components/EditTodo'
import NotFound from './components/NotFound'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Switch>
        <Page exact path="/" component={Home} title="TodoList" />
        <Page path="/new" component={EditTodo} title="Add new todo" backToPath="/" backToTitle="Back to homepage" />
        <Page path="/edit/:id" component={EditTodo} title="Edit todo" backToPath="/" backToTitle="Back to homepage" />
        <Page path="*" component={NotFound} title="Not Found" backToPath="/" backToTitle="Back to homepage" />
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
