/**
 * Created by lawrence on 2017/1/17.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ListView,
    TouchableHightlight,
} from 'react-native';

import Constants from '../../common/Constants';
import PersonalHeader from '../../views/personal/PersonalHeader';
import PersonalFavorite from './PersonalFavorite';

export default class Personal extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };

        //bind
        this._renderRow = this._renderRow.bind(this);
        this._renderSeparator = this._renderSeparator.bind(this);
    }

    render () {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    renderSeparator={this._renderSeparator}
                    renderHeader={() => <PersonalHeader name = 'CoderLawrence' clickButton={() => this.clickButton()}/>}
                    renderSectionHeader={()=> <View style={{height: 10, backgroundColor: '#e5e5e5'}}></View>}
                >
                </ListView>
            </View>
        )
    }

    _renderRow(rowData) {
        return (
            <View style={{height: 50, justifyContent: 'center'}}>
                <Text>{rowData}</Text>
            </View>
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

    clickButton() {
        this.props.navigator.push({
            title: '收藏历史',
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