import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  IconButton,
  Typography,
  useTheme,
} from "@material-ui/core";
import PageHeader from "../../Components/PageHeader/PageHeader.js";
import "./Services.scss";
import { useHistory } from "react-router";
import SubHeader from "../../Components/SubHeader/SubHeader";
import Article from "../../Components/Article/Article.js";
import article1 from "../../Assets/article-1.jpg";
import serviceHeader from "../../Assets/header-services.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Icons
import IconBack from "@material-ui/icons/ArrowBack";

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      style={{
        transform: "rotate(180deg)",
        color: "white",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
      onClick={onClick}
    >
      <IconBack />
    </IconButton>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      style={{
        color: "white",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
      onClick={onClick}
    >
      <IconBack />
    </IconButton>
  );
}

const Services = () => {
  const theme = useTheme();
  const history = useHistory();
  const [services, setServices] = useState([]);

  // Modif html page title
  document.title = document.title.split("-")[0] + "- Nos Services";

  useEffect(() => {
    axios("https://bgraphics237.herokuapp.com/services").then((data) => {
      let servicesData = data?.data?.services;
      let sanitizedServiceData = [];
      sanitizedServiceData = servicesData.map((service) => {
        return {
          id: service["_id"],
          name: service["name"],
          body: service["description"],
          works: service["imageUrls"].map((image) => {
            return {
              id: image["asset_id"],
              imageUrl: image["url"],
              title: service["name"],
            };
          }),
        };
      });

      setServices(sanitizedServiceData);
    });
  }, []);

  return (
    <Box>
      <PageHeader imageUrl={serviceHeader} text={"NOS SERVICES"}>
        <Button
          variant="contained"
          style={{
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.white,
            padding: theme.spacing(1, 4),
            borderRadius: 50,
            margin: theme.spacing(3),
            textTransform: "initial",
            fontSize: 16,
          }}
          onClick={() => history.push("/request")}
        >
          Demandez un devis
        </Button>
      </PageHeader>
      <SubHeader />
      <Box
        bgcolor="white"
        width="100%"
        height="auto"
        padding={theme.spacing(2, 0)}
      >
        <Container>
          <Box display="flex" flexDirection="column">
            {services.map((service) => (
              <Box
                className="service-wrapper"
                key={service.id}
                width="100%"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                margin={theme.spacing(2.5, 0)}
              >
                <Box width="100%">
                  <Typography component="h4" className="titler">
                    {service.name}
                  </Typography>
                  <Typography component="p" className="subtitler">
                    {service.body}
                  </Typography>
                </Box>
                <Box width="100%" height="100%" margin={theme.spacing(2.5, 0)}>
                  <Slider {...settings}>
                    {service.works.map((work, index) => (
                      <Box key={work.id} display="flex" className="work-slide">
                        <Box
                          style={{
                            backgroundImage: `url(${work.imageUrl})`,
                            margin: theme.spacing(1, 1),
                          }}
                        >
                          <Box>
                            {/** <Typography
                                    component="h4"
                                    className="white-shadowed"
                                  >
                                    {work.title}
                                  </Typography>
                                  <IconForward
                                    style={{ transform: "rotate(180deg)" }}
                                  /> */}
                          </Box>
                        </Box>
                      </Box>
                    ))}
                  </Slider>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
      <Article
        article={{
          id: 1,
          imageUrl: article1,
          title: "Création d’une machine automatisée",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor",
        }}
      />
    </Box>
  );
};
export default Services;
