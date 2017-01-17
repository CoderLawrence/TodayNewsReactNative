/**
 * Created by lawrence on 2017/1/17.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Navigator,
} from 'react-native';

type Props = {};

export default class BaseNavigator extends Component {
    constructor(props: Props) {
        super(props);
        (this: any).renderScene = this.renderScene.bind(this);
    }

    render() {
        return (
            <Navigator
                ref = 'navigator'
                style = {styles.container}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.FloatFromBottom;
                }}

                initialRoute={{}}
                renderScene={this.renderScene}
            />
        );
    }

    push(route: any) {
        this.refs.navigator.push(route);
    }

    pop(route: any) {
        this.refs.navigator.pop();
    }

    renderScene(route: any, navigator: Navigator) {
        // if (route.settings) {
        //     // return (
        //     //     <
        //     // )
        // }
        //
        // if (route.locations) {
        //     return (
        //
        //     )
        // }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    }
});