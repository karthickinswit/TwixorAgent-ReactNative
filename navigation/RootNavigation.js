import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllChatList from '../components/chatlist';
import LoginPage from '../components/login';
import IndividualChat from '../components/individualchat';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="AllChatList" component={AllChatList} />
      <Stack.Screen name="IndividualChat" component={IndividualChat} />
    </Stack.Navigator>
  );
}

export default RootNavigation;
