import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ComingSoon extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}> Coming Soon! </Text>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 40,
	}
};