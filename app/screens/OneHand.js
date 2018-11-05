import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, FlatList  } from 'react-native';

class OrganListItem extends React.PureComponent {
	_onPress = () => {
	  this.props.onPressItem(this.props.organName);
	};
  
	render() {
	  return (
		<TouchableOpacity onPress={this._onPress}>
		  <View style={{ padding: 5 }}>
			<Text style={{ fontSize: 16 }}>
			  {this.props.organName}
			</Text>
		  </View>
		</TouchableOpacity>
	  );
	}
  }
  
  class MultiSelectList extends React.PureComponent {
  
	_keyExtractor = (item, index) => item.organName;
  
	_renderItem = ({item}) => (
	  <OrganListItem
		organName={item.organName}
		onPressItem={this.props.onPressItem}
	  />
	);
  
	render() {
	  return (
		<FlatList
		  data={this.props.data}
		  keyExtractor={this._keyExtractor}
		  renderItem={this._renderItem}
		/>
	  );
	}
  }


export default class OneHand extends React.Component {

	constructor(props){
		super(props);
		this.whichHand = this.props.navigation.state.params.whichHand;
		if (this.whichHand === 'left') { 
			this.pointData = [
				{organName: 'Kidney', color: 'blue', number: 1},
				{organName: 'Liver', color: 'green', number: 2},
				{organName: 'Heart', color: 'red', number: 3},
				{organName: 'Bladder', color: 'blue', number: 1},
				{organName: 'Gall Bladder', color: 'green', number: 2},
				{organName: 'Small Intestine', color: 'red', number: 3},
				{organName: 'Governing Vessel/Conception Vessel', color: 'purple', number: 4}
			];
		} else if (this.whichHand === 'right') {
			this.pointData = [
				{organName: 'Adrenal Thyroid', color: 'red', number: 1},
				{organName: 'Stomach', color: 'yellow', number: 2},
				{organName: 'Large Intestine', color: 'white', number: 3},
				{organName: 'Sex Organs', color: 'red', number: 1},
				{organName: 'Spleen Pancreas', color: 'yellow', number: 2},
				{organName: 'Lungs', color: 'white', number: 3},
				{organName: 'Governing Vessel/Conception Vessel', color: 'purple', number: 4}
			];
		}
		
	}
	onPressItem = (id: string) => {
		let testStatement = this.props.navigation.state.params.testStatement;
		if(this.whichHand === 'left') {
			this.props.navigation.navigate('Emotions',{whichHand:this.whichHand,organName: id, title: testStatement + ' > Left Hand > ' + id});
		} else {
			this.props.navigation.navigate('Emotions',{whichHand:this.whichHand,organName: id, title: testStatement + ' > Right Hand > ' + id});
		}
		
	};

	render() {
		return (
			<View style={styles.view} >
				{
					this.whichHand === 'left' ?
					<Image
						style={styles.hand}
						resizeMode='contain'
						source={require('../config/img/leftHand.jpg')}
					/> :
					<Image
						style={styles.hand}
						resizeMode='contain'
						source={require('../config/img/rightHand.jpg')}
					/>
				}
				<MultiSelectList
					data={this.pointData}
					whichHand={this.whichHand}
					onPressItem={this.onPressItem.bind(this)}
				/>
				
				
			</View>
		);
	}
}
var {height, width} = Dimensions.get('window');
const styles = {
	hand: {
		height: height/2,
		
	},
	view: {
		// backgroundColor: 'skyblue',
		height: height,
		alignItems: 'center'
	}
};
