import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker, Dimensions} from 'react-native';

export default class TestStatementsHome extends React.Component {

	constructor(){
		super();
		this.state = {
			testStatement: "Complete Test Statement Here",
			startingPiece: "I am willing to..."
		}
	}

	onUseTestStatement(){
		let testStatement = this.state.testStatement.charAt(0).toLowerCase() + this.state.testStatement.slice(1)
		let fullTestStatement = this.state.startingPiece.substring(0, this.state.startingPiece.length-3) + " " + testStatement;
		this.props.navigation.navigate('Hands',{
			testStatement: fullTestStatement});
	}
	render() {
		var {height, width} = Dimensions.get('window');
		return (
			<View style={{flex: 1,backgroundColor: 'white',
				}}>
				<View style={{flex: 3}}>
					<Picker
						selectedValue={this.state.startingPiece}
						style={{ height: 100, width: width }}
						onValueChange={(itemValue, itemIndex) => this.setState({startingPiece: itemValue})}>
						<Picker.Item label="I am willing to..." value="I am willing to..." />
						<Picker.Item label="I am ready to..." value="I am ready to..." />
						<Picker.Item label="I am ready, willing, and able to..." value="I am ready, willing, and able to..." />
					</Picker>
				</View>
				<View style={{flex: 2}}>
					<TextInput
						style={{height: 100, width: width, borderColor: 'gray', borderWidth: 1}}
						onChangeText={(text) => this.setState({testStatement: text})}
						value={this.state.testStatement}
						clearButtonMode="always"
					/>
				</View>
				<View style={{flex:2}}>
					<Button
						title='Use Test Statement'
						onPress={this.onUseTestStatement.bind(this)}
					/>
				</View>
			</View>
		);
	}
}
