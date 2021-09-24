import React, { Fragment } from 'react';
import { Box, Container, Typography, Link, Button, useTheme, IconButton, Grid, useMediaQuery } from '@material-ui/core'
import './Footer.scss';
import logo from '../../Assets/logo.png'
import { useHistory } from 'react-router';
//Icons 
import IconFacebook from '@material-ui/icons/Facebook';
import IconTwitter from '@material-ui/icons/Twitter';
import IconLinkedIn from '@material-ui/icons/LinkedIn';
import IconInstagram from '@material-ui/icons/Instagram';


const Footer = () => {
  const theme = useTheme();
  const history = useHistory();
const inMobile = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <Fragment>
      <Box id='newsletter-box' style={{ padding: theme.spacing(5, 2) }}>
        <Container>
          <Typography component='h4' className="title" style={{ paddingBottom: theme.spacing(2), fontSize: inMobile? "40px": "72px" }}>NEWSLETTER</Typography>
          <Typography component='p' className="body" style={{ padding: theme.spacing(0.2, 0, 4) }}>Restez au courant de toutes les actualités de B Graphic Vision</Typography>
          <Box id='input-newsletter' paddingLeft={theme.spacing(0.6)}>
            <input
              type='email'
              placeholder='Email'
            />
            <Button
              variant='contained'
              style={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white,
                padding: theme.spacing(1, 7),
                borderRadius: 50,
                textTransform: 'initial',
                fontSize: 16,
              }}
            >Souscrire</Button>
          </Box>
        </Container>
      </Box>
    <Box padding={theme.spacing(4, 0, 0)}>
      <Container style={{ paddingBottom: theme.spacing(10) }}>
        <Grid container spacing={1}>
          <Grid item sm={5} xs={12}>
            <Link href="/">
              <img src={logo} alt="bgraphics vision logo" />
            </Link>
          </Grid>
          <Grid spacing={3} container item sm={7} xs={12}>
            <Grid item xs={12} sm={6} md={3} >
              <Typography component='span' style={{ fontWeight: 'bold', borderBottom: '2px solid black', paddingBottom: theme.spacing(1) }}>Entreprise &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
              <Typography style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: theme.spacing(2, 0) }}>
                <Link style={{ margin: theme.spacing(0.75, 0), color: theme.palette.common.black }} href="/works">
                  Nos Réalisations
            			</Link>
                <Link style={{ margin: theme.spacing(0.75, 0), color: theme.palette.common.black }} href="/services">
                  Nos Services
            			</Link>
                <Link style={{ margin: theme.spacing(0.75, 0), color: theme.palette.common.black }} href="/contact">
                  Presse
            			</Link>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
              <Typography component='span' style={{ fontWeight: 'bold', borderBottom: '2px solid black', paddingBottom: theme.spacing(1) }}>Contactez-nous &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
              <Typography style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: theme.spacing(2, 0) }}>
                <Link style={{ margin: theme.spacing(0.75, 0), color: theme.palette.common.black }} href="/">
                  Accueil
            			</Link>
                <Link style={{ margin: theme.spacing(0.75, 0), color: theme.palette.common.black }} href="/services">
                  Nos Services
            			</Link>
                <Link style={{ margin: theme.spacing(0.75, 0), color: theme.palette.common.black }} href="/works">
                  Nos Réalisations
            			</Link>
                <Link style={{ margin: theme.spacing(0.75, 0), color: theme.palette.common.black }} href="/contact">
                  Contactez-Nous
            			</Link>
              </Typography>
              <Button
                variant='contained'
                style={{
                  backgroundColor: theme.palette.secondary.main,
                  color: theme.palette.common.white,
                  padding: theme.spacing(1, 4),
                  borderRadius: 50,
                  textTransform: 'initial',
                  fontSize: 16,
                }}
                onClick={() => history.push('/request')}

              >
                Demandez un devis
            </Button>
            </Grid>
            <Grid item xs={12}   sm={12} md={4}>
              <Typography component='h5'>Suivez-nous</Typography>
              <Box>
                <IconButton style={{ margin: theme.spacing(0.5), backgroundColor: theme.palette.primary.dark, color: theme.palette.common.white }}>
                  <IconFacebook />
                </IconButton>
                <IconButton style={{ margin: theme.spacing(0.5), backgroundColor: theme.palette.primary.dark, color: theme.palette.common.white }}>
                  <IconLinkedIn />
                </IconButton>
                <IconButton style={{ margin: theme.spacing(0.5), backgroundColor: theme.palette.primary.dark, color: theme.palette.common.white }}>
                  <IconTwitter />
                </IconButton>
                <IconButton style={{ margin: theme.spacing(0.5), backgroundColor: theme.palette.primary.dark, color: theme.palette.common.white }}>
                  <IconInstagram />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Box textAlign="center" borderTop='1px solid black' padding={theme.spacing(0.25)}>Tous Droit Reservé - B Graphic Vision ©2021</Box>
    </Box>
    </Fragment>
  )
}
export default Footer;