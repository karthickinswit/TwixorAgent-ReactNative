/* eslint-disable prettier/prettier */
import React, {useState,useEffect} from 'react';
import {StyleSheet, ScrollView, View, Image,TouchableOpacity} from 'react-native';
import { Divider,Text} from 'react-native-paper';
import {Tab, TabView, Badge} from '@rneui/themed';
import webSocket from '../socketServices/webSocket';
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
 } from 'react-native-popup-menu';


export default class ChatListScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = 0;
    this.setIndex = 0;
    // console.log(props);
    // js=props;
    email: '';
    password: '';
  }

 
  render() {
   
    // const [index, setIndex] = useState(0);

  return (

      <MenuProvider>
      <View style={styles.navBar}>
          <View style={styles.leftSection}>
              <Image
                  source={require('../assets/twixor_hd_icon.png')}
                  style={styles.icon} /><Text style={styles.label}> Chats </Text><Image
                  source={require('../assets/online_26.png')}
                  style={styles.icon1} /><Text style={styles.label1}>Online</Text>
          </View>
          <View style={styles.rightIcons}>
              <Image
                  source={require('../assets/search_64.png')}
                  style={styles.icon} />
              <Badge
                  value="9"
                  status="error"
                  containerStyle={{
                      position: 'absolute',
                      top: 10,
                      right: 40,
                      zIndex: 1,
                  }}
                  textStyle={{ color: 'white' }}
                  badgeStyle={{ backgroundColor: 'red' }}>
                  <Image source={require('../assets/search_64.png')} />
              </Badge>
              <Image
                  source={require('../assets/notification_64.png')}
                  style={styles.icon} />
              <Menu>
      <MenuTrigger  >
      <Image source={require('../assets/menu_64.png')} style={styles.icon}/>
      </MenuTrigger>
      <MenuOptions>
        <MenuOption onSelect={() => alert('Save')} text="Save" />
        <MenuOption onSelect={() => alert('Delete')} >
          <Text style={{color: 'red'}}>Delete</Text>
        </MenuOption>
        <MenuOption onSelect={() => alert('Not called')} disabled={true} text="Disabled" />
      </MenuOptions>
    </Menu>


          </View>
      </View>
      <Tab
          value={this.index}
          onChange={e =>this.setIndex(e)}
          style={{ marginTop: -7 }}
          indicatorStyle={{
              backgroundColor: '#2f81ad',
              height: 3,
              marginLeft: 'auto',
              marginRight: 'auto',
          }}
          variant="transparent">
              <Tab.Item
                  title="Active Chats"
                  titleStyle={{ fontSize: 16, color: '#2f81ad' }} />
              <Tab.Item
                  title="Closed Chats"
                  titleStyle={{ fontSize: 16, color: 'gray' }} />
          </Tab>
          <TabView value={this.index} onChange={this.setIndex} animationType="spring">
              <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
                {/* <UsersView /> */}
                {/*
                ///////////////////////////////////////////////////////// */}
                <ScrollView>
<TouchableOpacity onPress={()=>{
  // console.log(this.props);
   this.props.navigation.navigate('IndividualChat', {"chat":{
    'createdAt': 1674129458,
    'username': 'username 1',
    'avatar': 'avatar 1',
    'message': 'message 1',
    'unreadcount': 25,
    'id': '1',
   }
} );
  // IndividualChat({});
  }}

  // navigate('ChatMessageScreen', { name: 'ChatMessageScreen' })}}
  >
        <View style={styles.container}>
<View style={styles.left}>
<Image
source={require('../assets/boy_dummy.png')}
style={styles.avatar}
/>
<View style={styles.info}>
<Text style={styles.name}>Test User</Text>
<Text style={styles.lastMessage}>
Testing for Active Chats
</Text>
</View>
</View>
<View style={styles.right}>
{/* {1 > 0 && ( */}
<View style={styles.unread}>
<Text style={styles.unreadText}>5</Text>
</View>
{/* )} */}
<View
style={{
flexDirection: 'row',
marginTop: 8,
marginLeft: -10,
}}>
<Text style={styles.timestamp}>
<Image
source={require('../assets/calendar_blue_64.png')}
style={styles.timestampicons}
/>
<View style={{paddingRight:5}} />
01.02.2023
</Text>
<View style={{paddingRight:10}} />

<Text style={styles.timestamp}>
<Image
source={require('../assets/timestamp_blue_24.png')}
style={styles.timestampicons}
/>
<View style={{paddingRight:5}} />

12:00
</Text>



</View>
</View>
</View></TouchableOpacity>

  </ScrollView>

                {/* ///////////////////////////////////////////////////////// */}

              </TabView.Item>
              <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
                  <ScrollView>
      <View style={styles.container}>
        <View style={styles.left}>
          <Image
            source={require('../assets/girl_dummy.png')}
            style={styles.avatar}
          />
          <View style={styles.info}>
            <Text style={styles.name}>Closed User</Text>
            <Text style={styles.lastMessage}>
              Testing for Closed Chats
            </Text>
          </View>
        </View>
        <View style={styles.right}>
          {1 > 0 && (
            <View style={styles.unread}>
              <Text style={styles.unreadText}>5</Text>
            </View>
          )}
          <View
            style={{
              flexDirection: 'row',
              marginTop: 8,
              marginLeft: -10,
            }}>
            <Text style={styles.timestamp}>
              <Image
                source={require('../assets/calendar_blue_64.png')}
                style={styles.timestampicons}
              />
              01.02.2023
            </Text>

            <Text style={styles.timestamp}>
              <Image
                source={require('../assets/timestamp_blue_24.png')}
                style={styles.timestampicons}
              />
              12:00
            </Text>
          </View>
        </View>
      </View>
      <Divider style={styles.dividers} />

    </ScrollView>
              </TabView.Item>
          </TabView>
          </MenuProvider>
  );

}
}



  // export function UsersView() {


  //     // const { navigate } = this.props.navigation;
  //     return (
  //      ;


  // }
  
  const SimpleMenu = () => {
    
    return (
      <MenuProvider style={styles1.container}>
        <Menu>
          <MenuTrigger
            text="Click for Option menu"
            customStyles={{
              triggerWrapper: {
                top: -20,
              },
            }}
          />
          <MenuOptions>
            <MenuOption onSelect={() => alert('Save')} text="Save" />
            <MenuOption onSelect={() => alert('Delete')} text="Delete" />
          </MenuOptions>
        </Menu>
      </MenuProvider>
    );
   };

     SimpleMenu;

   const styles1 = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 30,
      flexDirection: 'column',
    },
   });

const styles = StyleSheet.create({
  container: {
     flexDirection: 'row',
     alignItems: 'center',
    padding: 10,
    backgroundColor:'#fff',
  },
  timestampicons: {
    width: 13,
    height: 13,
    marginHorizontal: 4,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  label1: {
    fontSize: 10,
    marginTop: 6,
  },
  rightIcons: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 8,
  },
  icon1: {
    width: 10,
    height: 10,
    marginHorizontal: 4,
    marginTop: 6,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabs: {
    backgroundColor: 'white',
  },
  dividers: {
    width: '95%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  lastMessage: {
    color: '#555',
    fontSize: 14,
  },
  right: {
    alignItems: 'flex-end',
    marginLeft: 'auto',
  },
  timestamp: {
    color: '#087ffc',
    fontSize: 12,
    marginTop: 18,
  },
  unread: {
    backgroundColor: '#087ffc',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginLeft: 10,
  },
  unreadText: {
    color: '#fff',
    fontSize: 12,
  },
  baseText: {
    fontWeight: 'bold',
  },
  innerText: {
    color: 'red',
  },
  menuContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    flexDirection: 'column',
  },
});
