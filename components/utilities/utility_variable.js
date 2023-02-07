/* eslint-disable prettier/prettier */
import ChatContext from '../chatlist'
import { useState, createContext, useContext, useEffect } from "react";;
import {AppContext} from '../context';
import { messageService} from '../../socketServices/webSocket';
import {MessageContext} from '../individualchat';
import {View} from 'react-native';


export const useContextHelper = () => {

 
    const { dispatchMessageEvent } = useContext(AppContext);
    const {dispatchUserEvent} = useContext(AppContext);


    
    
    useEffect(()=>{
        messageService.getMessage().subscribe((data)=>{
            var obj = JSON.parse(data);
            console.log('individualdata',obj);
            if (obj.action == 'agentReplyChat'){
              console.log(obj.content[0].response.chat.messages[0]);
              var msg = obj.content[0].response.chat.messages[0];
              
              console.log(dispatchMessageEvent);
              dispatchMessageEvent('ADD_MESSAGE', { message:msg });
            }
            });

        // dispatchMessageEvent('ADD_MESSAGE', { message:msg });
    });

    return (
       
         
        <View >
          
        </View>
        );
    
    
//   return { logCurrentContextValue };
};

// const GlobalUserModel = new MyComponent(); 
// export default GlobalUserModel;
