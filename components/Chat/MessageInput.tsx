import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { commonStyles } from '../../styles/common';

interface MessageInputProps {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}
const MessageInput = ({ message, setMessage }: MessageInputProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        ...commonStyles.padLeftRight,
      }}
    >
      <View style={{ flex: 2, justifyContent: 'center' }}>
        <TextInput
          onChangeText={(text) => {
            setMessage(text);
          }}
          value={message}
          placeholder="useless placeholder"
          placeholderTextColor="#707980"
          style={styles.messageInput}
        />
        <FontAwesome5Icon
          name="smile"
          size={20}
          color="#9DA5AC"
          style={{ position: 'absolute', left: 15 }}
        />
        <EntypoIcon
          name="attachment"
          size={20}
          color="#9DA5AC"
          style={{ position: 'absolute', right: 50 }}
        />
        <FontAwesome5Icon
          name="camera"
          size={20}
          color="#9DA5AC"
          style={{ position: 'absolute', right: 15 }}
        />
      </View>
      <View style={styles.actionButton}>
        <MaterialCommunityIconsIcon name="send" size={20} color="#fff" />
      </View>
    </View>
  );
};

export default MessageInput;

const styles = StyleSheet.create({
  messageInput: {
    color: '#fff',
    backgroundColor: '#2D383E',
    borderRadius: 1000,
    paddingLeft: 45,
  },
  actionButton: {
    backgroundColor: '#02AF9C',
    width: 50,
    height: 50,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});