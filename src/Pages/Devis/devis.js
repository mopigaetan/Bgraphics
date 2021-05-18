import React from 'react';
import axios from 'axios';
import devis1 from './assets/devis1.png'
import devis2 from './assets/devis2.png'
import devis from './assets/devis.png'
import devis3 from './assets/devis3.png'
import devis4 from './assets/devis4.png'
import {Button} from '@material-ui/core';
import './devis.scss'

class Devis extends React.Component{

	constructor(){
		super();
		this.state={
			name:"",
			email:"",
			phone:0,
			description:""
		}
	}

	onInputChange(e){
		const {name,value}=e.target;
		this.setState({[name]:value});
	}
	clearValue(){
		document.getElementsByTagName("input").value=''
	}
	onClick(){
		axios.post('http://localhost:8080/devis',{
			name:this.state.name,
			email:this.state.email,
			phone:this.state.phone,
			description:this.state.description
		})
		.then(devis=>{
			this.setState({
				name:'',
				email:'',
				phone:0,
				description:''
			})
			alert('votre devis à été envoyé !!')
		})
		.catch(error=>alert('oups Votre devis n\'a pas pu être envoyé !!'))
		this.clearValue()
	}
	checkEmail(email){
		if(email.include('@gmail.com')==true || email.include('@yahoo.fr') || email.include('@outlook')==true){
			return true;
		}else{
			return false;
		}
	}
	render(){
		return(
			<div id="devis-wrapper">
				<div id="devis-image" style={{backgroundImage:`url(${devis4})`}}>DEVIS</div>
				<div id="devis-container">
					<h2>DEMANDE DE DEVIS</h2>
					<div id="devis-container-form">
						<input type="text" name="name" placeholder="Votre Nom complet" className="input" onChange={(e)=>this.onInputChange(e)}/>
						<input type="text" name="email" placeholder="Votre Email" className="input" onChange={(e)=>this.onInputChange(e)}/>
						<input type="text" name="phone" placeholder="votre Numéro de Téléphone" className="input" onChange={(e)=>this.onInputChange(e)}/>
						<textarea type="text" name="description" placeholder="Précision de la demande" className="textarea" onChange={(e)=>this.onInputChange(e)}/>
						<Button id="submit-button" variant="contained" color="primary" onClick={()=>this.onClick()}>Soumettre</Button>
					</div>
				</div>
			</div>	
		)
	}
} 
export default Devis;