/* eslint-disable prettier/prettier */
import AgentApp from "./agentApp";



const App = () => {
  // console.log(Config);
  // ws.onopen();
  // useContextHelper();
  return (
    <AgentApp />
    // <NavigationContainer>
    //   <RootNavigation />
    // </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Login"
    //       component={Login}
    //       options={{headerShown: false}}
    //       //options={{title: 'Welcome'}}
    //     />
    //     <Stack.Screen
    //       name="AllChatList"
    //       component={AllChatList}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="IndividualChat"
    //       component={IndividualChat}
    //       initialParams={{
    //         createdAt: 1674129458,
    //         username: 'username 1',
    //         avatar: 'avatar 1',
    //         message: 'message 1',
    //         unreadcount: 25,
    //         id: '1',
    //       }}
    //       options={{headerShown: false}}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;


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
