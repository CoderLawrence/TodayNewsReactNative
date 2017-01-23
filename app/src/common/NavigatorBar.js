/**
 * Created by lawrence on 2017/1/23.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Platform,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default class NavigatorBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {title, leftTitle, leftImage, leftAction, rightTitle, rightImage, rightAction} = this.props;
        return (
            <View style={[styles.barView, this.props.style]}>
                <View style={styles.showView}>
                    {
                        (()=> {
                            if (leftTitle) {
                                return <TouchableOpacity style = {styles.leftNav} onPress = {()=> {leftAction()}}>
                                    <View style={{alignItems: 'center'}}>
                                        <Text style={styles.barButton}>{leftTitle}</Text>
                                    </View>
                                </TouchableOpacity>
                            } else if (leftImage) {
                                return <TouchableOpacity style = {styles.leftNav} onPress = {()=> {leftAction}}>
                                    <View style={{alignItems: 'center'}}>
                                        <Image source={leftImage}/>
                                    </View>
                                </TouchableOpacity>
                            }
                        })()
                    }
                    {
                        (()=> {
                            if (title) {
                                return <Text style={styles.title}>{title || ''}</Text>
                            }
                        })()
                    }
                    {
                        (()=>{
                            if (rightTitle) {
                                return <TouchableOpacity style = {styles.rightNav} onPress = {()=> {rightAction()}}>
                                    <View style={{alignItems:'center'}}>
                                        <Text style={styles.barButton}>{rightTitle}</Text>
                                    </View>
                                </TouchableOpacity>
                            } else if (rightImage) {
                                return <TouchableOpacity style = {styles.rightNav} onPress = {()=> {rightAction()}}>
                                    <View style={{alignItems:'center'}}>
                                        <Image source={rightImage}/>
                                    </View>
                                </TouchableOpacity>
                            }
                        })()
                    }
                </View>
                <View style={{height: 0.8, backgroundColor: '#D4D4D4'}}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    barView: {
        height: Platform.OS === 'android' ? 44 : 64,
        backgroundColor: 'white',
    },

    showView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: Platform.OS === 'android' ? 0 : 20,
        height: 44,
    },

    title: {
        color: 'black',
        fontSize: 18.0,
    },

    leftNav: {
        position: 'absolute',
        top: 8,
        bottom: 8,
        left: 8,
        justifyContent: 'center',
    },

    rightNav: {
        position: 'absolute',
        right: 8,
        top: 8,
        bottom: 8,
        justifyContent: 'center',
    },

    barButton: {
        color: 'white',
    },
});