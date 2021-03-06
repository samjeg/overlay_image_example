import React, { Component } from 'react';
import { View } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';


class FirstCircleAlter extends Component {

	constructor(props) {
		super(props);
		this.state = { 
			firstCircleStyle: styles().firstCircleLayerStyle,
		};
	}

	render() {
		return (
			<View tyle={this.state.firstCircleStyle}>
				{this.props.children}
			</View>
		);
	}
}

const styles = function () {
   return ({
		firstCircleLayerStyle: {
			position: 'absolute',
			backgroundColor: '#4165F4',
			borderRadius: vw(40) / 2,
			height: vw(40),
			width: vw(40),
			marginHorizontal: vw(30),
			marginVertical: (vh(100) - vw(40)) / 2,
			alignItems: 'center',
			elevation: 50
		},
   });
 };
 
export default FirstCircleAlter;

