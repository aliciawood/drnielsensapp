import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Text, Button } from 'react-native';
import Home from '../screens/Home';
import TestStatementsHome from '../screens/TestStatementsHome';
import ComingSoon from '../screens/ComingSoon';

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