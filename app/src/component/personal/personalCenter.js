/**
 * Created by lawrence on 2017/1/17.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class PersonalCenter extends Component {
    render () {
        return (
            <View style={styles.container}>
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