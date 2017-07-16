import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import { styles } from './style';

export default class MyComponent extends Component {
    constructor(props, context) {
        super(props, context);
    }



    render() {
        return (
            <View style={styles.mainContainer}>
                <Text> MyComponent </Text>
            </View>
        )
    }

}
