/**
 * Created by lawrence on 2017/2/13.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    ActivityIndicator,
} from 'react-native';

const LoadingView = ({isVisible}) => {
    const { activityIndicator } = styles;
    return (
        <ActivityIndicator
            animating={isVisible}
            style = {[activityIndicator, {height: 80}]}
            size={'large'}
        />
    );
};

const styles = StyleSheet.create({
    activityIndicator: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default  LoadingView;