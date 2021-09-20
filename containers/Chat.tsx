import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native-elements';
import { RootStackParamList } from '../App';
interface ChatProps
  extends NativeStackScreenProps<RootStackParamList, 'Chat'> {}

const Chat = ({ navigation, route }: ChatProps) => {
  const { name } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: name,
    });
  }, []);
  return (
    <View>
      <Text>Single Chat</Text>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
