import React from 'react';
import axios from 'axios';
import services from '../../Assets/header-services.jpg'
import { Box, Button, Container, IconButton, Typography, useTheme } from '@material-ui/core';
import PageHeader from '../../Components/PageHeader/PageHeader.js'
import './Services.scss'
import { useHistory } from 'react-router';
import SubHeader from '../../Components/SubHeader/SubHeader';
import Article from '../../Components/Article/Article.js'
import article1 from '../../Assets/article-1.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Icons 
import IconBack from '@material-ui/icons/ArrowBack';
import IconForward from '@material-ui/icons/KeyboardBackspace';

const settings = {
	dots: false,
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	nextArrow: <SampleNextArrow />,
	prevArrow: <SamplePrevArrow />,
};


function SampleNextArrow(props) {
	const { onClick } = props;
	return (
		<IconButton style={{ transform: 'rotate(180deg)', color: 'white', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} onClick={onClick}>
			<IconBack />
		</IconButton>
	);
}

function SamplePrevArrow(props) {
	const { onClick } = props;
	return (
		<IconButton style={{ color: 'white', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} onClick={onClick}>
			<IconBack />
		</IconButton>
	);
}

const Services = () => {

	const theme = useTheme();
	const history = useHistory();

	// Modif html page title
	document.title = document.title.split('-')[0] + '- Nos Services'

	const servicesData = [
		{
			id: 1,
			name: 'SERIGRAPHIE',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor',
			works: [
				{
					id: 1,
					imageUrl: '/assets/services/service-1.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 2,
					imageUrl: '/assets/services/service-2.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 3,
					imageUrl: '/assets/services/service-3.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 11,
					imageUrl: '/assets/services/service-1.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 12,
					imageUrl: '/assets/services/service-2.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 13,
					imageUrl: '/assets/services/service-3.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
			]
		},
		{
			id: 2,
			name: 'Videographie',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor',
			works: [
				{
					id: 4,
					imageUrl: '/assets/services/service-4.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 5,
					imageUrl: '/assets/services/service-5.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 6,
					imageUrl: '/assets/services/service-6.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 14,
					imageUrl: '/assets/services/service-4.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 15,
					imageUrl: '/assets/services/service-5.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 16,
					imageUrl: '/assets/services/service-6.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
			]
		},
		{
			id: 3,
			name: 'Montage visuel 3D',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor',
			works: [
				{
					id: 7,
					imageUrl: '/assets/services/service-7.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 8,
					imageUrl: '/assets/services/service-8.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 9,
					imageUrl: '/assets/services/service-9.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 17,
					imageUrl: '/assets/services/service-7.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 18,
					imageUrl: '/assets/services/service-8.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 19,
					imageUrl: '/assets/services/service-9.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
			]
		},
		{
			id: 4,
			name: 'Photographie',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor',
			works: [
				{
					id: 10,
					imageUrl: '/assets/services/service-10.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 11,
					imageUrl: '/assets/services/service-11.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 12,
					imageUrl: '/assets/services/service-12.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 0,
					imageUrl: '/assets/services/service-10.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 1,
					imageUrl: '/assets/services/service-11.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 2,
					imageUrl: '/assets/services/service-12.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
			]
		},
		{
			id: 5,
			name: 'Infographie ',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor',
			works: [
				{
					id: 13,
					imageUrl: '/assets/services/service-13.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 14,
					imageUrl: '/assets/services/service-14.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 15,
					imageUrl: '/assets/services/service-15.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 3,
					imageUrl: '/assets/services/service-13.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 4,
					imageUrl: '/assets/services/service-14.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 5,
					imageUrl: '/assets/services/service-15.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
			]
		},
		{
			id: 6,
			name: 'Broderie',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor',
			works: [
				{
					id: 16,
					imageUrl: '/assets/services/service-16.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 17,
					imageUrl: '/assets/services/service-17.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 18,
					imageUrl: '/assets/services/service-18.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 6,
					imageUrl: '/assets/services/service-16.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 7,
					imageUrl: '/assets/services/service-17.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 8,
					imageUrl: '/assets/services/service-18.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
			]
		},
		{
			id: 7,
			name: 'Création de site web et apps',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor',
			works: [
				{
					id: 19,
					imageUrl: '/assets/services/service-19.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 20,
					imageUrl: '/assets/services/service-20.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 21,
					imageUrl: '/assets/services/service-21.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 9,
					imageUrl: '/assets/services/service-19.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 0,
					imageUrl: '/assets/services/service-20.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 1,
					imageUrl: '/assets/services/service-21.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
			]
		},
		{
			id: 8,
			name: 'Bureautique informatique',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor',
			works: [
				{
					id: 22,
					imageUrl: '/assets/services/service-22.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 23,
					imageUrl: '/assets/services/service-23.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 24,
					imageUrl: '/assets/services/service-24.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 2,
					imageUrl: '/assets/services/service-22.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 3,
					imageUrl: '/assets/services/service-23.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 4,
					imageUrl: '/assets/services/service-24.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
			]
		},
		{
			id: 9,
			name: 'Gestion des réseaux sociaux ',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor',
			works: [
				{
					id: 25,
					imageUrl: '/assets/services/service-25.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 26,
					imageUrl: '/assets/services/service-26.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 27,
					imageUrl: '/assets/services/service-27.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 5,
					imageUrl: '/assets/services/service-25.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 6,
					imageUrl: '/assets/services/service-26.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 7,
					imageUrl: '/assets/services/service-27.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
			]
		},
		{
			id: 10,
			name: 'A friture',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor',
			works: [
				{
					id: 28,
					imageUrl: '/assets/services/service-28.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 29,
					imageUrl: '/assets/services/service-29.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 30,
					imageUrl: '/assets/services/service-30.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 8,
					imageUrl: '/assets/services/service-28.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 9,
					imageUrl: '/assets/services/service-29.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 0,
					imageUrl: '/assets/services/service-30.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
			]
		},
		{
			id: 11,
			name: 'Gadgets BGV',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor',
			works: [
				{
					id: 31,
					imageUrl: '/assets/services/service-31.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 32,
					imageUrl: '/assets/services/service-32.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 33,
					imageUrl: '/assets/services/service-33.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 1,
					imageUrl: '/assets/services/service-31.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 2,
					imageUrl: '/assets/services/service-32.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
				{
					id: 3,
					imageUrl: '/assets/services/service-33.jpg',
					title: 'SERIGRAPHIE A PLAT'
				},
			]
		},
	]

	return (
		<Box>
			<PageHeader imageUrl={services} text={'NOS SERVICES'}>
				<Button
					variant='contained'
					style={{
						backgroundColor: theme.palette.secondary.main,
						color: theme.palette.common.white,
						padding: theme.spacing(1, 4),
						borderRadius: 50,
						margin: theme.spacing(3),
						textTransform: 'initial',
						fontSize: 16,
					}}
					onClick={() => history.push('/request')}
				>
					Demandez un devis</Button>
			</PageHeader>
			<SubHeader />
			<Box bgcolor='white' width='100%' height='auto' padding={theme.spacing(2,0)}>
				<Container>
					<Container>
						<Container>
							<Container>
								<Box display='flex' flexDirection='column'>
									{servicesData.map(service => <Box className='service-wrapper' key={service.id} width='100%' display='flex' flexDirection='column' justifyContent="center" alignItems='center' margin={theme.spacing(2.5,0)}>
										<Box width='100%'>
											<Typography component='h4' className="titler">{service.name}</Typography>
											<Typography component='p' className="subtitler">{service.body}</Typography>
										</Box>
										<Box width='100%' height='100%' margin={theme.spacing(2.5,0)}>
											<Slider {...settings}>
												{service.works.map(work => <Box key={work.id} display='flex' className='work-slide'>
													<Box style={{ backgroundImage: `url(${work.imageUrl})`, margin: theme.spacing(1, 1) }}>
														<Box>
															<Typography component='h4' className="white-shadowed">{work.title}</Typography>
															<IconForward style={{ transform: 'rotate(180deg)' }} />
														</Box>
													</Box>
												</Box>
												)}
											</Slider>
										</Box>
									</Box>)}
								</Box>
							</Container>
						</Container>
					</Container>
				</Container>
			</Box>
			<Article article={{ id: 1, imageUrl: article1, title: 'Création d’une machine automatisée', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor' }} />
		</Box >
	)
}
export default Services;