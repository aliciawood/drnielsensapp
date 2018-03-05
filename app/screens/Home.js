import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

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
		return (
			<View>
				<Button
					title='Test Statements'
					onPress={this.onClickTestStatements.bind(this)}
				/>
                <Button
					title='Thoughts'
					onPress={this.onClickThoughts.bind(this)}
				/>
                <Button
					title='Feelings'
					onPress={this.onClickFeelings.bind(this)}
				/>
                <Button
					title='Physical'
					onPress={this.onClickPhysical.bind(this)}
				/>
			</View>
		);
	}
}