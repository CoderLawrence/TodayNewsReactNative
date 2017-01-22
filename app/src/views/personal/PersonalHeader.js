/**
 * Created by lawrence on 2017/1/22.
 */

import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';

import Constants from '../../common/constants';

export default class PersonalHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.backgroundImage} source={require('../../../img/personal/wallpaper_profile_night@2x.jpg')}>
                    <Image style={styles.headerImage} defaultSource={require('../../../img/personal/head-1_36x36_@2x.png')}/>

                </Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: Constants.window.width,
        height: 220,
    },

    backgroundImage: {
        width: Constants.window.width,
        height: 220,
    },

    headerImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderColor: '#e5e5e5',
        borderWidth: 1,
        marginTop: 50,
        alignSelf: 'center',
    }
});