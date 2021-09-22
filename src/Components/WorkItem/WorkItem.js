import React from 'react'
import { Box, Container, Typography, useTheme, useMediaQuery } from '@material-ui/core'
import './WorkItem.scss';

const WorkItem = ({work}) => {
  const theme = useTheme()
  const inMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box key={work.id} width={inMobile?"100%": "50%"} className='work-box' style={{ backgroundImage: `url(${work.imageUrl})` }}>
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




