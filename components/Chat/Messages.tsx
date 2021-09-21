import React, { useEffect, useRef } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { commonStyles } from '../../styles/common';
import { MessageType } from '../../types/ChatTypes';
import Message from './Message';
interface MessagesProps {
  messages: MessageType[];
}
const Messages = ({ messages }: MessagesProps) => {
  const listRef = useRef<FlatList<MessageType>>(null);
  useEffect(() => {
    const t = setTimeout(() => {
      if (listRef.current) {
        listRef.current.scrollToEnd({ animated: false });
      }
    }, 1);
    return () => {
      clearTimeout(t);
    };
  }, [messages]);
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollToEnd({ animated: false });
    }
  }, []);
  return (
    <View>
      <FlatList
        style={{
          paddingLeft: 15,
          paddingRight: 15,
        }}
        ref={listRef}
        data={messages}
        keyExtractor={(item, index) => item.text + index}
        renderItem={({ item: message }) => (
          <View>
            <Message message={message} />
            <View style={{ height: 3 }} />
          </View>
        )}
      />
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({});
