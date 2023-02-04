import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Config from 'react-native-config';
import {} from './socketServices/socket';
import RootNavigation from './navigation/RootNavigation';
import AllChatList from './components/chatlist';
import Login from './screens/LoginScreen';
import IndividualChat from './components/individualchat';

const App = () => {
  // console.log(Config);
  // ws.onopen();
  return (
    // <NavigationContainer>
    //   <RootNavigation />
    // </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
          //options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="AllChatList"
          component={AllChatList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="IndividualChat"
          component={IndividualChat}
          initialParams={{
            createdAt: 1674129458,
            username: 'username 1',
            avatar: 'avatar 1',
            message: 'message 1',
            unreadcount: 25,
            id: '1',
          }}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const Stack = createNativeStackNavigator();
// const HomeScreen = ({navigation}) => {
//   return (
//     <Button
//       title="Go to Jane's profile"
//       onPress={() => {
//         console.log(navigation);
//         navigation.navigate('Profile', {name: 'Jane'});
//       }}
//     />
//   );
// };
