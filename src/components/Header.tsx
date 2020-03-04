import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles, Typography, Container, AppBar, Toolbar, IconButton } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

export interface HeaderProps {
  title: string,
  backToPath?: string,
  backToTitle?: string
}

const useStyles = makeStyles(theme => ({
  appbar: {
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  title: {
    fontSize: '1.75rem',
  },
  backIcon: {
    marginRight: theme.spacing(1),
  }
}))

const Header: React.FunctionComponent<HeaderProps> = ({ title, backToPath, backToTitle }) => {
  const classes = useStyles()

  return (
    <AppBar position="static" color="transparent" className={classes.appbar}>
      <Container maxWidth="md">
        <Toolbar variant="regular" disableGutters>
          {backToPath &&
            <IconButton
              edge="start"
              aria-label={backToTitle}
              component={RouterLink}
              to={backToPath}
              className={classes.backIcon}
            >
              <ArrowBackIcon color="secondary" />
            </IconButton>
          }
          <Typography variant="h1" component="h1" color="inherit" className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
