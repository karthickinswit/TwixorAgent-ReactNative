/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';


// const navigator = useNavigation();
// const useCustomNav = () => {
//   const navigation = useNavigation();

//   const goTo = to => navigation.navigate('ChatListScreen');

//   return {goTo};
// };

 class Login extends React.Component  {
  constructor(props) {
    super(props);

    email: '';
    password: '';
  }

  onClickListener = viewId => {
    // const navigator = useNavigation();
    Alert.alert('Alert', 'Button pressed ' + viewId);
    console.log(this.props);
    
    this.props.navigation.navigate('AllChatList');

  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logoContainer}
          source={require('../assets/logo.png')}
        />
        <View style={styles.inputContainer1} />
        {/* <Text style={styles.loginMain}>Login</Text> */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="USER ID"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({email})}
          />
          <Image
            style={styles.inputIcon}
            source={require('../assets/user_64.png')}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({password})}
          />
          <Image
            style={styles.inputIcon}
            source={require('../assets/password_64.png')}
          />
        </View>

        {/* <TouchableOpacity
          style={styles.btnForgotPassword}
          onPress={() => this.onClickListener('restore_password')}>
          <Text style={styles.btnText}>Forgot your password?</Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.onClickListener('register')}>
          <Text style={styles.btnText}>Forgot Password ?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logoContainer: {
    width: 170,
    height: 170,
    margin: 'auto',
    alignItems: 'center',
    marginTop: '20%',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 'auto',
    borderTop: 'none',

    // shadowColor: '#808080',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
  },

  inputContainer1: {
    paddingBottom: 30,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: 'center',
    color: '#c0c0c0',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: 'transparent',
    color: '#c0c0c0',
  },
  btnForgotPassword: {
    height: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 10,
    width: 300,
    color: 'black',
  },
  loginButton: {
    backgroundColor: '#00b5ec',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: 'white',
  },
  bgImage: {
    flex: 1,
    resizeMode,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  btnText: {
    color: '#c0c0c0',
 },
 loginMain: {
   left: '16%',
   color: 'black',
   fontWeight: 'bold',
   position: 'relative',
   // fontSize: '20px',
    marginBottom: '10%',
 },
});
export default (Login);

