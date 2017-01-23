/**
 * Created by lawrence on 2017/1/23.
 */

'use strict';
import React, { Component, PropTypes } from 'react';
import {
    Image,
    Text,
    View,
    Platform,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

// 导航条和状态栏的高度
const STATUS_BAR_HEIGHT = 20
const NAV_BAR_HEIGHT = 44
const Nav_BAR_AND_STATUS_BAR_HEIGHT = 64

export default class BaseNavigationBar extends Component {
    /**
     * 默认属性
     * @type {{title: string, titleTextColor: string, titleViewFunc: (()), barBackgroundColor: string, barOpacity: number, barStyle: number, barBorderBottomColor: string, barBorderBottomWidth: number, statusBarShow: boolean, leftItemTitle: string, leftTextColor: string, leftItemFunc: (()), rightItemTitle: string, rightTextColor: string, rightItemFunc: (())}}
     */
    static defaultProps = {
        title: 'title',
        titleTextColor: '#383838',
        titleViewFunc() {},
        barBackgroundColor: '#f8f8f8',
        barOpacity: 1,
        barStyle: 0,
        barBorderBottomColor: '#D4D4D4',
        barBorderBottomWidth: 0.8,
        statusBarShow: true,
        leftItemTitle: '',
        leftTextColor: '#383838',
        leftItemFunc() {},
        rightItemTitle: '',
        rightTextColor: '#383838',
        rightItemFunc() {},

    };

    /**
     * 属性
     * @type {{title: (*), titleTextColor: (*), titleView: *, titleViewFunc, barBackgroundColor: (*), barOpacity: (*), barStyle: (*), barBorderBottomColor: (*), barBorderBottomWidth: (*), statusBarShow: *, leftItemTitle: (*), leftImageSource: *, leftTextColor: (*), leftItemFunc, rightItemTitle: (*), rightImageSource: *, rightTextColor: (*), rightItemFunc}}
     */
    static propTypes = {
        title: PropTypes.string,
        titleTextColor: PropTypes.string,
        titleView: PropTypes.node,
        titleViewFunc: PropTypes.func,
        barBackgroundColor: PropTypes.string,
        barOpacity: PropTypes.number,
        barStyle: PropTypes.number,
        barBorderBottomColor: PropTypes.string,
        barBorderBottomWidth: PropTypes.number,
        statusBarShow: PropTypes.bool,
        leftItemTitle: PropTypes.string,
        leftImageSource: PropTypes.node,
        leftTextColor: PropTypes.string,
        leftItemFunc: PropTypes.func,
        rightItemTitle: PropTypes.string,
        rightImageSource: PropTypes.node,
        rightTextColor: PropTypes.string,
        rightItemFunc: PropTypes.func,
    };

    render() {
        // 判断左Item的类型
        var onlyLeftIcon = false; //是否只有图片
        if (this.props.leftItemTitle && this.props.leftImageSource) {
            onlyLeftIcon = true;
        } else if (this.props.leftImageSource) {
            onlyLeftIcon = true;
        }

        //左侧图片title都没有的情况下
        var noneLeft = false;
        if (!(this.props.leftItemTitle.length > 0) && !(this.props.leftImageSource)) {
            noneLeft = true;
        }

        //判断是否自定义titleView
        var hasTitleView = false;
        if (this.props.title && this.props.titleView) {
            hasTitleView = true;
        } else if (this.props.titleView) {
            hasTitleView = true;
        }

        //判断右Item 的类型
        var onlyRightIcon = false; //是否只是图片
        if (this.props.rightItemTitle && this.props.rightImageSource) {
            onlyLeftIcon = true;
        } else if (this.props.rightImageSource) {
            onlyLeftIcon = true;
        }

        //右侧图片title都没有的情况下
        var noneRight = false;
        if (!(this.props.rightItemTitle.length > 0) && !(this.props.rightImageSource)) {
            noneRight = true;
        }

        //判断是否显示状态栏
        let showStatusBar = this.props.statusBarShow;
        if (Platform.OS === 'android') {
            //Android 不显示状态栏
            showStatusBar = false;
        }

        return (
            <View style={[styles.navBarView, {height: showStatusBar ? Nav_BAR_AND_STATUS_BAR_HEIGHT : NAV_BAR_HEIGHT}]}>
                <View style={[styles.navBar,
                {backgroundColor: this.props.barBackgroundColor,
                 height: showStatusBar ? Nav_BAR_AND_STATUS_BAR_HEIGHT : NAV_BAR_HEIGHT,
                 opacity: this.props.barOpacity,
                 },
                 showStatusBar ? {paddingTop: STATUS_BAR_HEIGHT} : {}, this.props.barStyle
                 ]}>
                    <View style={styles.navItemView}>
                        { //左侧Item
                            (()=> {
                                if (!noneLeft) {
                                    return <TouchableOpacity style = {styles.navLeftItem} onPress = {this.props.leftItemFunc}>
                                        {
                                            (()=> {
                                                if (onlyLeftIcon) {
                                                    <Image style={styles.navLeftImage} source={this.props.leftImageSource}/>
                                                } else {
                                                    <Text style={[styles.navLeftTitle, {color: this.props.leftTextColor}]}>{this.props.leftItemTitle}</Text>
                                                }
                                            })()
                                        }
                                    </TouchableOpacity>
                                } else {
                                    return null
                                }
                            })()
                        }
                    </View>
                    { //titleView
                        (()=> {
                            if (hasTitleView) {
                                return <TouchableOpacity style = {styles.navTitleView} onPress = {this.props.titleViewFunc}>
                                    {this.props.titleView}
                                </TouchableOpacity>
                            } else {
                                return <View style={styles.navTitleView}>
                                    <Text style={[styles.navTitle, {color: this.props.titleTextColor}]}>{this.props.title}</Text>
                                </View>
                            }
                        })()
                    }
                    <View style={styles.navItemView}>
                        {
                            (()=> {
                                if (!noneRight) {
                                    return <TouchableOpacity style = {styles.navRightItem} onPress = {this.props.rightItemFunc}>
                                        {
                                            (()=> {
                                                if (onlyRightIcon) {
                                                    return <Image style={styles.navRightImage} source={this.props.rightImageSource}/>
                                                } else {
                                                    return <Text style={[styles.navRightTitle, {color: this.props.rightTextColor}]}>{this.props.rightItemTitle}</Text>
                                                }
                                            })()
                                        }
                                    </TouchableOpacity>
                                } else {
                                    return null
                                }
                            })()
                        }
                    </View>
                </View>
                <View style={{height: this.props.barBorderBottomWidth, backgroundColor: this.props.barBorderBottomColor}}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navBarView: {
        justifyContent: 'center',
    },

    navBar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    navTitle: {
        fontSize: 17,
    },

    navTitleView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    navItemView: {
        width: 80,
        justifyContent: 'center',
    },

    navLeftItem: {
        flex: 1,
        marginLeft: 8,
        justifyContent: 'center',
        alignSelf: 'flex-start',
    },

    navLeftTitle: {
        fontSize: 14,
        marginLeft: 5,
        marginRight: 4,
    },

    navLeftImage: {
        margin: 10,
        resizeMode: 'contain',
    },

    navRightItem: {
        flex: 1,
        marginRight: 8,
        justifyContent: 'center',
        alignSelf: 'flex-end',
    },

    navRightTitle: {
        marginRight: 5,
        marginLeft: 5,
        fontSize: 14,
    },

    navRightImage: {
        margin: 10,
        resizeMode: 'contain',
    }
});