import React from 'react';
import axios from 'axios';
import devis from '../../Assets/header-devis.jpg'
import { Box, Button, Container, TextField, Typography, useTheme } from '@material-ui/core';
import PageHeader from '../../Components/PageHeader/PageHeader.js'
import './Devis.scss'

const Devis = () => {

	const theme = useTheme();

// Modif html page title
	document.title = document.title.split('-')[0] + '- Demandez un devis'

	// constructor() {
	// 	super();
	// 	this.state = {
	// 		name: "",
	// 		email: "",
	// 		phone: 0,
	// 		description: ""
	// 	}
	// }

	// onInputChange(e) {
	// 	const { name, value } = e.target;
	// 	this.setState({ [name]: value });
	// }
	// clearValue() {
	// 	document.getElementsByTagName("input").value = ''
	// }
	// onClick() {
	// 	axios.post('http://localhost:8080/devis', {
	// 		name: this.state.name,
	// 		email: this.state.email,
	// 		phone: this.state.phone,
	// 		description: this.state.description
	// 	})
	// 		.then(devis => {
	// 			this.setState({
	// 				name: '',
	// 				email: '',
	// 				phone: 0,
	// 				description: ''
	// 			})
	// 			alert('votre devis à été envoyé !!')
	// 		})
	// 		.catch(error => alert('oups Votre devis n\'a pas pu être envoyé !!'))
	// 	this.clearValue()
	// }
	// checkEmail(email) {
	// 	if (email.include('@gmail.com') || email.include('@yahoo.fr') || email.include('@outlook')) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// }

	return (
		<Box>
			<PageHeader imageUrl={devis} text={'DEVIS'}/>
			<Container>
				<Box bgcolor='white' width='100%' marginTop={theme.spacing(0.5)} marginBottom={theme.spacing(0.5)} >
					<Container>
						<Container>
							<Typography component='h3' className='form-title' style={{ padding: theme.spacing(3) }}>DEMANDE DE DEVIS</Typography>
							<Box>
								<TextField
									variant='outlined'
									type="text"
									name="name"
									label="Votre Nom complet"
									style={{
										borderRadius: '50px !important',
										width: '100%',
										margin: theme.spacing(1, 0)
									}}
									/*onChange={(e) => this.onInputChange(e)}*/ />
								<TextField
									variant='outlined'
									type="email"
									name="email"
									label="Votre Email"
									style={{
										borderRadius: '50px !important',
										width: '100%',
										margin: theme.spacing(1, 0)
									}}
									/*onChange={(e) => this.onInputChange(e)}*/ />
								<TextField
									variant='outlined'
									type="text"
									name="phone"
									label="votre Numéro de Téléphone"
									style={{
										borderRadius: '50px !important',
										width: '100%',
										margin: theme.spacing(1, 0)
									}}
									/*onChange={(e) => this.onInputChange(e)}*/ />
								<TextField
									variant='outlined'
									type="text"
									name="description"
									label="Précision de la demande"
									multiline
									rows={10}
									style={{
										borderRadius: '50px !important',
										width: '100%',
										margin: theme.spacing(1, 0)
									}}
								/*onChange={(e) => this.onInputChange(e)}*/ />
								<Button
									variant='contained'
									style={{
										backgroundColor: theme.palette.primary.main,
										color: theme.palette.common.white,
										padding: theme.spacing(1, 4),
										borderRadius: 50,
										textTransform: 'initial',
										fontSize: 16,
										width: '100%',
										margin: theme.spacing(1, 0, 5)
									}}
								/*onClick={() => this.onClick()}*/
								>Soumettre</Button>
							</Box>
						</Container>
					</Container>
				</Box>
			</Container>
		</Box>
	)
}
export default Devis;