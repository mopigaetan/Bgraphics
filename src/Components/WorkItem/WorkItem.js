import React from 'react'
import { Box, Container, Typography, useTheme } from '@material-ui/core'
import './WorkItem.scss';

const WorkItem = ({work}) => {
  const theme = useTheme()
  return (
    <Box key={work.id} className='work-box' style={{ backgroundImage: `url(${work.imageUrl})` }}>
      <Box className="contained">
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
          <Typography component='h4' className="title">{work.title}</Typography>
        </Container>
      </Box>
      <Box className='slide-up' bgcolor={theme.palette.primary.dark}>
        <Container style={{ width: '100%', height: 'auto' }}>
          <Container>
            <Typography component='h4' className="title" style={{ paddingBottom: theme.spacing(4) }}>{work.title}</Typography>
            <Typography component='p' className="body">{work.body}</Typography>
          </Container>
        </Container>
      </Box>
    </Box>
  )
}

export default WorkItem




