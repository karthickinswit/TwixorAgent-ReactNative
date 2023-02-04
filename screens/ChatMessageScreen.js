/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState,useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Avatar} from 'react-native-elements';
// import { FontAwesome5 } from 'react-native-vector-icons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import webSocket, { messageService ,subUser} from '../socketServices/webSocket';
// import * as ImagePicker from "expo-image-picker";




const IndividualChat = ({route}) => {
  useEffect(()=>{
    console.log("Socket Connect Call")
    webSocket.connect();
    webSocket.waitForSocketConnection(()=>{
        // console.log(webSocket);
        
        
    });
  },[]);
 
  const messageRef = useRef(null);
  const navigation = useNavigation();
  var userData={"chat":{
    "id": {
      "$oid": "62bd718fde182b5b4962b086"
    },
    "chatId": "dfb369e0f85911eca9919a4bbcc22257",
    "cId": 434448,
    "eId": 103,
    "state": 2,
    "customerName": "44e8c373c5af5ca0ddbb9e86b256fd85",
    "customerNumber": "+9144e8c373c5af5ca0ddbb9e86b256fd85",
    "customerIconUrl": "",
    "client": {
      "os": "Windows",
      "ipAddr": "14.143.179.22",
      "country": "India",
      "countryCode": "IN",
      "state": "Gujarat",
      "city": "Ahmedabad",
      "zip": "380015",
      "lat": "23.01101",
      "lng": "72.50292"
    },
    "customerChatChannelType": 0,
    "contextId": "",
    "callback": {},
    "startedOn": {
      "$date": 1656582544736
    },
    "lastContentType": "TEXT",
    "lastMessage": "How can I help you?",
    "lastModifiedOn": {
      "$date": 1656582590235
    },
    "isRated": false,
    "customerInfo": {},
    "metadata": {},
    "serviceId": {
      "$oid": "56fb979384aeaaa0c33b2d86"
    },
    "messages": [
      {
        "message": "HI",
        "contentType": "TEXT",
        "imageUrl": "",
        "postedOn": {
          "$date": 1656582544738
        },
        "actionType": 0,
        "actionBy": 434448,
        "status": 2,
        "actionId": "bf353be42a8e4e95a8d9c3ace74fe8e4",
        "actedOn": "2022-06-30T09:49:04Z",
        "actedDateTime": {
          "$date": 1656582544000
        }
      },
      {
        "actionType": 2,
        "actionBy": 269,
        "actionId": "e4e89c2fe4e24dcd81db20ed5608065b",
        "actedOn": "2022-06-30T09:49:35Z",
        "actedDateTime": {
          "$date": 1656582575000
        }
      },
      {
        "message": "Hi, this is Ashutosh!",
        "contentType": "TEXT",
        "imageUrl": "",
        "postedOn": {
          "$date": 1656582585570
        },
        "actionType": 3,
        "actionBy": 269,
        "status": 2,
        "attachment": {},
        "actionId": "6a6c2e9fbb23445ca2630387843a98e8",
        "actedOn": "2022-06-30T09:49:45Z",
        "actedDateTime": {
          "$date": 1656582585000
        }
      },
      {
        "message": "How can I help you?",
        "contentType": "TEXT",
        "imageUrl": "",
        "postedOn": {
          "$date": 1656582590235
        },
        "actionType": 3,
        "actionBy": 269,
        "status": 2,
        "attachment": {},
        "actionId": "a2fd5c474b194effa1bb5224abdb3be9",
        "actedOn": "2022-06-30T09:49:50Z",
        "actedDateTime": {
          "$date": 1656582590000
        }
      }
    ],
    "participants": [
      269
    ],
    "handlingAgent": 269,
    "pickedUpInterval": 30882,
    "handlingDept": {
      "$oid": "5555cf25e4b00a43b5b1ab87"
    }
  }
};
   const individualdata =userData; // route.params;
  const agent = individualdata.chat.handlingAgent;
  const messages = individualdata.chat.messages;
  const [isVisible, setIsVisible] = useState(false);
  const [currentUser] = useState(agent);
  const [visible, setVisible] = useState(false);
  const [pickedImagePath, setPickedImagePath] = useState("");

  const timestamp = new Date().toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const showImagePicker = async () => {
    // const permissionResult =
    //   await ImagePicker.requestMediaLibraryPermissionsAsync();

    // if (permissionResult.granted === false) {
    //   alert("You've refused to allow this appp to access your photos!");
    //   return;
    // }

    // const result = await ImagePicker.launchImageLibraryAsync();
    // console.log(result.uri);

    // if (!result.cancelled) {
    //   setPickedImagePath(result.uri);
    // }
  };

  const handleClick = () => {
    navigation.navigate('AllChatList');
  };
  

   const handleSubmit = async () => {
    console.log("Submitted");
    const message = messageRef.current.value;
    const myHeaders = new Headers();
    const sendObject={"action":"agentReplyChat","eId":103,"message":"hello","contentType":"TEXT","chatId":"dfb369e0f85911eca9919a4bbcc22257","attachment":{},"pickup":false};
   messageService.sendMessage(sendObject);
    //   myHeaders.append("Content-Type", "application/json");
  //   myHeaders.append(
  //     "authentication-token",
  //     encodeURIComponent(
  //       "0mWeYtGs9FZIG1aWK7/oU2E6ixO57tB40fldoHyu41YfXZJCEMLuKFgxM9RtZPcl"
  //     )
  //   );
  //   let response = await fetch("https://aim.twixor.com/e/enterprise/chat/summary", {
  //     method: "POST",
  //     headers: myHeaders,
  //     crossDomain: true,
  //     // body: JSON.stringify({
  //       message: message,
  //       contentType: "TEXT",
  //       imageUrl: "",
  //       postedOn: {
  //         $date: 1674637374545,
  //       },
  //       actionType: 3,
  //       actionBy: 269,
  //       status: 2,
  //       attachment: {},
  //       actionId: "2a95a36c07cc4376be2672b5ea5803b3",
  //       actedOn: "2023-01-25T03:02:53Z",
  //       actedDateTime: {
  //         $date: 1674637374000,
  //       },
  //     // }),
  //   });
  //   let json = await response.json();
  //   console.log(json);
  //   // return json.movies;
  // }
      // .then((res) =>{console.log(res.json())})
      // .then((data) => {console.log(data)})
      // .catch((err) => {});
   }

  // const timestamp = new Date().toLocaleString('en-US', {
  //   hour: 'numeric',
  //   minute: 'numeric',
  //   hour12: true,
  // });

  function  Popver() {
  //   var msService=messageService.getMessage();
  // msService.subscribe((data)=>{
  //   console.log(data)
  // });
   
      return (
        <View style={styles.popoverContainer}>
          {isVisible && (
            <>
              <View style={styles.popoverContent}>
                <TouchableOpacity style={styles.buttonContainer1}>
                  <Image
                    source={{ uri: "https://picsum.photos/id/237/200/300" }}
                    style={styles.icon1}
                  />
                  <Text style={styles.text1}>Customer Detail</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer1}>
                  <Image
                    source={{ uri: "https://picsum.photos/id/237/200/300" }}
                    style={styles.icon1}
                  />
                  <Text style={styles.text1}>Invite Agent</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer1}>
                  <Image
                    source={{ uri: "https://picsum.photos/id/237/200/300" }}
                    style={styles.icon1}
                  />
                  <Text style={styles.text1}>Transfer Chat</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer1}>
                  <Image
                    source={{ uri: "https://picsum.photos/id/237/200/300" }}
                    style={styles.icon1}
                  />
                  <Text style={styles.text1}>Closed Chat</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer1}>
                  <Image
                    source={{ uri: "https://picsum.photos/id/237/200/300" }}
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

  const ChatHeader = () => (

      <>
      </>

  );

  const ChatBody = () => (
    <>
      <View style={styles.bodyContainer}>
        {individualdata.chat.message !== individualdata.chat.username ? (
          <View style={[styles.chatBubble, styles.chatBubbleleft]}>
            <Text style={styles.chatText}>{individualdata.chat.message}</Text>
            <Text style={{float: 'right'}}>{Date.now}</Text>
          </View>
        ) : (
          <View style={[styles.chatBubble, styles.chatBubbleright]}>
            <Text style={styles.chatText}>{individualdata.chat.username}</Text>
            <Text style={{float: 'right'}}>{timestamp}</Text>
          </View>
        )}

        <View style={[styles.chatBubble, styles.chatBubbleleft]}>
        <Text style={styles.chatText}>Im Doing Great! Thanks.</Text>
        <Text style={{ float: 'right' }}>{timestamp}</Text>
      </View>
      <View style={[styles.chatBubble, styles.chatBubbleright]}>
        <Text style={styles.chatText}>
          i Have a Quick Question Which Needs to be Discussed. Are you Free Now?
        </Text>
        <Text style={{ float: 'right' }}>{timestamp}</Text>
      </View>
      <View style={[styles.chatBubble, styles.chatBubbleright]}>
        <Image
          source={{ uri: 'https://picsum.photos/id/237/200/300' }}
          style={{ width: 200, height: 200 }}
        />
        <Text style={{ float: 'right' }}>{timestamp}</Text>
      </View>
      <View style={[styles.chatBubble, styles.chatBubbleleft]}>
        <Text style={styles.chatText}>What is This Shit?</Text>
        <Text style={{ float: 'right' }}>{timestamp}</Text>
      </View>
      </View> 
    </>
  );

  const ChatFooter = () => (
    <View style={styles.footerContainer}>
      <TouchableOpacity>
        <Image
          source={require('../assets/add_128.png')}
          style={{width: 40, height: 40}}
        />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Type a message"
        returnKeyType="send"
        ref={messageRef}
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Image
          source={require('../assets/send_128.png')}
          style={{width: 30, height: 30}}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.chatContainer}>
      {/* <ChatHeader /> */}
      <View style={styles.head}>
          <View style={styles.left}>
              <TouchableOpacity onPress={handleClick}>
             {/* <myIcon /> */}
              <FontAwesome5
              name="sc-telegram"
              size={55}
              color="#217eac"
              style={{ marginLeft: -10, marginRight: 10 }}
            />
            {/* <FontAwesome5 name="icon-name" size={20} color="#4F8EF7" /> */}

              </TouchableOpacity>
              <Avatar
                  rounded
                  source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
                  style={{ width: 60, height: 60 }} />
              <View style={styles.textContainer}>
                  <View>
                      <Text style={styles.title}>Twixor</Text>
                  </View>
                  <View style={styles.subtitleContainer}>
                      <Text style={styles.subtitle}>Chennai</Text>
                  </View>
              </View>
          </View>
          <View style={styles.right}>
              <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                  <Image
                      source={require('../assets/inside_menu_64.png')}
                      style={{ width: 35, height: 35 }} />
              </TouchableOpacity>
          </View>
      </View>
      <View >
      <Popver /> 
      </View>
       
      {/* 
      
       */}
      <ChatBody />
      <ChatFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
     flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
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
});

export default IndividualChat;
