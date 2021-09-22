import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import rect from "../../Assets/rect-article.svg";
import { useHistory } from "react-router";
import "./Article.scss";

const Article = ({ article }) => {
  const theme = useTheme();
  const history = useHistory();
  const inMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      style={{ marginTop: theme.spacing(5), marginBottom: theme.spacing(5) }}
    >
      <Box
        className="article-preview"
        display={inMobile ? "flex" : "grid"}
        bgcolor={theme.palette.common.black}
      >
        {inMobile ? (
          <Box className="text-part">
            <Container style={{ height: "100%" }}>
              <Container
                className="body-wrapper"
                style={{ position: "relative", width: "100%" }}
              >
                <Typography
                  component="h4"
                  className="title"
                  style={{ paddingBottom: theme.spacing(4), width: "100%" }}
                >
                  {article.title}
                </Typography>
                <Typography
                  component="p"
                  className="body"
                  style={{ padding: theme.spacing(0.2, 0, 4), width: "100%" }}
                >
                  {article.body}
                </Typography>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.common.white,
                    padding: theme.spacing(1, 4),
                    borderRadius: 50,
                    textTransform: "initial",
                    fontSize: 16,
                  }}
                  onClick={() => history.push("/articles/" + article.id)}
                >
                  Lire l’article
                </Button>
              </Container>
            </Container>
          </Box>
        ) : (
          <>
            <Box className="text-part">
              <img src={rect} alt="rect svg" />
              <Container>
                <Container className="body-wrapper">
                  <Typography
                    component="h4"
                    className="title"
                    style={{ paddingBottom: theme.spacing(4) }}
                  >
                    {article.title}
                  </Typography>
                  <Typography
                    component="p"
                    className="body"
                    style={{ padding: theme.spacing(0.2, 0, 4) }}
                  >
                    {article.body}
                  </Typography>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.common.white,
                      padding: theme.spacing(1, 4),
                      borderRadius: 50,
                      textTransform: "initial",
                      fontSize: 16,
                    }}
                    onClick={() => history.push("/articles/" + article.id)}
                  >
                    Lire l’article
                  </Button>
                </Container>
              </Container>
            </Box>
            <Box
              className="image-part"
              style={{ backgroundImage: `url(${article.imageUrl})` }}
            />
          </>
        )}
      </Box>
    </Container>
  );
};

export default Article;
