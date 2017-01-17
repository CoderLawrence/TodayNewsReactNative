/**
 * Created by lawrence on 2017/1/17.
 */

import StatusBar from 'StatusBar';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    AppRegistry,
} from 'react-native';

export default  class App extends Component {
    render() {
        <View style={styles.container}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'light-content'}/>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

