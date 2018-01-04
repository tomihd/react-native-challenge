import React, { Component } from 'react';
import {
    View
} from 'react-native';
import styles from './Stylesheet';
import HomeScreen from './HomeScreen';

export default class Home extends Component {

    constructor() {
        super();
    }

    render() {
        return( 
            <View style={styles.principal}>
                <HomeScreen/> 
            </View>    
        );
    }
}