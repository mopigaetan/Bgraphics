import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Box, Button, Container, Typography, useTheme } from '@material-ui/core';
import PageHeader from '../../Components/PageHeader/PageHeader.js'
import './Works.scss'
import { useHistory } from 'react-router';
import SubHeader from '../../Components/SubHeader/SubHeader';
import WorkItem from '../../Components/WorkItem/WorkItem.js'
import workHeader from '../../Assets/header-work.jpg'
import Article from '../../Components/Article/Article.js'
import article1 from '../../Assets/article-1.jpg'
import work1 from '../../Assets/work-1.jpg'
import work2 from '../../Assets/work-2.jpg'
import work3 from '../../Assets/work-3.jpg'
import work4 from '../../Assets/work-4.jpg'
import work5 from '../../Assets/work-5.jpg'
import work6 from '../../Assets/work-6.jpg'

const works = [
	{ id: "1", imageUrl: `${work1}`, title: 'SERIGRAPHIE SUR TEXTILES', body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing eli" },
	{ id: "2", imageUrl: `${work2}`, title: 'PHOTOGRAPHIE SHOOTING', body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing eli" },
	{ id: "3", imageUrl: `${work3}`, title: 'PHOTOGRAPHIE', body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing eli" },
	{ id: "4", imageUrl: `${work4}`, title: 'SERIGRAPHIE SUR TEXTILES', body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing eli" },
	{ id: "5", imageUrl: `${work5}`, title: 'INFOGRAPHIE', body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing eli" },
	{ id: "6", imageUrl: `${work6}`, title: 'SERIGRAPHIE SUR TEXTILES', body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing eli" },
]

const Services = () => {

	const theme = useTheme();
	const history = useHistory();
	const [works, setWorks] = useState([]);
	// Modif html page title
	document.title = document.title.split('-')[0] + '- Nos Réalisations'
	useEffect(() => {
		axios("https://bgraphics237.herokuapp.com/realisations").then((data) => {
		  let worksData = data?.data?.realisations;
		  let sanitizedWorksData = [];
		  sanitizedWorksData = worksData.map((work) => {
			return {
			  id: work["_id"],
			  title: work["name"],
			  body: work["description"],
			  images: work["imageUrls"].map((image) => {
				return {
				  id: image["asset_id"],
				  imageUrl: image["url"],
				  title: work["name"],
				};
			  }),
			};
		  });
	
		  setWorks(sanitizedWorksData);
		});
	}, []);
	return (
		<Box id='works-page'>
			<PageHeader imageUrl={workHeader} text={'NOS Réalisations'}>
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
			<Box bgcolor='white' width='100%' height='auto' padding={theme.spacing(5,0)}>
				<Box margin={theme.spacing(0, 0, 5)} width='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center' textAlign='center'>
					<Typography component='h4' className="titler">NOS REALISATIONS</Typography>
					<Typography component='p' className="subtitler">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor</Typography>
				</Box>
				<Container>
					<Box display='flex' flexWrap='wrap'>
						{works.map(work => <WorkItem work={work} />)}
					</Box>
				</Container>
			</Box>
			<Article article={{ id: 1, imageUrl: article1, title: 'Création d’une machine automatisée', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor' }} />
		</Box >
	)
}
export default Services;
