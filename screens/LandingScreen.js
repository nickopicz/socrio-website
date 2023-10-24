import React, { useEffect, useRef, useCallback, useState } from 'react';
import { View, Text, Image, ScrollView, ImageBackground } from 'react-native';
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
				flex: 1,
			}}
		>
			<View
				style={{
					alignItems: 'center',
					width: Dim.width > Dim.height ? '40%' : '70%',
					flexDirection: 'column',
					flex: 1,
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						height: '20%',
						width: '60%',
						justifyContent: 'space-evenly',
					}}
				>
					<Image
						source={require('../assets/icon_socrio.png')}
						resizeMethod="scale"
						style={{
							height: 100,
							width: 100,
							opacity: 0.9,
							borderRadius: 25,
						}}
					/>
					<CustomText
						style={{
							position: 'relative',
							fontSize: 70,
							fontWeight: '600',
							textAlignVertical: 'center',
						}}
						Contrast
					>
						Socrio
					</CustomText>
				</View>
				<View
					style={{
						width: '60%',
						height: '20%',
						marginVertical: Dim.width > Dim.height ? '5%' : '10%',
						alignItems: 'center',
						justifyContent: 'center',
						textAlign: 'center',
					}}
				>
					<CustomText
						style={{
							position: 'relative',
							fontSize: 50,
							fontWeight: '500',
							textAlignVertical: 'center',
						}}
						Contrast
					>
						{'Voice your ideas,\n ignite connections.'}
					</CustomText>
				</View>
				<View
					style={{
						width: '80%',
						height: '20%',
						alignItems: 'center',
						justifyContent:
							Dim.width > Dim.height ? 'space-between' : 'space-evenly',
						marginVertical: '5%',
						flexDirection: Dim.width > Dim.height ? 'row' : 'column',
					}}
				>
					<RoundedButton
						small
						style={{
							backgroundColor: Colors.Contrast,
							height: 50,
							width: 300,
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
							width: 300,
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
					</RoundedButton>
				</View>
				{/* <View
              style={{ height: 50, width: 160, backgroundColor: Colors.Contrast }}
            > */}
				<Image
					source={require('../assets/app_store_apple.jpg')}
					resizeMethod="auto"
					style={{
						height: 75,
						width: 240,
						opacity: 0.8,
						borderRadius: 10,
						borderWidth: 0,
						marginVertical: '5%',
						borderColor: Colors.BlueWhite,
					}}
				/>

				<View
					ref={bottomRef}
					style={{
						alignSelf: 'center',
						borderColor: Colors.Navbar,
						borderWidth: 0,
						backgroundColor: Colors.Foreground,
						borderRadius: 10,
						height: 50,
						width: 160,
						justifyContent: 'center',
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
