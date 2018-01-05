import React, { Component } from 'react';
import {
  ActivityIndicator,
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
    this.state = {
        user: '',
        password: ''
      };
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
                onChangeText = {(text) => this.setState({user: text})}            
                />
                {this.props.showUserError && <Text style = {styles.errorRequiredField}>Required field.</Text> }
                
                <TextInput 
                placeholder="Password"
                style={styles.inputText}
                underlineColorAndroid= '#EE293D'
                placeholderTextColor = '#1A5DAD'
                secureTextEntry
                returnKeyType="done"
                maxLength = {20}
                onChangeText = {(text) => this.setState({password: text})}
                />
                {this.props.showPasswordError && <Text style = {styles.errorRequiredField}>Required field.</Text> }

                {
                  this.props.showButton &&                  
                  <TouchableWithoutFeedback
                    onPress = {() => {this.props.onPress(this.state.user,this.state.password); Keyboard.dismiss();}}>
                    <View style={[styles.button, styles.centerText]}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                    </View>
                  </TouchableWithoutFeedback>
                }
                
                <ActivityIndicator animating={this.props.showSpinner} color="#EE293D" size="large" style={styles.spinner}/>
            </View>
        </View>
    );
  }
  

} 
