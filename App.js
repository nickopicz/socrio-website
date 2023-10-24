import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LandingPage } from './screens/LandingScreen';
import { useFonts } from 'expo-font';
import { Colors } from './Constants';
import { useEffect } from 'react';
import { useState } from 'react';

export default function App() {
	let [fontsLoaded] = useFonts({
		'OverPass-Regular': require('./assets/Overpass-Regular.ttf'),
	});
	const [render, setRender] = useState(0);

	return (
		<LandingPage
			setRender={setRender}
			render={render}
		/>
	);
}
