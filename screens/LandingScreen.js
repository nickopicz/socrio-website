import React, { useEffect, useRef, useCallback, useState } from 'react';
import {
	View,
	Text,
	Image,
	ScrollView,
	ImageBackground,
	TouchableOpacity,
} from 'react-native';
import { Colors, Dim } from '../Constants';
import { useFonts } from 'expo-font';
import * as Linking from 'expo-linking';
import { LinearGradient } from 'expo-linear-gradient';
import CustomText from '../components/common/Text';
import { RoundedButton } from '../components/common/Button';
import { CardHolder } from '../components/Card';
import { BottomTabBar } from '../components/BottomTabs';

export const LandingPage = ({ navigation, render, setRender }) => {
	const bottomRef = useRef(null);

	function handlePress() {
		Linking.openURL(
			'https://docs.google.com/forms/d/e/1FAIpQLSe4Szo17_R3TWXCnpAtdYN2cnGpE_t4gCjgpWluKWBbX1UeMw/viewform?usp=sf_link'
		);
	}

	function handleTester() {
		Linking.openURL('https://testflight.apple.com/join/Cp3QDns3');
	}

	useEffect(() => {
		function handleResize() {
			console.log('resized window');
			setRender(render + 1);
		}

		// Add resize event listener
		window.addEventListener('resize', handleResize);

		// Clean up the event listener on component unmount
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		bottomRef.current.measureInWindow((x, y, width, height) => {
			console.log(' info at : ', y);
		});

		// scrollRef.current.
		// scrollRef.current.measureInWindow((x, y, width, height) => {
		//   console.log(
		//     `Scroll is at: x: ${x}, y: ${y}, width: ${width}, height: ${height}`
		//   );
		// });
	});

	return (
		<View
			style={{
				backgroundColor: Colors.Background,
				width: '100%',
				overflow: 'hidden',
				alignItems: 'center',
				flex: 1.5,
				flexGrow: 10,
			}}
		>
			<View
				style={{
					alignItems: 'center',
					width: Dim.width > Dim.height ? '40%' : '70%',
					flexDirection: 'column',
					flex: 1,
					justifyContent: 'space-between',
				}}
			>
				<Image
					source={require('../assets/icon_socrio.png')}
					resizeMethod="scale"
					style={{
						height: 150,
						width: 150,
						opacity: 0.9,
						borderRadius: 30,
						marginVertical: 20,
					}}
				/>
				{/* <View
					style={{
						width: '60%',
						height: '20%',
						marginVertical: Dim.width > Dim.height ? '5%' : '10%',
						alignItems: 'center',
						justifyContent: 'center',
						textAlign: 'center',
					}}
				> */}
				<CustomText
					style={{
						position: 'relative',
						fontSize: Dim.width > Dim.height ? 40 : 25,
						fontWeight: '500',
						textAlignVertical: 'center',
						marginVertical: Dim.width > Dim.height ? '5%' : '5%',
						textAlign: 'center',
					}}
					Contrast
				>
					{'Voice your ideas,\n ignite connections.'}
				</CustomText>
				{/* </View> */}
				{/* <View
					style={{
						width: '100%',
						height: '20%',
						alignItems: 'center',
						alignSelf: 'center',
						justifyContent:
							Dim.width > Dim.height ? 'space-evenly' : 'space-evenly',
						flexDirection: Dim.width > Dim.height ? 'row' : 'column',
					}}
				> */}
				{/* <RoundedButton
						small
						style={{
							backgroundColor: Colors.Contrast,
							height: 50,
							width: 250,
						}}
						onPress={() => handleTester()}
					>
						<CustomText
							Background
							u
							p1
							style={{ position: 'relative' }}
						>
							Beta Test (iOS)
						</CustomText>
					</RoundedButton>
					<RoundedButton
						small
						style={{
							height: 50,
							width: 250,
						}}
						onPress={() => handlePress()}
					>
						<CustomText
							Background
							p1
							u
							style={{ position: 'relative' }}
						>
							Subscribe
						</CustomText>
					</RoundedButton> */}
				{/* </View> */}
				{/* <View
              style={{ height: 50, width: 160, backgroundColor: Colors.Contrast }}
            > */}
				<TouchableOpacity
					onPress={() => {
						Linking.openURL(
							'https://apps.apple.com/us/app/socrio/id1668562651'
						);
					}}
				>
					<Image
						source={require('../assets/download_now.png')}
						resizeMethod="auto"
						style={{
							height: 75,
							width: 240,
							opacity: 0.8,
							borderRadius: 10,
							borderWidth: 0,
							// marginVertical: '5%',
							borderColor: Colors.BlueWhite,
							marginTop: '5%',
						}}
					/>
				</TouchableOpacity>
				<View
					ref={bottomRef}
					style={{
						alignSelf: 'center',
						// marginVertical: '10%',
						borderColor: Colors.Navbar,
						borderWidth: 0,
						backgroundColor: Colors.Foreground,
						borderRadius: 10,
						height: 50,
						width: 160,
						justifyContent: 'center',
						marginVertical: '5%',
					}}
				>
					<CustomText
						p1
						Contrast
						style={{ textAlign: 'center' }}
					>
						info@socrio.net
					</CustomText>
				</View>
			</View>
			<BottomTabBar />
		</View>
	);
};
