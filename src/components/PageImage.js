import React from 'react';
import { View, Image } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';


const PageImage = ({ width, height, borderRadius, imagePath }) => {
	return (
		<View style={styles(width, height, borderRadius).imageStyle}>
			<Image style={styles(width, height, borderRadius).imageStyle} source={imagePath} />
		</View>
	);
};

let styles = function (wd, hgt, br) {
   return ({
		imageStyle: {
			width: wd,
			height: hgt,
			borderRadius: br,
			borderWidth: 0.5,
			borderColor: '#000'
		},
   });
 };

export default PageImage;

