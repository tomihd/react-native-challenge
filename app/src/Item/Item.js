import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

export default class Item extends Component {

    constructor() {
        super();
    }

    render() {
        return( 
            <View>
                <Text>Item</Text>
            </View>    
        );
    }
}