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
import PullRefreshScrollView from 'react-native-pullrefresh-scrollview';

export default class PersonalFavorite extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <BaseNavigationBar title={'收藏历史'} leftItemTitle={'返回'} leftItemFunc={this.props.navigator.pop}/>
                <PullRefreshScrollView ref = "PullRefresh" onRefresh = {() => this.onRefresh()}>
                    <View><Text>Scroll</Text></View>
                </PullRefreshScrollView>
            </View>
        )
    }

    onRefresh() {

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})