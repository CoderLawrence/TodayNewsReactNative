/**
 * Created by lawrence on 2017/1/19.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TabBarIOS,
    NavigatorIOS,
} from 'react-native';

import Constants from '../common/Constants';
import Home from '../component/home/Home';
import Video from '../component/video/Video';
import Care from '../component/care/Care';
import Personal from '../component/personal/Personal';
import Music from '../component/music/Music';

const Tab_Normal_Home = require('../../img/tabBar/home_tabbar_32x32_@2x.png');
const Tab_Normal_Video = require('../../img/tabBar/video_tabbar_32x32_@2x.png');
const Tab_Normal_Care = require('../../img/tabBar/newcare_tabbar_32x32_@2x.png');
const Tab_Normal_Mine = require('../../img/tabBar/mine_tabbar_32x32_@2x.png');

const Tab_Pre_Home = require('../../img/tabBar/home_tabbar_press_32x32_@2x.png');
const Tab_Pre_Video = require('../../img/tabBar/video_tabbar_press_32x32_@2x.png');
const Tab_Pre_Care = require('../../img/tabBar/newcare_tabbar_press_32x32_@2x.png');
const Tab_Pre_Mine = require('../../img/tabBar/mine_tabbar_press_32x32_@2x.png');

const tabBarItems = [
    {title: '首页', icon: Tab_Normal_Home, selIcon: Tab_Pre_Home, component: Home},
    {title: '视频', icon: Tab_Normal_Video, selIcon: Tab_Pre_Video, component: Video},
    {title: '音乐', icon: Tab_Normal_Video, selIcon: Tab_Pre_Video, component: Music},
    {title: '关注', icon: Tab_Normal_Care, selIcon: Tab_Pre_Care, component: Care},
    {title: '我的', icon: Tab_Normal_Mine, selIcon: Tab_Pre_Mine, component: Personal}
]

export default class TabBarView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab:tabBarItems[0].title,
        };
    }

    render() {
        return (
            <TabBarIOS
                tintColor={Constants.colors.themeColor}
                barTintColor={'white'}
            >
                {
                    tabBarItems.map((controller, i) => {
                        let Component = controller.component;

                        return (
                            <TabBarIOS.Item
                                key = {i}
                                title = {controller.title}
                                icon = {controller.icon}
                                selected = {this.state.selectedTab === controller.title}
                                selectedIcon = {controller.selIcon}
                                onPress = {() => {
                                    this.setState({
                                        selectedTab: controller.title
                                    })
                                }}
                            >
                                <Component navigator = {this.props.navigator} {...this.props}/>
                            </TabBarIOS.Item>
                        )
                    })
                }
            </TabBarIOS>
        )
    }
}