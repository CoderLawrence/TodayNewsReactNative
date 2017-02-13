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
        backgroundColor: '#e5e5e5',
    };

    static propTypes = {
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
    }
}