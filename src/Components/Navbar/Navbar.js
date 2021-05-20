import React from 'react'
import { Box, Container, Typography, Link, Button, makeStyles, useTheme } from '@material-ui/core'
import logo from '../../Assets/logo.png'

const Navbar = () => {
  const useStyles = makeStyles(theme => ({
    navContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  }))

  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box bgcolor={theme.palette.common.white}>
      <Container className={classes.navContainer}>
        <Box>
          <Link href="/">
            <img src={logo} alt="bgraphics vision logo" />
          </Link>
        </Box>
        <Box>
          <Typography style={{ display: 'flex', alignItems: 'center'}}>
            <Link style={{ margin: theme.spacing(1.5), color: theme.palette.common.black }} href="/">
              Accueil
            </Link>
            <Link style={{ margin: theme.spacing(1.5), color: theme.palette.common.black }} href="/services">
              Nos Services
            </Link>
            <Link style={{ margin: theme.spacing(1.5), color: theme.palette.common.black }} href="/works">
              Nos Réalisations
            </Link>
            <Link style={{ margin: theme.spacing(1.5), color: theme.palette.common.black }} href="/contact">
              Contactez-Nous
            </Link>
            <Button
              variant='contained'
              style={{ 
                backgroundColor: theme.palette.primary.dark, 
                color: theme.palette.common.white,
                padding: theme.spacing(1,4),
                borderRadius: 50,
                textTransform: 'initial',
                fontSize: 16,
              }}
            >
              Presse
            </Button>
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
