/**
 * Created by lawrence on 2017/1/19.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import BaseNavigationBar from '../../common/BaseNavigationBar';

export default class Care extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <View style={styles.container}>
                <BaseNavigationBar
                    title={'我的关注'}
                    rightItemTitle={'确定'}
                    leftImageSource={require('../../../img/navigator/leftbackbutton_video_detais_44x44_@2x.png')}
                    leftItemFunc={() => alert('你啊')}
                />
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
