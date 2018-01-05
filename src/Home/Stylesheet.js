import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  principal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'white'
  },

  centerView: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginTop: 15
  },

  centerLogo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60
  },

  logo:{
    flex: 1,
    resizeMode: 'center'
  },

  inputText: {
    marginHorizontal: 50,
    color: 'black'
  },

  button: {
    marginTop: 25,
    marginHorizontal: 50,
    height: 45,
    borderRadius: 4, 
    borderWidth: 0.5, 
    borderColor: '#1A5DAD', 
    backgroundColor: '#1A5DAD' 
  },

  centerText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },

  spinner: {
    marginTop: 20
  },

  errorRequiredField: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#e21d1d',
    marginHorizontal: 50,
    fontSize: 14
  }

});

export default styles;
