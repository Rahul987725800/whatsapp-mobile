import { NavigationProp, useNavigation } from '@react-navigation/core';
import React from 'react';
import { FlatList, View } from 'react-native';
import { useQuery } from 'urql';
import ChatItem from '../components/AllChats/ChatItem';
import { RootStackParamList } from '../global/Navigator';
const getUsersQuery = `
  query {
    getUsers {
      name
      phone
    }
  }
`;
//
const AllChats = () => {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, 'Home'>>();
  const [result, reExecuteQuery] = useQuery({
    query: getUsersQuery,
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#18252D',
      }}
    >
      <FlatList
        data={result?.data?.getUsers || []}
        renderItem={({ item }) => (
          <ChatItem
            avatar=""
            name={item.name}
            message={item.phone}
            time="4:00 pm"
            onPress={() => {
              navigation.navigate('Chat', {
                name: item.name,
                phone: item.phone,
              });
            }}
          />
        )}
      />
    </View>
  );
};

export default AllChats;
