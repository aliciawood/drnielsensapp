import React from 'react';
import { TabNavigator, StackNavigator, HeaderBackButton } from 'react-navigation';
import { Text, Button, View, Dimensions } from 'react-native';
import Home from '../screens/Home';
import TestStatementsHome from '../screens/TestStatementsHome';
import ComingSoon from '../screens/ComingSoon';
import Hands from '../screens/Hands';
import OneHand from '../screens/OneHand';
import Emotions from '../screens/Emotions';
import Emotion from '../screens/Emotion';

const screen = Dimensions.get("window");

export const Root = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            title: 'ESR',
        })
    },
    TestStatementsHome: {
        screen: TestStatementsHome,
        navigationOptions: ({ navigation }) => ({
            title: 'Test Statements',
        }),
    },
    Hands: {
        screen: Hands,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.testStatement}`,
            headerTitle: ({ style, children : testStatement }) => {
                return (
                    <Text style={style} numberOfLines={2}>{testStatement} </Text>   
                )
            },
            headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
            headerTitleStyle:{ fontSize: 14, height: 40, width: screen.width-90},
        }),
        
    },
    OneHand: {
        screen: OneHand,
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.title}`,
            headerTitle: ({ style, children : title }) => {
                return (
                    <Text style={style} numberOfLines={2}>{title} </Text>
                )
            },
            headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
            headerTitleStyle:{ fontSize: 14, height: 40, width: screen.width-90},
        }),
        
    },
    Emotions: {
        screen: Emotions,
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.title}`,
            headerTitle: ({ style, children : title }) => {
                return (
                    <Text style={style} numberOfLines={2}>{title} </Text>
                )
            },
            headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
            headerTitleStyle:{ fontSize: 14, height: 40, width: screen.width-90},
        }),
    },
    Emotion: {
        screen: Emotion,
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.title}`,
            headerTitle: ({ style, children : title }) => {
                return (
                    <Text style={style} numberOfLines={2}>{title} </Text>
                )
            },
            headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
            headerTitleStyle:{ fontSize: 14, height: 40, width: screen.width-90},
        })
    },
    ThoughtsHome: {
        screen: ComingSoon,
        navigationOptions: ({ navigation }) => ({
            title: 'Thoughts',
        }),
    },
    FeelingsHome: {
        screen: ComingSoon,
        navigationOptions: ({ navigation }) => ({
            title: 'Feelings',
        }),
    },
    PhysicalHome: {
        screen: ComingSoon,
        navigationOptions: ({ navigation }) => ({
            title: 'Physical',
        }),
    },
    
}, {
  mode: 'modal'
});