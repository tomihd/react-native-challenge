import React, { Component } from 'react';
import {
  Keyboard,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  TextInput,
  Text,
  View
} from 'react-native';

import styles from './Stylesheet';

export default class HomeScreen extends Component {

  constructor() {
    super();
  }

  render() {
    return (
        <View style={styles.principal}> 
            <View style={styles.centerLogo}>
            	<Image 
              	source={require('./../assets/img/logoapp.png')} 
              	style={ styles.logo}/>
 	        </View>

            <View style={styles.centerView}>
                <TextInput 
                placeholder = "Username"
                style={styles.inputText}
                placeholderTextColor = '#1A5DAD'
                underlineColorAndroid= '#EE293D'
                returnKeyType="next"
                maxLength = {20}            
                />
                
                <TextInput 
                placeholder="Password"
                style={styles.inputText}
                underlineColorAndroid= '#EE293D'
                placeholderTextColor = '#1A5DAD'
                secureTextEntry
                returnKeyType="done"
                maxLength = {20}
                />

                <TouchableWithoutFeedback
                    onPress = {() => {Keyboard.dismiss();}}>
                    <View style={[styles.button, styles.centerText]}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
  }

} 
