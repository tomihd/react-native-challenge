import React, { Component } from 'react';
import {
    View
} from 'react-native';
import styles from './Stylesheet';
import HomeScreen from './HomeScreen';

export default class Home extends Component {

    constructor() {
        super();
        this.state = {    
            showUserError : false,
            showPasswordError : false,
            showSpinner: false,
            showButton: true
        };
    }

    render() {
        return( 
            <View style={styles.principal}>
                <HomeScreen
                    onPress ={(user,password) => { this._onLoginPress(user, password)}}
                    showUserError = {this.state.showUserError}
                    showPasswordError = {this.state.showPasswordError}
                    showButton = {this.state.showButton}
                    showSpinner = {this.state.showSpinner}
                /> 
            </View>    
        );
    }

    showUserError(state){
        this.setState({
          showUserError : state
        });
    }
    
    showPasswordError(state){
        this.setState({
          showPasswordError : state
        });
    }

    showSpinner (state){
        if (state) {
          this.setState({
            showButton: false
          })
        }
        else {
          this.setState({
            showButton: true
          })
        };
        this.setState({
            showSpinner: state
        })
      }

    _onLoginPress(user, password){
        this.showUserError(false);
        this.showPasswordError(false);

        if(user == '' & password == ''){
            this.showUserError(true);
            this.showPasswordError(true); 
        }
        else{
            if(user == ''){
                this.showUserError(true);    
            }else{
                if(password == ''){
                    this.showPasswordError(true);    
                }
                else{
                        this.showSpinner(true);
                        setTimeout(()=>{this.showSpinner(false)}, 2000);
                    }
                }
            }
        }
}