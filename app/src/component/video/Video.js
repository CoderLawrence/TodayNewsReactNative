/**
 * Created by lawrence on 2017/1/19.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import NavigatorBar from '../../common/NavigatorBar';

export default class Video extends Component {
    render () {
        return (
            <View style={styles.container}>
                <NavigatorBar/>
                <Text>hello world</Text>
            </View>
        )
    }
}

const  styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    }
})
