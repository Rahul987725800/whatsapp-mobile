import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../global/Navigator';
import React, { useLayoutEffect } from 'react';
import { StyleSheet } from 'react-native';

import { useAsyncStorageState } from '../hooks/useAsyncStorageState';
import MessageInput from '../components/Chat/MessageInput';
interface ChatProps
  extends NativeStackScreenProps<RootStackParamList, 'Chat'> {}

const Chat = ({ navigation, route }: ChatProps) => {
  const { name } = route.params;
  const [message, setMessage] = useAsyncStorageState('', name + 'message');
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: name,
    });
  }, []);
  return <MessageInput message={message} setMessage={setMessage} />;
};

export default Chat;

const styles = StyleSheet.create({});
