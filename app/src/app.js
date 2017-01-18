/**
 * Created by lawrence on 2017/1/17.
 */

import StatusBar from 'StatusBar';
import React, {Component} from 'react';
import {StyleSheet, View, AppRegistry} from 'react-native';

import BaseNavigator from '../src/navigators/baseNavigator';
import BaseTabBar from '../src/tabBar/tabBar';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    translucent={true}
                    backgroundColor={'transparent'}
                    barStyle={'light-content'}/>
                <BaseTabBar/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
