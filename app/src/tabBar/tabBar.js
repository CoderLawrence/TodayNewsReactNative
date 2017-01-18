/**
 * Created by lawrence on 2017/1/18.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    AppRegistry,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

const TabNavigatorItem = TabNavigator.Item;

const Tab_Normal_Home = require('../../img/tabBar/home_tabbar_32x32_@2x.png');
const Tab_Normal_Video = require('../../img/tabBar/video_tabbar_32x32_@2x.png');
const Tab_Normal_Care = require('../../img/tabBar/newcare_tabbar_32x32_@2x.png');
const Tab_Normal_Mine = require('../../img/tabBar/mine_tabbar_32x32_@2x.png');

const Tab_Pre_Home = require('../../img/tabBar/home_tabbar_press_32x32_@2x.png');
const Tab_Pre_Video = require('../../img/tabBar/video_tabbar_press_32x32_@2x.png');
const Tab_Pre_Care = require('../../img/tabBar/newcare_tabbar_press_32x32_@2x.png');
const Tab_Pre_Mine = require('../../img/tabBar/mine_tabbar_press_32x32_@2x.png');

export default class BaseTabBar extends Component {
    constructor() {
        super();
        this.state = {
            selectedTab: 'home',
        }
    }

    /**
     * tab点击方法
     * @param tabName
     */
    onPress(tabName) {
        if (tabName) {
            this.setState ({
                selectedTab: tabName,
            });
        }
    }

    /**
     * 每个子页面
     * @param title 标题
     * @param tabName 名称
     * @param tabContent 内容
     * @param isBadge 提醒个数
     */
    renderTabView(title, tabName, tabContent, isBadge, index) {
        var tabNormal;
        var tabPress;

        switch (index) {
            case 0:
                tabNormal = Tab_Normal_Home;
                tabPress = Tab_Pre_Home;
                break;
            case 1:
                tabNormal = Tab_Normal_Video;
                tabPress = Tab_Pre_Video;
                break;
            case 2:
                tabNormal = Tab_Normal_Care;
                tabPress = Tab_Pre_Care;
            case 3:
                tabNormal = Tab_Normal_Mine;
                tabPress = Tab_Pre_Mine;
                break;
            default:
                break;
        }

        return (
            <TabNavigatorItem
                title={title}
                renderIcon={() => <Image style={styles.tabIcon} source={tabNormal}/>}
                renderSelectedIcon={()=> <Image style={styles.tabIcon} source={tabPress}/>}
                selected={this.state.selectedTab == tabName}
                selectedTitleStyle={{color: '#f85959'}}
                onPress={()=> this.onPress(tabName)}
                renderBadge={()=> isBadge? <View style={styles.badgeView}><Text style={styles.badgeText}>15</Text></View> : null}
            >
                {this.createChildView(tabContent)}
            </TabNavigatorItem>
        );
    }

    /**
     * 自定义tabBar
     */
    tabBarView() {
        return (
            <TabNavigator
                tabBarStyle={styles.tab}
            >
                {this.renderTabView('头条', 'Home', '头条板块', true, 0)}
                {this.renderTabView('视频', 'Video', '视频模块', true, 1)}
                {this.renderTabView('关注', 'Follow', '关注板块', false, 2)}
                {this.renderTabView('我的', 'Mine', '我的模块', false, 3)}
            </TabNavigator>
        );
    }

    /**
     * 创建子视图
     * @param tag
     */
    createChildView(tag) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text>{tag}</Text></View>
        );
    }

    render() {
        var tabBarView = this.tabBarView();
        return (
          <View style={styles.container}>
              {tabBarView}
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },

    tab: {
        height: 52,
        alignItems: 'center',
        backgroundColor: '#f4f5f6',
    },

    tabIcon: {
        width: 25,
        height:25,
    },

    badgeView: {
        width: 22,
        height: 14,
        backgroundColor: '#f85959',
        borderWidth: 1,
        marginLeft: 10,
        marginTop: 3,
        borderColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },

    badgeText: {
        color: '#fff',
        fontSize: 8,
    },

    titleText: {
        color: 'black',
        fontSize: 18.0,
    }
});