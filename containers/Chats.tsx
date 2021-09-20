import { NavigationProp, useNavigation } from '@react-navigation/core';
import React from 'react';
import { FlatList, View } from 'react-native';
import ChatItem from '../components/Chat/ChatItem';
import { RootStackParamList } from '../App';

const Chats = () => {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, 'Home'>>();
  const list = [
    {
      name: 'Amy Farha',
      avatar_url:
        'https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png',
      subtitle: 'Vice President',
    },
    {
      name: 'Chris Jackson',
      avatar_url:
        'https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png',
      subtitle: 'Vice Chairman',
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#18252D',
      }}
    >
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <ChatItem
            avatar={item.avatar_url}
            name={item.name}
            message="This is the message"
            time="4:00 pm"
            onPress={() => {
              navigation.navigate('Chat', { name: item.name });
            }}
          />
        )}
      />
    </View>
  );
};

export default Chats;
