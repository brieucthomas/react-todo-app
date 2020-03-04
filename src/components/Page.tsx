import React, { useEffect } from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { makeStyles, Container } from '@material-ui/core'

import Header from './Header'

export interface PageProps extends RouteProps {
  title: string
  backToPath?: string
  backToTitle?: string
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  }
}))

const Page: React.FunctionComponent<PageProps> = ({ title, backToPath, backToTitle, ...rest }) => {
  const classes = useStyles()

  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <div className={classes.root}>
      <Header title={title} backToPath={backToPath} backToTitle={backToTitle} />
      <Container maxWidth="md" component="main" className={classes.main}>
        <Route {...rest} />
      </Container>
    </div>
  )
}

export default Page
