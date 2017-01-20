/**
 * Created by lawrence on 2017/1/17.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    NavigatorIOS,
    AppRegistry,
    StatusBar
} from 'react-native';

import TabBarView from '../src/tabBar/tabBarView'

export default class App extends Component {
    render() {
        return (
           <View style={styles.container}>
               <StatusBar barStyle = 'light-content'/>
               <NavigatorIOS
                   style = {styles.container}
                   initialRoute={{title:'首页', component: TabBarView}}
                   configureScene={() => {
                       return Navigator.SceneConfigs.PushFromRight;
                   }}

                   renderScene={(route, navigator) => {
                       let Component = route.component;
                       return (
                           <Component navigator = {navigator} route = {route} {...route.passProps}/>
                       )
                   }}
               />
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
