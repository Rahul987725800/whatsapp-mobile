import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../global/Navigator';
import React, { useLayoutEffect } from 'react';
import { Image, StyleSheet, useWindowDimensions, View } from 'react-native';

import { useAsyncStorageState } from '../hooks/useAsyncStorageState';
import MessageInput from '../components/Chat/MessageInput';
interface ChatProps
  extends NativeStackScreenProps<RootStackParamList, 'Chat'> {}

const Chat = ({ navigation, route }: ChatProps) => {
  const { name } = route.params;
  const dimensions = useWindowDimensions();
  const [messageInput, setMessageInput] = useAsyncStorageState(
    '',
    name + 'message',
  );
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
        <MessageInput
          messageInput={messageInput}
          setMessageInput={setMessageInput}
        />
        <View style={{ height: 5 }} />
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
