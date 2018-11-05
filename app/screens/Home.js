import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Dimensions } from 'react-native';

export default class Home extends React.Component {

	constructor(){
		super();
		this.state = {};
    }
    onClickTestStatements() {
        this.props.navigation.navigate('TestStatementsHome',{});
    }
    onClickThoughts() {
        this.props.navigation.navigate('ThoughtsHome',{});
    }
    onClickFeelings() {
        this.props.navigation.navigate('FeelingsHome',{});
    }
    onClickPhysical() {
        this.props.navigation.navigate('PhysicalHome',{});
    }
	render() {
		var {height, width} = Dimensions.get('window');
		return (
			<View style={{flex: 1, flexDirection: 'row'}}>
				<View style={{width: width/2, height: height-70, backgroundColor: 'powderblue', flexDirection: 'column'}}>
					<View style={{width: width/2, height: (height-70)/2, 
							backgroundColor: 'darkblue',
							justifyContent: 'center',
							alignItems: 'center'}}>
						<Button
							title='Test Statements'
							onPress={this.onClickTestStatements.bind(this)}
						/>
					</View>
					<View style={{width: width/2, height: (height-70)/2, 
							backgroundColor: 'white',
							justifyContent: 'center',
							alignItems: 'center'}}>
						<Button
							title='Feelings'
							onPress={this.onClickFeelings.bind(this)}
						/>
					</View>
					
					
				</View>
				<View style={{width: width/2, height: height-70, backgroundColor: 'skyblue', flexDirection: 'column'}} >
					<View style={{width: width/2, height: (height-70)/2, 
						backgroundColor: 'grey',
						justifyContent: 'center',
						alignItems: 'center'}}>
						<Button
							title='Thoughts'
							onPress={this.onClickThoughts.bind(this)}
						/>
					</View>
					<View style={{width: width/2, height: (height-70)/2, 
						backgroundColor: 'lightblue',
						justifyContent: 'center',
						alignItems: 'center'}}>
						<Button
							title='Physical'
							onPress={this.onClickPhysical.bind(this)}
						/>
					</View>
					
				</View>
			</View>
		);
	}
}