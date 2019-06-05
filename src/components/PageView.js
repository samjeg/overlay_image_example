import React from 'react';
import { View, Image } from 'react-native';
// import { vw } from 'react-native-expo-viewport-units';


const PageView = ({ width, height, borderRadius, imagePath }) => {
	return (
		
		<View 
			style={styles(width, height, borderRadius).viewStyle}
		>
			<Image 
				style={styles(width, height, borderRadius).imageBackgroundStyle} 
				source={imagePath}
				// resizeMode='stretch' 
			/>
		</View>
	);
};

let styles = function (wd, hgt, br) {
   return ({
		viewStyle: {
			width: wd,
			height: hgt,
			borderRadius: br,
			borderColor: '#000',
			justifyContent: 'center',
			alignItems: 'center',
			overflow: 'hidden'
		},
		imageBackgroundStyle: {
			width: '100%',
			height: '100%',
			borderWidth: 1,
			// borderWidth: 0.5,
			// borderRadius: br,
			// borderColor: '#000',
		}
   });
 };

export default PageView;

