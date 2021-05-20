import React from 'react';
import { Box, Container, Typography, useTheme } from '@material-ui/core'
import exp from '../../Assets/exp.png'
import pro from '../../Assets/pro.png'
import qual from '../../Assets/qual.png'

import './SubHeader.scss'

const SubHeader = () => {
  const theme = useTheme();

  return (
      <Container style={{ marginTop: theme.spacing(3.5), marginBottom: theme.spacing(3.5) }}>
        <Container id="banner">
          <Box display='flex' justifyContent='space-around' padding={theme.spacing(3, 0)}>
            <Box display='flex' justifyContent='flex-start' alignItems="flex-start" width='375px'>
              <img src={exp} alt="icon" />
              <Box padding={theme.spacing(0, 2)}>
                <Typography component='h4' className="title" style={{ color: theme.palette.primary.dark }}>EXPERIENCE</Typography>
                <Typography component='p' className='text' style={{ textAlign: 'left', padding: theme.spacing(1, 0, 0) }}>Nous possédons plus de 20 ans d’expérience dans la sérigraphie</Typography>
              </Box>
            </Box>
            <Box display='flex' justifyContent='flex-start' alignItems="flex-start" width='375px'>
              <img src={pro} alt="icon" />
              <Box padding={theme.spacing(0, 2)}>
                <Typography component='h4' className="title" style={{ color: theme.palette.primary.dark }}>PROFESSIONNALISME</Typography>
                <Typography component='p' className='text' style={{ textAlign: 'left', padding: theme.spacing(1, 0, 0) }}>À l’écoute, nous proposons des conseils personnalisés.</Typography>
              </Box>
            </Box>
            <Box display='flex' justifyContent='flex-start' alignItems="flex-start" width='375px'>
              <img src={qual} alt="icon" />
              <Box padding={theme.spacing(0, 2)}>
                <Typography component='h4' className="title" style={{ color: theme.palette.primary.dark }}>PERSONNEL QUALIFIÉ</Typography>
                <Typography component='p' className='text' style={{ textAlign: 'left', padding: theme.spacing(1, 0, 0) }}>Notre équipe est réactive et sérieuse.</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Container>
  )
}
export default SubHeader;