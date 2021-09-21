import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MessageType } from '../../types/ChatTypes';
interface MessageProps {
  message: MessageType;
}
const Message = ({ message }: MessageProps) => {
  return (
    <View
      style={{
        alignItems: message.type == 'received' ? 'flex-start' : 'flex-end',
      }}
    >
      <View
        style={{
          backgroundColor: message.type == 'received' ? '#2D383E' : '#035E53',
          borderRadius: 10,
          paddingVertical: 10,
          paddingHorizontal: 15,
        }}
      >
        <Text style={{ color: 'white', fontSize: 16 }}>{message.text}</Text>
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({});
