/**
 * Created by lawrence on 2017/2/9.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import BaseNavigationBar from '../../common/BaseNavigationBar';

export default class PersonalFavorite extends Component {
    render() {
        return (
            <View style={styles.container}>
                <BaseNavigationBar title={'我的收藏'} leftItemTitle={'返回'} leftItemFunc={this.props.navigator.pop}/>
                <View style={{flex: 1, backgroundColor: 'red'}}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})