/**
 * Created by lawrence on 2017/2/3.
 */

import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    AppRegistry,
    TouchableOpacity,
} from 'react-native';

import WJScrollMenuInfo from './WJScrollMenuInfo';

/**
 *  定制滑动菜单工具类
 */
export default class WJScrollMenuView extends Component {

    static defaultProps = {
        menuInfo: {},
        backgroundColor: '#ffffff',
    };

    static propTypes = {
        menuInfo: PropTypes.array,
        backgroundColor: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <View style={Styles.container}>
                <ScrollView>
                    {
                        this.props.menuInfos.map((title, i)=> {
                            <TouchableOpacity
                                key = {i}
                            >
                                <View style={Styles.selectedItem}>
                                    <Text>{title}</Text>
                                </View>
                            </TouchableOpacity>
                        })
                    }
                </ScrollView>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
});
