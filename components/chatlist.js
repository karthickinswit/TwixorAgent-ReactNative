/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Divider} from 'react-native-paper';
import {Tab, TabView, Badge} from '@rneui/themed';
import webSocket from '../socketServices/webSocket';
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
 } from 'react-native-popup-menu';

const ChatContext = React.createContext();

const AllChatList = () => {
  const [chatList, setChatList] = useState([]);
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();
  const [chatmessages, setchatmessages] = useState([]);

  const handleBack = () => {
    navigation.navigate('IndividualChat');
  };
  useEffect(()=>{
    console.log('Socket Connect Call');
    webSocket.connect();
    webSocket.waitForSocketConnection(()=>{
        // console.log(webSocket);


    });
  },[]);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append(
      'authentication-token',
      '0mWeYtGs9FZIG1aWK7/oU2E6ixO57tB40fldoHyu41YfXZJCEMLuKFgxM9RtZPcl',
    );

    async function fetchChatData1() {
      const allchats = await fetch(
        'https://aim.twixor.com/e/enterprise/chat/summary',
        {crossDomain: true, headers: myHeaders},
      );
      const allchatsdata = await allchats.json();
      setchatmessages(allchatsdata.response.chats);
    }

    fetchChatData1();
  }, []);

  const Header = () => (
    
    <MenuProvider customStyles={{menuProviderWrapper:{flexDirection: 'column'},backdrop: {
      backgroundColor: '#217eac',
      opacity: 0.5,
    }}}>
     
    <View style={styles.navBar}>
    <View style={styles.leftSection}>
      <Image
        source={require("../assets/twixor_hd_icon.png")}
        style={styles.icon}
      />
      <Text style={styles.label}>Chats</Text>
      <Image
        source={require("../assets/online_26.png")}
        style={styles.icon1}
      />
      <Text style={styles.label1}>Online</Text>
    </View>
    <View style={styles.rightIcons}>
      <TouchableOpacity>
        <Badge
          value="9"
          status="error"
          containerStyle={{
            position: "absolute",
            top: 10,
            right: 1,
            zIndex: 1,
          }}
          textStyle={{ color: "white" }}
          badgeStyle={{ backgroundColor: "red" }}
        >
          <Image source={require("../assets/search_64.png")} />
        </Badge>
        <Image
          source={require("../assets/notification_64.png")}
          style={styles.icon}
        />
        </TouchableOpacity>
        
        
      
             <View style={{marginLeft:180}}>
             
           
     <Menu style={{position:'absolute',top:0,right:0}}>
     <MenuTrigger  >
           <Image
             source={require('../assets/ellipsis-vertical-solid.png')}
             style={{ height: 30, width:8 }}

           />
           </MenuTrigger>
     <MenuOptions optionsContainerStyle=
   {{paddingLeft:8,height:96,width:100}}>

       <MenuOption onSelect={() => alert('No New chats')} text="New Chats" /><MenuOption onSelect={() => alert('No Transferred Chats')} disabled={true}>
       <Text style={{ color: 'red' }}>Transferred Chat</Text>
     </MenuOption>
     <MenuOption onSelect={() => alert('Invited Chat')} disabled={true} text="Invited Chat" />
     </MenuOptions>
     </Menu>
     

          </View>
          
    </View>
  </View>
  
  </MenuProvider>
  

    //<View style={styles.navBar}>
    //   <View style={styles.leftSection}>
    //     <Image
    //       source={require('../assets/twixor_hd_icon.png')}
    //       style={styles.icon}
    //     />
    //     <Text style={styles.label}> Chats </Text>
    //     <Image
    //       source={require('../assets/online_26.png')}
    //       style={styles.icon1}
    //     />
    //     <Text style={styles.label1}> Online </Text>
    //   </View>
    //   <View style={{marginRight:10}}>
    //     <TouchableOpacity style={styles.rightIcons}>
    //       <Badge
    //         value="9"
    //         status="error"
    //         containerStyle={{
    //           position: 'absolute',
    //           top: 10,
    //           right: 1,
    //           zIndex: 1,
    //         }}
    //         textStyle={{color: 'white'}}
    //         badgeStyle={{backgroundColor: 'red'}}>
    //         <Image source={require('../assets/search_64.png')} />
    //       </Badge>

    //       <Image
    //         source={require('../assets/notification_64.png')}
    //         style={styles.icon}
    //       />
    //       </TouchableOpacity>
    //       </View>
    //      {/* <Menus /> */}
    //      <TouchableOpacity >

    //       <View style={styles.rightIcons} >
    //       <MenuProvider >
    // <Menu>
    // <MenuTrigger style={{flex:1}} >
    //       <Image
    //         source={require('../assets/ellipsis-vertical-solid.png')}
    //         style={{ height: 10, width:10,flex:0 }}

    //       />
    //       </MenuTrigger>
    // <MenuOptions optionsContainerStyle={{width:140,height:160}}>

    //   <MenuOption customStyles={{width:100,height:100}} onSelect={() => alert('No New chats')} text="New Chats" /><MenuOption onSelect={() => alert('No Transferred Chats')} disabled={true}>
    //   <Text style={{ color: 'red' }}>Transferred Chat</Text>
    // </MenuOption><MenuOption onSelect={() => alert('Invited Chat')} disabled={true} text="Invited Chat" />
    // </MenuOptions>

    // </Menu>

    //       </MenuProvider></View>



    // </TouchableOpacity>
    // </View>

  );



  const Tabs = () => (
    <Tab
      value={index}
      onChange={e => setIndex(e)}
      style={{marginTop: -7}}
      indicatorStyle={{
        backgroundColor: '#217eac',
        height: 3,
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      variant="transparent">
      <Tab.Item
        title="Active Chats"
        titleStyle={{fontSize: 19, color: '#2f81ad'}}
      />
      <Tab.Item
        title="Closed Chats"
        titleStyle={{fontSize: 19, color: 'gray'}}
      />
    </Tab>
  );

  const ShowChatList = () => (
    <TabView value={index} onChange={setIndex} animationType="spring">
      <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
        <ChatContext.Provider value={{chatmessages, setchatmessages}}>
          <ScrollView>
            {chatmessages.map((chat, index) => (
              <>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('IndividualChat', {chat});
                  }}>
                  <View style={styles.container} key={index}>
                    <View style={styles.left}>
                      <Image
                        source={{
                          uri: 'https://randomuser.me/api/portraits/men/1.jpg',
                        }}
                        style={styles.avatar}
                      />

                      <View style={styles.info}>
                        <Text style={styles.name}>{chat.customerName}</Text>
                        <Text style={styles.lastMessage}>
                          {chat.lastMessage.length > 5
                            ? chat.lastMessage.slice(0, 12) + '...'
                            : chat.lastMessage}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.right}>
                      {chat.messages.map(res => res.message) > 0 ? (
                        <View style={styles.unread}>
                          <Text style={styles.unreadText}>
                            {chat.unreadcount}
                          </Text>
                        </View>
                      ) : (
                        ''
                      )}
                      <View
                        style={{
                          flexDirection: 'row',
                          marginTop: 8,
                          marginLeft: -10,
                        }}>
                        {/* <Text style={styles.timestamp}>
                      <Image
                        source={require("../assets/calendar_blue_64.png")}
                        style={styles.timestampicons}
                      />
                      01.02.2023
                    </Text>
                    &nbsp; */}
                        <Text style={styles.timestamp}>
                          <Image
                            source={require('../assets/timestamp_blue_24.png')}
                            style={styles.timestampicons}
                          />
                          {chat.createdAt}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <Divider style={styles.dividers} />
                </TouchableOpacity>
              </>
            ))}
          </ScrollView>
        </ChatContext.Provider>
      </TabView.Item>
      <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
        <ScrollView>
          {chatList.map((chat, index) => (
            <>
            {/* {console.log(chat)} */}
              <TouchableOpacity onPress={handleBack}>
                <View style={styles.container} key={index}>
                  <View style={styles.left}>
                    <Image
                      source={require('../assets/girl_dummy.png')}
                      style={styles.avatar}
                    />

                    <View style={styles.info}>
                      <Text style={styles.name}>{chat.username}</Text>
                      <Text style={styles.lastMessage}>
                        {chat.message.length > 10
                          ? chat.message.slice(0, 17) + '...........'
                          : chat.message}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.right}>
                    {chat.unreadcount > 0 ? (
                      <View style={styles.unread}>
                        <Text style={styles.unreadText}>
                          {chat.unreadcount}
                        </Text>
                      </View>
                    ) : undefined}
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 8,
                        marginLeft: -10,
                      }}>
                      {/* <Text style={styles.timestamp}>
                      <Image
                        source={require("../assets/calendar_blue_64.png")}
                        style={styles.timestampicons}
                      />
                      01.02.2023
                    </Text>
                    &nbsp; */}
                      <Text style={styles.timestamp}>
                        <Image
                          source={require('../assets/timestamp_blue_24.png')}
                          style={styles.timestampicons}
                        />
                        {chat.createdAt}
                      </Text>
                    </View>
                  </View>
                </View>
                <Divider style={styles.dividers} />
              </TouchableOpacity>
            </>
          ))}
        </ScrollView>
      </TabView.Item>
    </TabView>
  );

  return (
    <>
      <Header />
      <Tabs />
      <ShowChatList />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
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
    fontSize: 22,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 27,
    fontWeight: 'bold',
  },
  label1: {
    fontSize: 10,
    marginTop: 8,
  },
  rightIcons: {
    flexDirection: 'row',
    marginRight: '3%',
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
    marginTop: 8,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabs: {
    backgroundColor: 'white',
  },
  dividers: {
    width: '5%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 24,
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  lastMessage: {
    color: '#555',
    fontSize: 18,
  },
  right: {
    alignItems: 'flex-end',
    marginLeft: 'auto',
  },
  timestamp: {
    color: '#087ffc',
    fontSize: 12,
    marginTop: 5,
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
  optionsstyle:{
    marginTop:  10,
    marginLeft: 10,
    backgroundColor: '#fafafa',
    width:40,
    height:60,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default AllChatList;
