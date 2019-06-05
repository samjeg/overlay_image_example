import React from 'react';
import { 
			ImageBackground, 
			Text, 
			TouchableOpacity, 
			View,
			TouchableWithoutFeedback,
			StyleSheet 
} from 'react-native';
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
					<TouchableWithoutFeedback 
						style={styles(width, height, borderRadius).buttonContainerStyle} 
					>
						<TouchableOpacity 
							style={styles(width, height, borderRadius).buttonStyle}
							onPress={() => console.log('Button pressed')}
						/>
					</TouchableWithoutFeedback>
					<Text style={styles(width, height, borderRadius).imageStyle}>
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
			width: wd,
			height: hgt,
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
			width: wd,
			height: hgt,
			borderColor: '#000',
			justifyContent: 'flex-start',
			alignItems: 'center',
			position: 'absolute',
		},
		buttonContainerStyle: {
			width: wd,
			height: hgt / 3,
			borderRadius: br,
			justifyContent: 'center',
			alignItems: 'center',
			overflow: 'hidden'
		},
		buttonStyle: {
			width: wd,
			height: hgt / 3,
			borderRadius: br,
			backgroundColor: '#000',
		},
		imageStyle: {
		width: vw(15),
		height: vw(15),
		fontSize: vw(13),
		textAlign: 'center',
		color: '#000',
		overflow: 'hidden'
		},
   });
};


export default PagePanel;

