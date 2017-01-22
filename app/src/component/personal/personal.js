/**
 * Created by lawrence on 2017/1/17.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class Personal extends Component {

    constructor(props) {
        super(props);

        this.props.navigator.navigationBarHidden = true;
    }

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
        backgroundColor: '#ffffff',
    }
})