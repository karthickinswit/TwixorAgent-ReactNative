/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Button, View, Text} from 'react-native';


const ProfileScreen =({route}) => { 
  return <Text>This is {route.params.name}'s profile</Text>;
};
export default ProfileScreen;