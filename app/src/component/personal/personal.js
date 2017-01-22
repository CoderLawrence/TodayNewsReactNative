/**
 * Created by lawrence on 2017/1/17.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

import Constants from '../../common/constants';

export default class Personal extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <View style={styles.container}>
                <Image style={styles.backgroundImage} source={require('../../../img/personal/wallpaper_profile_night@2x.jpg')}>
                </Image>
            </View>
        )
    }
}

const  styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },

    backgroundImage: {
        width: Constants.window.width,
        height: 220,
        alignItems: 'center',
    }
})