import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity  } from 'react-native';
import ImageMapper from 'react-image-mapper';

export default class Hands extends React.Component {

	onPressLeft(){
		let testStatement = this.props.navigation.state.params.testStatement;
		this.props.navigation.navigate('OneHand',{whichHand:'left',testStatement: testStatement, title: testStatement + ' > Left Hand'});
	}
	
	onPressRight(){
		let testStatement = this.props.navigation.state.params.testStatement;
		this.props.navigation.navigate('OneHand',{whichHand:'right',testStatement: testStatement, title: testStatement + ' > Right Hand'});
	}
	render() {
		let MAP = {
			name: "two-hands",
			areas: [
				{ name: "1", shape: "circle", coords: [10,10,5] }
				// { name: "2", shape: "circle", coords: [219,118,220,210,283,210,284,119] },
    			// { name: "3", shape: "circle", coords: [381,241,383,94,462,53,457,282] },
    			// { name: "4", shape: "circle", coords: [245,285,290,285,274,239,249,238] },
			]
		};

		return (
			<div >
				<ImageMapper src={'../config/img/rightHand.jpg'} map={MAP}
					onClick={area => {
						console.log("clicked: ",area);
					}}
					onMouseEnter={area => {
						console.log("mouse enter: ",area);
					}}
    				onMouseLeave={area => {
						console.log("mouse leave: ",area);
					}}
				/>
				{/* <TouchableOpacity onPress={this.onPressRight.bind(this)}>
					<Image
						style={styles.left}
						resizeMode='contain'
						source={require('../config/img/rightHand.jpg')}
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={this.onPressLeft.bind(this)}>
					<Image
						style={styles.right}
						resizeMode='contain'
						source={require('../config/img/leftHand.jpg')}
					/>
				</TouchableOpacity> */}
			</div>
		);
	}
}
var {height, width} = Dimensions.get('window');
const styles = {
	image: {
		width: width
	},
	left: {
		width: (width*.514)
	},
	right: {
		width: (width*.486),
	},
	view: {
		// flex: 1,
		// flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: (width*.514)
	}
};