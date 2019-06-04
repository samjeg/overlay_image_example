import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';


// const sadImagePath = require('./images/happy.png');

const PagePanel = ({ width, height, borderRadius, imagePath }) => {
	return (
		<View style={styles(width, height, borderRadius).viewStyle}>
			<ImageBackground 
				style={styles(width, height, borderRadius).imageBackgroundStyle} 
				source={imagePath}
				// resizeMode='stretch'
			>
				<TouchableOpacity 
					onPress={() => console.log('Hello Page Image')} 
					style={styles(width, height, borderRadius).touchStyle}
				>
					<Text style={imageStyles.imageStyle}>
						☹
					</Text>
				</TouchableOpacity>
			</ImageBackground>
		</View>
	);
};

/* <View style={testStyles.testStyle} /> */

let styles = function (wd, hgt, br) {
   return ({
		imageBackgroundStyle: {
			width: '100%',
			height: '100%',
			// resizeMode: 'center',
			borderColor: '#000',
			justifyContent: 'center',
			alignItems: 'center',
		},
		viewStyle: {
			width: wd,
			height: hgt,
			borderRadius: br,
			borderWidth: 1,
			borderColor: '#000',
			justifyContent: 'center',
			alignItems: 'center',
			overflow: 'hidden'
		},
		touchStyle: {
			width: '100%',
			height: '100%',
			borderColor: '#000',
			justifyContent: 'center',
			alignItems: 'center',
			// borderWidth: 1,
			// borderWidth: 1,
			// borderRadius: br,
			// borderRadius: br,
		},
   });
 };

 const imageStyles = {
	imageStyle: {
		width: vw(15),
		height: vw(15),
		fontSize: vw(13),
		textAlign: 'center',
		color: '#000',
		overflow: 'hidden'
		// justifyContent: 'center',
		// alignItems: 'center'
		// backgroundColor: '#000',
		// tintColor: '#FFF',
		// overlayColor: '#41F4F1'
		// background: '#00FFFFFF'
		// backfaceVisibility: 'hidden'
		// opacity: 0.05
	}
 };

 // const testStyles = {
 //    testStyle: {
 //        width: vw(15),
 //        height: vw(15),
 //        background: '#00FFFFFF'
 //    }
 // };

export default PagePanel;

