import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useLayoutEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { commonStyles } from '../../styles/common';
import { useIsKeyBoardVisible } from '../../hooks/useIsKeyBoardVisible';

interface MessageInputProps {
  messageInput: string;
  setMessageInput: React.Dispatch<React.SetStateAction<string>>;
  sendMessage: () => void;
}
const MessageInput = ({
  messageInput,
  setMessageInput,
  sendMessage,
}: MessageInputProps) => {
  const textInputRef = useRef<TextInput>(null);
  const isKeyBoardVisible = useIsKeyBoardVisible();
  return (
    <View
      style={{
        flexDirection: 'row',
        ...commonStyles.padLeftRight,
      }}
    >
      <View style={{ flex: 2, justifyContent: 'center' }}>
        <TextInput
          ref={textInputRef}
          onChangeText={(text) => {
            setMessageInput(text);
          }}
          value={messageInput}
          placeholder="Message"
          placeholderTextColor="#707980"
          style={styles.messageInput}
          onTouchStart={() => {
            if (textInputRef.current) {
              if (!isKeyBoardVisible) {
                // first blur then focus by default
                // this ensures we get the keyboard to type
                textInputRef.current.blur();
              }
            }
          }}
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
      <View style={{ width: 10 }} />
      <TouchableWithoutFeedback onPress={sendMessage}>
        <View style={styles.actionButton}>
          <MaterialCommunityIconsIcon name="send" size={20} color="#fff" />
        </View>
      </TouchableWithoutFeedback>
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
    fontSize: 16,
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
