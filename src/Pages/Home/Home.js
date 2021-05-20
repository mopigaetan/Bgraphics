import React from 'react';
import { Box, Container, Typography, Link, Button, useTheme, IconButton } from '@material-ui/core'
import './Home.scss';
import Slider from "react-slick";
import { useHistory } from 'react-router';
import { Carousel } from 'react-responsive-carousel';
import home from '../../Assets/home-header-1.jpg'
import work1 from '../../Assets/work-1.jpg'
import work2 from '../../Assets/work-2.jpg'
import work3 from '../../Assets/work-3.jpg'
import work4 from '../../Assets/work-4.jpg'
import work5 from '../../Assets/work-5.jpg'
import work6 from '../../Assets/work-6.jpg'
import Article from '../../Components/Article/Article.js'
import article1 from '../../Assets/article-1.jpg'
import SubHeader from '../../Components/SubHeader/SubHeader';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Icons 
import IconBack from '@material-ui/icons/ArrowBack';
import IconForward from '@material-ui/icons/KeyboardBackspace';

// Modif html page title
document.title = document.title.split('-')[0] + '- Accueil'

const data = [
	{ id: "1", imageUrl: `${home}` },
	{ id: "2", imageUrl: `${home}` },
	{ id: "3", imageUrl: `${home}` }
]
const services = [
	{ id: "1", imageUrl: '/assets/services/service-1.jpg', title: 'PHOTOGRAPHIE' },
	{ id: "2", imageUrl: '/assets/services/service-2.jpg', title: 'SERIGRAPHIE A PLAT' },
	{ id: "3", imageUrl: '/assets/services/service-3.jpg', title: 'SERIGRAPHIE A CHAUD' },
	{ id: "4", imageUrl: '/assets/services/service-4.jpg', title: 'SERIGRAPHIE A CHAUD' },
	{ id: "5", imageUrl: '/assets/services/service-5.jpg', title: 'SERIGRAPHIE A CHAUD' },
	{ id: "6", imageUrl: '/assets/services/service-6.jpg', title: 'PHOTOGRAPHIE' },
	{ id: "7", imageUrl: '/assets/services/service-7.jpg', title: 'SERIGRAPHIE A PLAT' },
	{ id: "8", imageUrl: '/assets/services/service-8.jpg', title: 'SERIGRAPHIE A CHAUD' },
	{ id: "9", imageUrl: '/assets/services/service-9.jpg', title: 'SERIGRAPHIE A CHAUD' },
	{ id: "10", imageUrl: '/assets/services/service-10.jpg', title: 'SERIGRAPHIE A CHAUD' },
]

const works = [
	{ id: "1", imageUrl: `${work1}`, title: 'SERIGRAPHIE SUR TEXTILES' },
	{ id: "2", imageUrl: `${work2}`, title: 'PHOTOGRAPHIE SHOOTING' },
	{ id: "3", imageUrl: `${work3}`, title: 'PHOTOGRAPHIE' },
	{ id: "4", imageUrl: `${work4}`, title: 'SERIGRAPHIE SUR TEXTILES' },
	{ id: "5", imageUrl: `${work5}`, title: 'INFOGRAPHIE' },
	{ id: "6", imageUrl: `${work6}`, title: 'SERIGRAPHIE SUR TEXTILES' },
]
const settings = {
	dots: false,
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	nextArrow: <SampleNextArrow />,
	prevArrow: <SampleNextArrow />,
};


function SampleNextArrow(props) {
	const { onClick } = props;
	return (
		<IconButton style={{ transform: 'rotate(180deg)', color: 'white', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'absolute', right: 0 }} onClick={onClick}>
			<IconBack />
		</IconButton>
	);
}

const Home = () => {
	const theme = useTheme();
	const history = useHistory();

	return (
		<Box id="home-wrapper" >
			<Box>
				<Carousel
					autoFocus
					autoPlay
					infiniteLoop
					showArrows={false}
					showStatus={false}
					emulateTouch
					swipeable
				>
					{data.map(slide => <Box key={slide.id} style={{ backgroundImage: `url(${slide.imageUrl})` }} className='slide'>
						<Container id="home-container">
							<Box width="100%" maxWidth="650px">
								<Typography component='h2' className="header-title-text">SERIGRAPHIE SUR TEXTILE</Typography>
								<Typography component='p' className='header-body-text' style={{ textAlign: 'left', padding: theme.spacing(1, 0, 4) }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Typography>
								<Box textAlign='left'>
									<Button
										variant='contained'
										style={{
											backgroundColor: theme.palette.primary.main,
											color: theme.palette.common.white,
											padding: theme.spacing(1, 4),
											borderRadius: 50,
											textTransform: 'initial',
											fontSize: 16,
										}}
									>En Savoir +</Button>
									<Button
										variant='contained'
										style={{
											backgroundColor: theme.palette.secondary.main,
											color: theme.palette.common.white,
											padding: theme.spacing(1, 4),
											borderRadius: 50,
											marginLeft: theme.spacing(3),
											textTransform: 'initial',
											fontSize: 16,
										}}
										onClick={()=>history.push('/request')}
									>
										Demandez un devis</Button>
								</Box>
							</Box>
						</Container>
					</Box>)}
				</Carousel>
			</Box>
			<SubHeader/>
			<Box bgcolor='white' width='100%' height='auto'>
				<Container>
					<Box width='100%' height='300px' display='grid' gridTemplateColumns='auto 900px' gridTemplateRows='100%' justifyContent="space-between" alignItems='center'>
						<Box width='100%'>
							<Typography component='h4' className="titler">NOS SERVICES</Typography>
							<Typography component='p' className="subtitler">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor</Typography>
						</Box>
						<Box width='100%' height='100%'>
							<Slider {...settings}>
								{services.map(service => <Box key={service.id} className='service-slide'>
									<Box style={{ backgroundImage: `url(${service.imageUrl})`, margin: theme.spacing(1, 1) }}>
										<Box>
											<Typography component='h4' className="white-shadowed">{service.title}</Typography>
											<IconForward style={{ transform: 'rotate(180deg)' }} />
										</Box>
									</Box>
								</Box>
								)}
							</Slider>
						</Box>
					</Box>
					<Box display="flex" justifyContent='center' alignItems='center'>
						<Link style={{ color: theme.palette.primary.main, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '2px solid' + theme.palette.primary.main, padding: theme.spacing(0.5) }} href="/services">
							<Typography component='a' style={{ fontWeight: '500' }}>Voir tous nos services</Typography>
									&nbsp;
									<IconBack style={{ transform: 'rotate(180deg)' }} />
						</Link>
					</Box>
					<Box width='100%'>
						<Box margin={theme.spacing(10, 0, 5)} width='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center' textAlign='center'>
							<Typography component='h4' className="titler">NOS REALISATIONS</Typography>
							<Typography component='p' className="subtitler">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor</Typography>
						</Box>
						<Box display='flex' flexWrap='wrap'>
							{works.map(work => <Box key={work.id} className='work-box' style={{ backgroundImage: `url(${work.imageUrl})` }}>
								<Box className="contained">
									<Container style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
										<Typography component='h4' className="title">{work.title}</Typography>
									</Container>
								</Box>
								<Box className='slide-up' bgcolor={theme.palette.primary.dark}>
									<Container style={{ width: '100%', height: 'auto' }}>
										<Container>
											<Typography component='h4' className="title" style={{ paddingBottom: theme.spacing(4) }}>{work.title}</Typography>
											<Typography component='p' className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing eli</Typography>
										</Container>
									</Container>
								</Box>
							</Box>
							)}
						</Box>
						<Box display="flex" justifyContent='center' alignItems='center' paddingBottom={theme.spacing(0.75)}>
							<Link style={{ margin: theme.spacing(1.5), color: theme.palette.primary.main, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '2px solid' + theme.palette.primary.main, padding: theme.spacing(0.5) }} href="/works">
								<Typography component='a' style={{ fontWeight: '500' }}>Voir toutes nos réalisations</Typography>
									&nbsp;
									<IconBack style={{ transform: 'rotate(180deg)' }} />
							</Link>
						</Box>
					</Box>
				</Container>
			</Box>
			<Article article={{ id: 1, imageUrl: article1, title: 'Création d’une machine automatisée', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor'}}/>
		</Box>
	)
}
export default Home;