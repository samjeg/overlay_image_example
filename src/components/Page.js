import React, { Component } from 'react';
import { View } from 'react-native';
import FirstCircleLayer from './FirstCircleLayer';
import SecondCircleLayer from './SecondCircleLayer';
import FirstCircle from './FirstCircle';
import SecondCircleAlter from './SecondCircleAlter';
import PageImage from './PageImage';
import { vw, vh } from 'react-native-expo-viewport-units';


const jacketPath = require('./images/jacket1.jpeg');
const shirtPath = require('./images/shirt1.jpg');

class Page extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			renderAlternate: false,
			firstCircleElevation: 30,
			secondCircleElevation: 50,
			firstCircleAlterElevation: 50,
			secondCircleAlterElevation: 30
		};
	}


	render() {
		let firstCircle;
		let secondCircle;
		
		if (!this.state.renderAlternate) {
			firstCircle = (<FirstCircleLayer 
							onClick={() =>
								this.setState({ 
									renderAlternate: true
								})
							}
							firstCircleElevation={
								this
								.state
								.firstCircleElevation
							} 
							secondCircleElevation={
								this
								.state
								.secondCircleElevation
							}                                              
			>
				<PageImage
					width={vw(40)} 
					height={vw(40)} 
					borderRadius={vw(40) / 2} 
					imagePath={jacketPath} 
				/>
			</FirstCircleLayer>
			); 
							
			secondCircle = (<SecondCircleLayer
							firstCircleElevation={
								this
								.state
								.firstCircleElevation
							}
							secondCircleElevation={
								this
								.state
								.secondCircleElevation
							}
			>
				<PageImage 
					width={vw(50)} 
					height={vw(30)} 
					borderRadius={0} 
					imagePath={shirtPath} 
				/>
			</SecondCircleLayer>
			);							
		} else {
			secondCircle = (<FirstCircle
							firstCircleAlterElevation={
								this
								.state
								.firstCircleElevation
							} 
							secondCircleAlterElevation={
								this
								.state
								.secondCircleAlterElevation
							}
			>
				<PageImage 
					width={vw(40)} 
					height={vw(40)} 
					borderRadius={vw(40) / 2} 
					imagePath={jacketPath} 
				/>
			</FirstCircle>
			);
							
			firstCircle = (<SecondCircleAlter 
							onClick={() => this.setState({ 
								renderAlternate: false
								})
							}
							firstCircleAlterElevation={
								this
								.state
								.firstCircleAlterElevation
							}
							secondCircleAlterElevation={
								this
								.state
								.secondCircleAlterElevation
							}
			>
				<PageImage 
					width={vw(50)} 
					height={vw(30)} 
					borderRadius={0} 
					imagePath={shirtPath}
				/>
			</SecondCircleAlter>
			);
		}

		return (
			<View>
				{ firstCircle }
				{ secondCircle }
			</View>
		);
	}
}

export default Page;
