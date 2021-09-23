import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useAsyncStorageState } from '../hooks/useAsyncStorageState';
import { useQuery, useSubscription } from 'urql';

const newMessages = `
  subscription ($roomId: String) {
    message(roomId: $roomId) {
      message
    }
  }
`;

const Messages = () => {
  const [res] = useSubscription(
    {
      query: newMessages,
      variables: {
        roomId: '123abc',
      },
    },
    (messages = [], res) => {
      return [...messages, res.message.message];
    },
  );

  return ((res.data as any[]) || []).map((v, i) => <Text key={i}>{v}</Text>);
};
const getNotesQuery = `
  query {
    getNotes {
      text
      uuid
    }
  }
`;
const Practice = () => {
  const [count, setCount] = useAsyncStorageState(0, 'count');

  const [result, reExecuteQuery] = useQuery({
    query: getNotesQuery,
  });

  return (
    <View>
      <Messages />
      <Text>Practice</Text>
      <Text>{count}</Text>
      <Button
        title="add"
        onPress={() => {
          setCount(count + 1);
        }}
      />
      <Button
        onPress={async () => {
          reExecuteQuery({ requestPolicy: 'network-only' });
        }}
        title="Refetch"
      />
      {(result.data?.getNotes as { text: string; uuid: string }[])?.map(
        (note, i) => (
          <Text key={i}>{note.text}</Text>
        ),
      )}
    </View>
  );
};

export default Practice;

const styles = StyleSheet.create({});
