/**
 * Created by lawrence on 2017/2/13.
 */

import React, { Component, PropTypes } from 'react';
import {
    Text,
    View,
    Alert,
    ListView,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import LoadingView from './LoadingView';

export default class RefreshListView extends Component {

    static defaultProps = {
        showSeparatorColor: true,
        separatorColor: '#000000',
        backgroundColor: '#ffffff',
    };

    static propTypes = {
        headerView: PropTypes.node,
        showSeparatorColor: PropTypes.bool,
        separatorColor: PropTypes.string,
        backgroundColor: PropTypes.string,
    };

    constructor(props) {
        super(props);

        const getSectionHaderData = (dataBlob, sectionId) => dataBlob[sectionId];
        const getRowData = (dataBlob, sectionId, rowId) => dataBlob[`${sectionId}:${rowId}`];

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
            getSectionHaderData,
            getRowData,
        });

        this.state = {
            loaded: false,
            dataSource: ds
        }

        this._renderSeparator = this._renderSeparator.bind(this);
    };

    render() {

        // if (!this.state.loaded) {
        //     return <LoadingView isVisible={!this.state.loaded}/>;
        // }
        return (
          <ListView
              dataSource = {this.state.dataSource}
              renderHeader = {() => this.props.headerView}
          />
        );
    }

    _renderSeparator(sectionId: number, rowId: number, adjacentRowHighlighted: bool) {
        return (
            <View
                key = {`${sectionId}:${rowId}`}
                style={{height: 1, backgroundColor: '#e5e5e5'}}
            ></View>
        );
    }
}

const styles = StyleSheet.create({
    listView: {
        flex: 1,
    }
})