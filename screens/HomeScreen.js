/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Button} from 'react-native';


const HomeScreen = ({navigation}) => {
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Login')}
      />
    );
  };
  export default HomeScreen;
