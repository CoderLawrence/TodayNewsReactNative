/**
 * Created by lawrence on 2017/1/22.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

import Constants from '../../common/Constants';

const favoriteIcon = require('../../../img/personal/favoriteicon_profile_24x24_@2x.png');
const nightIcon = require('../../../img/personal/nighticon_profile_24x24_@2x.png');
const

const names = ['关注', '粉丝', '7天访客'];
const buttonImages = [favoriteIcon, nightIcon];

export default class PersonalHeader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.backgroundImage} source={require('../../../img/personal/wallpaper_profile_night@2x.jpg')}>
                    <Image style={styles.headerImage} defaultSource={require('../../../img/personal/head-1_36x36_@2x.png')}/>
                    <Text style={styles.nameLabel} numberOfLines={1}>{this.props.name}</Text>
                    <View style={{width: Constants.window.width, height: 30, marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
                        {
                            names.map((title, index) => {
                                return (
                                    <View style={{width: Constants.screenWidth/3, height: 30, flexDirection: 'row', alignItems: 'center'}} key = {index}>
                                        <View style={{width: Constants.screenWidth/3, height: 30, flexDirection: 'column', alignItems: 'center'}}>
                                            <Text style={{fontSize: 12, color: '#ffffff', backgroundColor: 'rgba(0, 0, 0, 0)', textAlign: 'center'}}>0</Text>
                                            <Text style={{fontSize: 12, color: '#e5e5e5', backgroundColor: 'rgba(0, 0, 0, 0)', textAlign: 'center'}}>{title}</Text>
                                        </View>
                                        <View style={{width: 0.5, height: 30, backgroundColor: '#ffffff'}}></View>
                                    </View>
                                )
                            })
                        }
                    </View>
                </Image>
                <View style={{width: Constants.window.width, height: 40, backgroundColor: 'red'}}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: Constants.window.width,
        height: 240,
    },

    backgroundImage: {
        width: Constants.window.width,
        height: 200,
    },

    headerImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderColor: '#e5e5e5',
        borderWidth: 1,
        marginTop: 50,
        alignSelf: 'center',
        flexDirection: 'row',
    },

    nameLabel: {
        fontSize: 16,
        alignSelf: 'center',
        marginTop: 10,
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        color: '#ffffff',
    },
});