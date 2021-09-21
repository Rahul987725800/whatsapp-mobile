import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

interface ChatItemProps {}
const ChatItem = ({ avatar, name, message, time, onPress }: any) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <ListItem
        bottomDivider
        containerStyle={{ backgroundColor: 'transparent' }}
      >
        <Avatar
          source={{ uri: avatar }}
          avatarStyle={{ borderRadius: 1000 }}
          containerStyle={{
            width: 50,
            height: 50,
          }}
        />
        <ListItem.Content style={{ position: 'relative' }}>
          <ListItem.Title style={{ color: '#D4DCDF' }}>{name}</ListItem.Title>
          <ListItem.Subtitle
            style={{
              color: '#889397',
              marginTop: 10,
            }}
          >
            {message}
          </ListItem.Subtitle>
          <Text
            style={{
              position: 'absolute',
              right: 0,
              color: '#868F94',
              fontWeight: 'bold',
              fontSize: 12,
            }}
          >
            {time}
          </Text>
        </ListItem.Content>
      </ListItem>
    </TouchableWithoutFeedback>
  );
};

export default ChatItem;

const styles = StyleSheet.create({});
