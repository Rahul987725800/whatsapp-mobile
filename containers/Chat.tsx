import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../global/Navigator';
import React, { useLayoutEffect, useState } from 'react';
import { Image, StyleSheet, useWindowDimensions, View } from 'react-native';

import { useAsyncStorageState } from '../hooks/useAsyncStorageState';
import MessageInput from '../components/Chat/MessageInput';
import Messages from '../components/Chat/Messages';
import { MessageType } from '../types/ChatTypes';
interface ChatProps
  extends NativeStackScreenProps<RootStackParamList, 'Chat'> {}

const Chat = ({ navigation, route }: ChatProps) => {
  const { name } = route.params;
  const dimensions = useWindowDimensions();
  const [messageInput, setMessageInput] = useAsyncStorageState(
    '',
    name + 'message',
  );
  const sendMessage = () => {
    if (messageInput) {
      const messageInputCopy = messageInput;
      setMessages((prev) => [
        ...prev,
        {
          text: messageInputCopy,
          type: 'sent',
        },
      ]);
      setMessageInput('');
    }
  };
  const [messages, setMessages] = useState<MessageType[]>(() => [
    {
      type: 'sent',
      text: 'hii Hello',
    },
    {
      type: 'received',
      text: 'hii Hello kya kar raha hai',
    },
    {
      type: 'sent',
      text: 'hii hor bhai 123',
    },
  ]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: name,
    });
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require('../assets/images/chat/chatbgdark.png')}
        style={{
          width: dimensions.width,
          height: dimensions.height,
          position: 'absolute',
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}
      >
        <Messages messages={messages} />
        <View style={{ height: 5 }} />
        <MessageInput
          messageInput={messageInput}
          setMessageInput={setMessageInput}
          sendMessage={sendMessage}
        />
        <View style={{ height: 5 }} />
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
