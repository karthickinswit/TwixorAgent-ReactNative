/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState,useContext} from 'react';
import { ScrollView } from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  Button,
} from 'react-native';
// import {Avatar} from 'react-native-elements';
 import Icon from 'react-native-vector-icons/FontAwesome5';
// import {CloseOutlined} from '@ant-design/icons';
// import * as ImagePicker from 'expo-image-picker';
import webSocket, { messageService ,subUser} from '../socketServices/webSocket';
import { AppContext } from './context';

 

export const IndividualChat = ({route,props}) => {
  // const { users } = useContext(AppContext);
  let messageRef = useRef(null);
  let navigation = useNavigation();
  let textMessage = '';
  let individualdata = route.params;
  let agent = individualdata.chat.handlingAgent;
  let eId = individualdata.chat.eId;
  const messagesRoute = individualdata.chat.messages;
   
  let chatId = individualdata.chat.chatId;
  let formattedDate = new Date().toISOString();
  let milliseconds = new Date().getTime();
  let timestamp = new Date('2011-04-20T09:30:51.01');
  
  // messageService.getMessage().subscribe((data)=>{
  //   var obj = JSON.parse(data);
  //   console.log('individualdata',obj);
  //   if (obj.action == 'agentReplyChat'){
  //     console.log(obj.content[0].response.chat.messages[0]);
  //     var msg=obj.content[0].response.chat.messages[0];
      
  //     console.log("First",messages.length);
  //     const messages1=[...messages];
  //     messages1.push(msg);
  //     dispatchMessageEvent('ADD_MESSAGE', { message:msg });
  //     //  messages.push(msg);
  //     // setUpdateMessages(messages);
      
      
  //       // setUpdateMessages(messages1);
  //       console.log("Second",messages1.length);
      
  //     // clearInterval(toggle);
      
  //     //  updateMessages(messages);
  //     // useRef(messages);
  //   // console.log();
  //   // messages.push(data.content[0].response.chat.messages[0]);
  //   // console.log(messages);
  // }

  // });



  const [isVisible, setIsVisible] = useState(false);
  const [currentUser] = useState(agent);
  const [visible, setVisible] = useState(false);
  const [sendmessage, setsendmessage] = useState('');
   let [messages,setUpdateMessages] = useState( messagesRoute);
  const [image, sendimage] = useState('');
  const [count, setCount] = useState(0);
  // updateMessages(individualdata.chat.messages);
  // messages = individualdata.chat.messages;


  const dispatchMessageEvent = (actionType, payload) => {
		switch (actionType) {
			case 'ADD_MESSAGE':
        console.log("dispatched",payload.message)
				setUpdateMessages([ ...messages, payload.message ]);
				return;
			case 'REMOVE_USER':
				setUpdateMessages(messages.filter(message => message.id !== payload.userId));
				return;
			default:
				return;
		}
	};

  const selectImageFromFile = async () => {
    // try {
    //   const result = await ImagePicker.launchImageLibraryAsync({
    //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //     allowsEditing: true,
    //     aspect: [4, 3],
    //     quality: 1,
    //   });

    //   if (!result.cancelled) {
    //     sendimage(result.uri);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const goBack = () => {
    navigation.navigate('AllChatList');
  };


  const pushMessage = () => {
    console.log(textMessage);
    const message = textMessage;
    // setsendmessage(message);
    const sendObject = {'action':'agentReplyChat','eId':eId,'message':message,'contentType':'TEXT','chatId':chatId,'attachment':{},'pickup':false};
    console.log('send Object',sendObject);
    messageService.sendMessage(sendObject);
    messageRef.current.value = '';
    
  };

  const Popver = () => {
    return (
      <View style={styles.popoverContainer}>
        {isVisible && (
          <>
            <View style={styles.popoverContent}>
              <TouchableOpacity style={styles.buttonContainer1}>
                <Image
                  source={{uri: 'https://picsum.photos/id/237/200/300'}}
                  style={styles.icon1}
                />
                <Text style={styles.text1}>Customer Detail</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer1}>
                <Image
                  source={{uri: 'https://picsum.photos/id/237/200/300'}}
                  style={styles.icon1}
                />
                <Text style={styles.text1}>Invite Agent</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer1}>
                <Image
                  source={{uri: 'https://picsum.photos/id/237/200/300'}}
                  style={styles.icon1}
                />
                <Text style={styles.text1}>Transfer Chat</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer1}>
                <Image
                  source={{uri: 'https://picsum.photos/id/237/200/300'}}
                  style={styles.icon1}
                />
                <Text style={styles.text1}>Closed Chat</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer1}>
                <Image
                  source={{uri: 'https://picsum.photos/id/237/200/300'}}
                  style={styles.icon1}
                />
                <Text style={styles.text1}>Chat History</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    );
  };

  const BottomSheet = () => {
    return (
      <View style={styles.container}>
        <Modal
        transparent={true}
          visible={visible}
          onRequestClose={() => setVisible(false)}
          animationType="fade"
          // presentationStyle="fullScreen"

          >
          <View style={styles.bottomSheetContainer}>
            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={styles.closeIconContainer}>
              {/* <CloseOutlined style={styles.closeIcon} /> */}
            </TouchableOpacity>
            <br />
            <br />
            <TouchableOpacity>
              <Button
                title="Upload a Image"
                style={{
                  marginTop: '50px',
                  width: '75%',
                  height: 60,
                  borderRadius: 20,
                  marginBottom: 20,
                }}
                color="#217eac"
                // onPress={showImagePicker}
                onPress={selectImageFromFile}
              />
            </TouchableOpacity>
            <br />
          </View>
        </Modal>
      </View>
    );
  };

  const ChatHeader = () => (
    <>
      <View style={styles.head}>
        <View style={styles.left}>
          <TouchableOpacity onPress={goBack} style={styles.left}>
          <Image
        source={require('../assets/chevron-left-solid.png')}
        style={{   width: 30,
    height: 30,
    color: '#217eac',borderRadius:30}}
      />
            {/* <Icon size={24} color="red" name="movie" /> */}
            {/* <Icon name="rocket" size={30} color="#900" /> */}
            {/* <Icon name="md-arrow-round-back" size={16} color="#000" /> */}
        {/* <Text style={styles.label}> Chats </Text> */}
          </TouchableOpacity>
          {/* <Avatar
            rounded
            source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
            style={{width: 60, height: 60}}
          /> */}
          <View style={styles.headerContainer}>
          <Image
        source={require('../assets/boy_dummy.png')}
        style={{   width: 50,
    height: 50,
    color: '#217eac',borderRadius:30}}
      />
          <View style={styles.textContainer}>
            <View>
              <Text style={styles.title}>
                {individualdata.chat.customerName}
              </Text>
            </View>
            <View style={styles.subtitleContainer}>
              <Text style={styles.subtitle}>
                {individualdata.chat.customerNumber}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.right}>
          <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
            <Image
              source={require('../assets/inside_menu_64.png')}
              style={{width: 35, height: 35}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Popver />
      </View>
    </>
  );

  const ChatBody = () => (
    <><ScrollView>
      <View style={styles.bodyContainer}>
     {
      
      }
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.chatBubble,
              message.actionBy !== currentUser
                ? styles.chatBubbleright
                : styles.chatBubbleleft,
            ]}>
            <Text style={styles.chatText}>
              {message.message}
              {/* {image && (
                <Image
                  source={{ uri: image }}
                  style={{ width: 200, height: 200 }}
                />
              )} */}
            </Text>
            <Text style={{float: 'right'}}>
              {timestamp.getHours() + ':' + timestamp.getMinutes()}
            </Text>
          </View>
        ))}
      </View>
      </ScrollView>
    </>
  );

  const ChatFooter = () => (
    <>
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <Image
            source={require('../assets/add_128.png')}
            style={{width: 40, height: 40}}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          returnKeyType="send"
          onChangeText={text => (textMessage = text)}
          ref={messageRef}

        />
        <TouchableOpacity onPress={pushMessage}>
          <Image
            source={require('../assets/send_128.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      </View>
    </>
  );

  console.log('value', sendmessage);
  console.log('Image', image);
  console.log('Milliseconds', milliseconds);
  console.log('formattedDate', formattedDate);
  //  messages = individualdata.chat.messages;
   
  return (
    <AppContext.Provider value={{ messages, dispatchMessageEvent }}>
     {/* <useContextHelper /> */}
    <View style={styles.chatContainer}>
      <ChatHeader />
      <ChatBody />
      <BottomSheet />
      <ChatFooter />
    </View>
    </AppContext.Provider>
  );
};

const styles = StyleSheet.create({
  closeIconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  // closeIcon: {
  //   width: 20,
  //   height: 20,
  // },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomSheetContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#DCDCDC',
    padding: 16,
  },
  chatContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    flex:1
  },
  headerText: {
    fontSize: 16,
    marginLeft: 10,
  },
  bodyContainer: {
    flex: 1,
    padding: 10,
  },
  chatBubble: {
    borderRadius: 20,
    borderTopLeftRadius: 0,
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
  },
  chatBubbleright: {
    backgroundColor: '#ecf6fd',
    alignSelf: 'flex-end',
    borderTopRightRadius: 0,
    borderTopLeftRadius: 20,
    maxWidth: '90%',
  },
  chatBubbleleft: {
    backgroundColor: '#f2f6f9',
    alignSelf: 'flex-start',
    maxWidth: '90%',
  },
  chatText: {
    fontSize: 21,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#2596be',
    borderRadius: 20,
    padding: 10,
    fontSize: 21,
    marginRight: '2%',
    marginLeft: '1.5%',
  },
  head: {
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: '3%',
    marginRight: '3%',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
  },
  text: {
    marginLeft: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 10,
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  avatar: {
    marginRight: 5,
  },
  subtitle: {
    color: 'gray',
    fontSize: 18,
    marginLeft: 10,
  },
  picker: {
    height: 50,
    width: 150,
  },
  popoverContainer: {
    position: 'relative',
  },
  popoverContent: {
    position: 'absolute',
    top: 10,
    right: '0%',
    transform: [{translateX: -25}],
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 3,
  },
  buttonContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ecf6fd',
    padding: 20,
  },
  icon1: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  text1: {
    fontSize: 23,
    color: '#333',
  },
  closeIcon: {
    width: 20,
    height: 20,
    color: '#217eac',
  },
});

export default IndividualChat;
