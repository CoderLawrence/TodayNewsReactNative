/**
 * Created by lawrence on 2017/2/9.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    TouchableHighlight
} from 'react-native';

import BaseNavigationBar from '../../common/BaseNavigationBar';
import PullRefreshScrollView from 'react-native-pullrefresh-scrollview';

export default class PersonalFavorite extends Component {

    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                '消息通知', '头条商城', '京东特供', '我要爆料', '用户反馈', '系统设置'
            ])
        };

        //bind
        this._renderRow = this._renderRow.bind(this);
        this._renderSeparator = this._renderSeparator.bind(this);
        this._renderSectionHeader = this._renderSectionHeader.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <BaseNavigationBar title={'收藏历史'} leftItemTitle={'返回'} leftItemFunc={this.props.navigator.pop}/>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    renderSeparator={this._renderSeparator}
                    renderScrollComponent={(props) => <PullRefreshScrollView onRefresh = {(PullRefresh) => this.onRefresh(PullRefresh)} {...props}></PullRefreshScrollView>}
                />

            </View>
        )
    }

    _renderRow(rowData: string, sectionID: number, rowID: number, hightlightRow: (sectionID: number, rowID: number) => void) {
        return (
            <TouchableHighlight onPress = {() => {
                this._pressRow(rowID);
                hightlightRow(sectionID, rowID);
            }}>
                <View style={{height: 50, justifyContent: 'center'}}>
                    <Text style={{marginLeft: 10}}>{rowData}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
        return (
            <View
                key = {rowID}
                style={{height: 1, backgroundColor: '#e5e5e5'}}
            >
            </View>
        );
    }

    _renderSectionHeader(sectionID: number) {
        return (
            <View key = {sectionID} style={{height: 10, backgroundColor: '#e5e5e5'}}></View>
        );
    }

    onRefresh(PullRefresh) {
        PullRefresh.onRefreshEnd();
    }

    _pressRow() {
        alert('你啊');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    }
})