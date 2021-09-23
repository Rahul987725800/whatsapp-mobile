import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../global/Navigator';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Image, StyleSheet, useWindowDimensions, View } from 'react-native';

import { useAsyncStorageState } from '../hooks/useAsyncStorageState';
import MessageInput from '../components/Chat/MessageInput';
import Messages from '../components/Chat/Messages';
import { MessageType } from '../types/ChatTypes';
import { useMutation, useSubscription } from 'urql';
import { useAppSelector } from '../store/hooks';
interface ChatProps
  extends NativeStackScreenProps<RootStackParamList, 'Chat'> {}
const messageSubscription = `
subscription ($to: String) {
  message(to: $to) {
    text
    to
    from
  }
}
`;
const createMessageMutation = `
mutation Mutation($text: String, $to: String, $from: String) {
  createMessage(text: $text, to: $to, from: $from) {
    message
  }
}
`;
const Chat = ({ navigation, route }: ChatProps) => {
  const user = useAppSelector((state) => state.general.user);
  console.log('chat');
  console.log(user);
  const [res] = useSubscription(
    {
      query: messageSubscription,
      variables: {
        to: '123',
      },
    },
    (_, res) => {
      if (res.message.from === phone) {
        setMessages((prev) => [
          ...prev,
          { text: res.message.text, type: 'received' },
        ]);
      }
    },
  );

  const [createMessageResult, createMessage] = useMutation(
    createMessageMutation,
  );
  const { name, phone } = route.params;
  const dimensions = useWindowDimensions();
  const [messageInput, setMessageInput] = useAsyncStorageState(
    '',
    name + 'message',
  );
  const sendMessage = async () => {
    if (messageInput) {
      const messageInputCopy = messageInput;
      setMessages((prev) => [
        ...prev,
        {
          text: messageInputCopy,
          type: 'sent',
        },
      ]);
      const result = await createMessage({
        text: messageInputCopy,
        to: phone,
        from: '123',
      });
      console.log(result);
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
