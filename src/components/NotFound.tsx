import React from 'react'
import { Typography, Box } from '@material-ui/core'

export interface NotFoundProps { }

const NotFound: React.FunctionComponent<NotFoundProps> = () => (
  <Box textAlign="center">
    <Typography variant="h2" component="h1" gutterBottom>
      {'404'}
    </Typography>
    <Typography component="p" gutterBottom>
      {'Ooooups! Looks like you got lost.'}
    </Typography>
  </Box>
)

export default NotFound
