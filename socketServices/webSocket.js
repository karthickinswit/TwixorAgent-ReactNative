/* eslint-disable prettier/prettier */
import { Subject } from 'rxjs';
import {IndividualChat} from '../components/individualchat'
import { useContext } from 'react';
import { AppContext } from '../components/context';
import {useContextHelper} from '../components/utilities/utility_variable'

const subUser = new Subject();


export const messageService = {
    sendMessage: message => {WebSocketClient.getInstance().sendingMessage(message)},
    clearMessages: () => subUser.next(),
    getMessage: () => subUser.asObservable(),
};


class WebSocketClient {
  
  static instance = null;
  callbacks = {};
  


  static getInstance() {
    if (!WebSocketClient.instance) {
      WebSocketClient.instance = new WebSocketClient();
    }
    return WebSocketClient.instance;
  }

  constructor() {
    this.socketRef = null;
  }

  addCallbacks = (...callbacks) => (this.callbacks = {...callbacks});

  connect = () => {
    var headers = {};
var authToken = '0mWeYtGs9FZIG1aWK7/oU2E6ixO57tB40fldoHyu41YfXZJCEMLuKFgxM9RtZPcl';
headers['authentication-token'] = authToken;
// var ws = new WebSocket('wss://aim.twixor.com/actions',null,{headers});
//     const path = 'YOUR_SOCKET_PATH';
    this.socketRef = new WebSocket('wss://aim.twixor.com/actions',null,{headers});
    
    this.socketRef.onopen = () => {
      console.log('WebSocket open');
    };

    this.socketRef.onmessage = e => {
      //  console.log(IndividualChat.props);
        // dispatchUserEvent('REMOVE_USER', { userId: user.id });
    //     var obj = JSON.parse(e.data);
    // console.log('individualdata',obj);
    // if (obj.action == 'agentReplyChat'){
    //   console.log(obj.content[0].response.chat.messages[0]);
    //   var msg=obj.content[0].response.chat.messages[0];
      
      // console.log("First",messages.length);
      // const messages1=[...messages];
      // messages1.push(msg);
      //  dispatchMessageEvent('ADD_MESSAGE', { message:msg })
        // AppContext.dispatchMessageEvent('ADD_MESSAGE', { message:msg });
        // useContextHelper(msg);
        // console.log("dispatched");
    
         subUser.next(e.data);
    //   this.messageService.getMessage(e.data);
    };

    this.socketRef.onerror = e => {
      console.log(e.message);
    };

    this.socketRef.onclose = () => {
      console.log("WebSocket closed let's reopen");
      this.connect();
    };
  };

  sendingMessage(message){
    this.socketRef.send(JSON.stringify(message));

  }

  state = () => this.socketRef.readyState;

  waitForSocketConnection = callback => {
    const socket = this.socketRef;
    const recursion = this.waitForSocketConnection;
    setTimeout(() => {
      if (socket.readyState === 1) {
        console.log('Connection is made');
        if (callback != null) {
          callback();
        }
        return;
      } else {
        console.log('wait for connection...');
        recursion(callback);
      }
    }, 4000);
  };
}

export default WebSocketClient.getInstance();
