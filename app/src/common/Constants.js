/**
 * Created by lawrence on 2017/1/19.
 */

import React, { Component } from 'react';
import { Dimensions } from 'react-native';

var Constants = {
    window: {
        size: Dimensions.get('window').size,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

    screenWidth: Dimensions.get('window').width,

    colors: {
        themeColor: '#BB1919',
    },
};

module.exports = Constants;
