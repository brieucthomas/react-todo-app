import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles, Button, Typography, Grid, Hidden } from '@material-ui/core'

import VisibleTodoList from '../containers/VisibleTodoList'
import wheelbarrowImage from '../images/wheelbarrow.svg'
import foodAndRestaurantImage from '../images/food-and-restaurant.svg'

export interface HomeProps { }

const useStyles = makeStyles(theme => ({
  header: {
    borderWidth: '1px',
    borderColor: theme.palette.grey[300],
    borderStyle: 'solid',
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  imgFluid: {
    maxWidth: '100%',
    height: 'auto'
  }
}))

const Home: React.FunctionComponent<HomeProps> = () => {
  const classes = useStyles()

  return (
    <div>
      <section className={classes.header}>
        <Grid container spacing={2}>
          <Grid item xs md>
            <Typography component="h1" variant="h1" gutterBottom>
              {'Lorem ipsum dolor sit amet'}
            </Typography>
            <Typography component="p" variant="body2" color="textSecondary" gutterBottom>
              {'Integer in massa sed ex consectetur tempus. Donec semper egestas neque, dignissim rutrum erat convallis vel.'}
            </Typography>
          </Grid>
          <Grid item xs={3} md={2}>
            <Hidden smUp><img src={foodAndRestaurantImage} aria-hidden="true" alt="" className={classes.imgFluid} /></Hidden>
            <Hidden xsDown><img src={wheelbarrowImage} aria-hidden="true" alt="" className={classes.imgFluid} /></Hidden>
          </Grid>
        </Grid>
        <Button
          variant="outlined"
          color="primary"
          component={RouterLink}
          to={'/new'}
        >
          {'Add new todo'}
        </Button>
      </section>
      <VisibleTodoList />
    </div>
  )
}

export default Home
