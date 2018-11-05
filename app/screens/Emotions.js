import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity  } from 'react-native';
// import organsToEmotions from '../config/organToEmotions.json';
let purpleSection = [{emotionName: "Guilt"},{emotionName: "Shame"},{emotionName: "Self-Conscious"},{emotionName: "Pride"},{emotionName: ""},{emotionName: ""},{emotionName: ""},
	{emotionName: ""},];
let redSection = [{emotionName: "Lost"},{emotionName: "Vulnerable"},{emotionName: "Confused"},{emotionName: "Abandoned"},{emotionName: "Deserted"},{emotionName: "Uncertain"},
	{emotionName: "Insecurity"},{emotionName: "Depleted"},{emotionName: "Impatient"},{emotionName: "Can't Figure it Out"},{emotionName: "Swallowed Emotion"},
	{emotionName: "Suppressed"},{emotionName: "Forgetful"},{emotionName: "Paranoia"},{emotionName: "Numb"},{emotionName: "Not Caring"},{emotionName: "Lack of Emotion"},{emotionName: "Hyper"}, {emotionName: "Uncontrolled Abnormal Laughing"}, 
	{emotionName: "Vivid Dreaming"},{emotionName: "Frightfully Overjoyed"},{emotionName: "Forever Loved"}];
let yellowSection = [{emotionName: "Low Self Esteem"},{emotionName: "Worry"},{emotionName: "Lack of Control"},{emotionName: "Value"},{emotionName: "Worth"},{emotionName: "Hopelessness"},{emotionName: "Distrust"},
	{emotionName: "Overly Sorry"},{emotionName: "Swallowed Emotion"},{emotionName: "Over Thinking"},{emotionName: "Over Concern"},{emotionName: "Living through Others"},{emotionName: "Disgust"},{emotionName: "Nervous"},
	{emotionName: "Obsession"},{emotionName: "Egotistic"},{emotionName: "Expanded Importance of Self"},{emotionName: "Despair"},{emotionName: "Helplessness"},{emotionName: "Stifled"},{emotionName: "Over Sympathetic"},
	{emotionName: "Mistrust"},{emotionName: "Snotty"},{emotionName: "Stuck up"},{emotionName: "Craving Attention"}];
let whiteSection = [];
let blueSection = [];
let greenSection = [];
let organsToEmotions = {
	"Governing Vessell Conception Vessel":purpleSection,
	"Heart": [redSection].concat([{emotionName: "Grief"},{emotionName: "Sorrow"},{emotionName: "Sadness"},{emotionName: "Despair"},{emotionName: "Loss"},{emotionName: "Loneliness"}]),
	"Small Intestine": redSection,
	"Sex Organs": redSection,
	"Adrenal Thyroid": redSection,
	"Stomach": yellowSection,
	"Large Intestine": [],
	
	"Spleen": [],
	"Pancreas": [],
	"Lungs": [],
	"Kidney": [],
	"Liver": greenSection,
	"Bladder": [],
	"Gallbladder": greenSection,
	
	
};

class EmotionListItem extends React.PureComponent {
	_onPress = () => {
	  this.props.onPressItem(this.props.emotionName);
	};
  
	render() {
	  return (
		<TouchableOpacity onPress={this._onPress}>
		  <View style={{ padding: 5 }}>
			<Text style={{ fontSize: 16 }}>
			  {this.props.emotionName}
			</Text>
		  </View>
		</TouchableOpacity>
	  );
	}
  }
  
  class MultiSelectList extends React.PureComponent {
  
	_keyExtractor = (item, index) => item.emotionName;
  
	_renderItem = ({item}) => (
	  <EmotionListItem
		emotionName={item.emotionName}
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


export default class Emotions extends React.Component {

    onPressItem = (id: string) => { 
				console.log("pressed: ",id);
				let testStatement = this.props.navigation.state.params.title;
				console.log("testStatement: ",testStatement);
				this.props.navigation.navigate('Emotion',{emotion: id, title: testStatement + ' > ' + id});
		}
		
		/*
		
			
			if(this.whichHand === 'left') {
				this.props.navigation.navigate('Emotions',{whichHand:this.whichHand,organName: id, title: testStatement + ' > Left Hand > ' + id});
			} else {
				this.props.navigation.navigate('Emotions',{whichHand:this.whichHand,organName: id, title: testStatement + ' > Right Hand > ' + id});
			}
			
		};
		*/

	render() {
        let organName = this.props.navigation.state.params.organName;
				let whichHand = this.props.navigation.state.params.whichHand;
				console.log("organsToEmotions: ",organsToEmotions);
				console.log("organName: ",organName);
        console.log('data: ',organsToEmotions[organName])
        console.log("this.props.organName: ",organName);
        
		return (
			<View style={styles.view}>
                <MultiSelectList
                    data={organsToEmotions[organName]}
                    whichHand={whichHand}
                    onPressItem={this.onPressItem.bind(this)}
                />
			</View>
		);
	}
}

const styles = {
	view: {
		
	}
};