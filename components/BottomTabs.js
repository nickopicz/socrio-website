import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Linking,
	StyleSheet,
} from 'react-native';
import { Colors, Dim } from '../Constants';
import CustomText from './common/Text';

export const BottomTabBar = () => {
	const openLink = (url) => {
		Linking.openURL(url).catch((err) =>
			console.error("Couldn't load page", err)
		);
	};

	return (
		<View style={styles.tabContainer}>
			<TouchableOpacity
				style={styles.button}
				onPress={() => openLink('https://socrio-privacy.vercel.app/')}
			>
				<CustomText
					p2
					Contrast
				>
					Privacy Policy
				</CustomText>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => openLink('https://sorio-eula.vercel.app/')}
			>
				<CustomText
					p2
					Contrast
				>
					EULA
				</CustomText>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	tabContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		paddingVertical: 10,
		borderTopWidth: 1,
		borderColor: Colors.Foreground,
		width: Dim.width,
		backgroundColor: Colors.Navbar,
		alignItems: 'center',
		flex: 0.05,
	},
	tabText: {
		fontSize: 16,
	},
	button: {
		flex: 1,
		alignItems: 'center',
	},
});
