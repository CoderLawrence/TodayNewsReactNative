/**
 * Created by lawrence on 2017/1/17.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Navigator,
    AppRegistry,
    StatusBar
} from 'react-native';

import BaseTabBar from '../src/tabBar/tabBar';

export default class App extends Component {
    render() {
        return (
           <View style={styles.container}>
               <StatusBar barStyle = 'light-content'/>
               <BaseTabBar/>
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
