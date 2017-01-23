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

export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    pop() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    render () {
        return (
            <View style={styles.container}>
                <NavigatorBar title = {'首页'} rightTitle = {'确定'} rightAction = {this.pop.bind(this)} style = {{backgroundColor: 'red'}}/>
                <Text style={{alignItems:'center',}}>首页模块</Text>
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