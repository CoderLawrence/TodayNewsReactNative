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
                renderIcon={() => <Image style={}/>}
            />
        )
    }
}