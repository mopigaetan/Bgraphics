import React, { Fragment } from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  Button,
  makeStyles,
  useTheme,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Dialog,
  AppBar,
  Toolbar,
  Slide,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../Assets/logo.png";

// Transition Component
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Navbar = () => {
  const useStyles = makeStyles((theme) => ({
    navContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    appBar: {
      position: "relative",
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      marginLeft: theme.spacing(1),
      flex: 1,
      color: theme.palette.text.secondary,
    },
    link: {
      marginBottom: theme.spacing(1),
      cursor: "pointer",
      fontWeight: "bold",
    },
  }));

  const classes = useStyles();
  const theme = useTheme();
  const inMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box bgcolor={theme.palette.common.white}>
      <Container className={classes.navContainer}>
        <Box>
          <Link href="/">
            <img src={logo} alt="bgraphics vision logo" />
          </Link>
        </Box>
        {inMobile ? (
          <Fragment>
            <Button
              style={{ width: "48px", height: "48px", margin: "auto 0" }}
              variant="outlined"
              color="primary"
              onClick={handleClickOpen}
            >
              <MenuIcon />
            </Button>
            <Dialog
              fullScreen
              open={open}
              onClose={handleClose}
              TransitionComponent={Transition}
            >
              <AppBar className={classes.appBar}>
                <Toolbar>
                  <IconButton
                    style={{ color: theme.palette.text.secondary }}
                    edge="start"
                    onClick={handleClose}
                    aria-label="close"
                  >
                    <CloseIcon />
                  </IconButton>
                </Toolbar>
              </AppBar>
              <Box
                height={1}
                width={1}
                bgcolor={theme.palette.background.paper}
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                {/** MainMenu Items */}
                <List
                  style={{
                    display: "flex",
                    color: "white",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <ListItem
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <ListItemText>
                      <Link
                        style={{
                          fontSize: "20px",
                          margin: theme.spacing(1.5),
                          color: theme.palette.common.black,
                        }}
                        href="/"
                      >
                        Accueil
                      </Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <ListItemText>
                      <Link
                        style={{
                          fontSize: "20px",
                          margin: theme.spacing(1.5),
                          color: theme.palette.common.black,
                        }}
                        href="/services"
                      >
                        Nos Services
                      </Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <ListItemText>
                      <Link
                        style={{
                          fontSize: "20px",
                          margin: theme.spacing(1.5),
                          color: theme.palette.common.black,
                        }}
                        href="/works"
                      >
                        Nos Réalisations
                      </Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <ListItemText>
                      <Link
                        style={{
                          fontSize: "20px",
                          margin: theme.spacing(1.5),
                          color: theme.palette.common.black,
                        }}
                        href="/request"
                      >
                        Contactez-Nous
                      </Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <ListItemText>
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: theme.palette.primary.dark,
                          color: theme.palette.common.white,
                          padding: theme.spacing(1, 6),
                          borderRadius: 50,
                          textTransform: "initial",
                          fontSize: 20,
                        }}
                      >
                        Presse
                      </Button>
                    </ListItemText>
                  </ListItem>
                </List>
              </Box>
            </Dialog>
          </Fragment>
        ) : (
          <Box>
            <Typography style={{ display: "flex", alignItems: "center" }}>
              <Link
                style={{
                  margin: theme.spacing(1.5),
                  color: theme.palette.common.black,
                }}
                href="/"
              >
                Accueil
              </Link>
              <Link
                style={{
                  margin: theme.spacing(1.5),
                  color: theme.palette.common.black,
                }}
                href="/services"
              >
                Nos Services
              </Link>
              <Link
                style={{
                  margin: theme.spacing(1.5),
                  color: theme.palette.common.black,
                }}
                href="/works"
              >
                Nos Réalisations
              </Link>
              <Link
                style={{
                  margin: theme.spacing(1.5),
                  color: theme.palette.common.black,
                }}
                href="/request"
              >
                Contactez-Nous
              </Link>
              <Button
                variant="contained"
                style={{
                  backgroundColor: theme.palette.primary.dark,
                  color: theme.palette.common.white,
                  padding: theme.spacing(1, 4),
                  borderRadius: 50,
                  textTransform: "initial",
                  fontSize: 16,
                }}
              >
                Presse
              </Button>
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Navbar;
