/* eslint-disable prettier/prettier */

import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const LoginPage = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [emailerror, setemailerror] = useState('');
  // const [passowrderror, setpassworderror] = useState('');
  let username = "";
  let password = "";
  let emailerror = "";
  let passowrderror = "";
  const validateEmail = username => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(username.toLowerCase());
  };

  // const navigation = useNavigation();

  const handleLogin = () => {
    // if ((!validateEmail(username) && password.length < 8) || username == '') {
    //   setemailerror('Please Provide a Valid Email Address');
    //   setpassworderror('Password Should not be Empty');
    // } else if (password.length < 8) {
    //   setpassworderror('Password Should not be Empty');
    // } else {
    //   console.log([username, password]);
    //   navigation.navigate('AllChatList');
    // }
  };

  const handleForgotPassword = () => {
    // forgot password function here
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="User Id"
        // onChangeText={}
        // value={}
      />
      {emailerror && <p>{emailerror}</p>}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        // onChangeText={setPassword}
        // value={password}
      />
      {passowrderror && <p>{passowrderror}</p>}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.forgotPassword}
        onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 100,
  },
  input: {
    width: '75%',
    height: 60,
    padding: 10,
    marginBottom: 30,
    borderColor: '#ccc',
    borderRadius: 0,
    borderBottomWidth: '2px',
    borderBottomColor: 'gray',
    fontSize: 22,
  },
  button: {
    width: '75%',
    height: 60,
    backgroundColor: '#217eac',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
  },
  forgotPassword: {
    marginTop: 10,
    marginBottom: '20%',
  },
  forgotPasswordText: {
    color: '#00bcd4',
    textDecorationLine: 'underline',
    fontSize: 18,
  },
});

export default LoginPage;
