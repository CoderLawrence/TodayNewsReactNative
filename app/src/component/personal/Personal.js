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

import Constants from '../../common/Constants';
import PersonalHeader from '../../views/personal/PersonalHeader';
import PersonalFavorite from './PersonalFavorite';

export default class Personal extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <View style={styles.container}>
                <PersonalHeader name = 'CoderLawrence' clickButton={() => this.clickButton()}/>
            </View>
        )
    }

    clickButton() {
        this.props.navigator.push({
            title: '我的收藏',
            component: PersonalFavorite,
        })
    }
}

const  styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },

})