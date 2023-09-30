import { Dimensions } from 'react-native';

export const Colors = {
	Background: '#1A2028',
	Foreground: '#2C3840',
	Navbar: '#222B32',
	Contrast: '#6495ED',
	Light: '#D4F1F9',
	Record: '#DA6D55',
	Earth: '#9D847E',
	BlueWhite: '#A6C9E2',
	Confirm: '#33A133',
	Cancel: '#D9364A',
};

export const Dim = {
	width: Dimensions.get('window').width,
	height: Dimensions.get('window').height,
};

export const Font = {
	h1: {
		size: 36,
		family: 'OverPass-Regular',
	},
	h2: {
		size: 32,
		family: 'OverPass-Regular',
	},
	h3: {
		size: 28,
		family: 'OverPass-Regular',
	},
	h4: {
		size: 24,
		family: 'OverPass-Regular',
	},
	p1: {
		size: 20,
		family: 'OverPass-Regular',
	},
	p2: {
		size: 18,
		family: 'OverPass-Regular',
	},
	p3: {
		size: 14,
		family: 'OverPass-Regular',
	},
	p4: {
		size: 12,
		family: 'OverPass-Regular',
	},
};
