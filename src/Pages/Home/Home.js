import React from 'react';
import SwiftSlider from 'react-swift-slider';
import './Home.scss';
import DevisButton from '../../Components/DevisButton/DevisButton.js';
import home from './assets/home3.jpg'
import home3 from './assets/home.jpg'
import home2 from './assets/home2.jpg'

const data=[
	{"id":"1","src":`${home}`},
	{"id":"2","src":`${home2}`},
	{"id":"3","src":`${home3}`}
]

class Home extends React.Component{
	constructor(){
		super();
	}

	render(){
		return(
			// style={{backgroundImage:`url(${home})`}}
			<div id="home-wrapper" >
				<div>
					<SwiftSlider data={data} enableNextAndPrev={false} height={400} id="home-slider"/>
					<div id="home-container">
						<p>SERIGRAPHIE SUR TEXTILE</p>
						<div id="container-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
						<div id="home-container-buttons">
							<div id="button-more" className="home-button">En savoir plus</div>
							<DevisButton className="home-button"/>
						</div>
					</div>
					</div>
				<div></div>
			</div>
			)
	}
}
export default Home;