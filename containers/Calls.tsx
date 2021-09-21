import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Touchable,
  TouchableWithoutFeedback,
} from 'react-native';
import { useMutation, useQuery } from 'urql';

const getNotesQuery = `
  query {
    getNotes {
      text
      uuid
    }
  }
`;
const createNoteMutation = `
  mutation ($data: createNoteInput) {
    createNote(data: $data) {
      uuid
      text
    }
  }
`;
const deleteNoteMutation = `
  mutation ($uuid: String) {
    deleteNote(uuid: $uuid) {
        message
    }
  }
`;

const Notes = () => {
  console.log('rerenderred');
  const [uuid, setUuid] = useState('');
  const [input, setInput] = useState('');
  const [result, reExecuteQuery] = useQuery({
    query: getNotesQuery,
  });

  const [createNoteResult, createNote] = useMutation(createNoteMutation);
  const [deleteNoteResult, deleteNote] = useMutation(deleteNoteMutation);

  const { data, fetching, error } = result;

  if (fetching) return <Text>Loading...</Text>;
  if (error) return <Text>Oh no... {error.message}</Text>;
  return (
    <View style={{ flex: 1 }}>
      <TextInput
        onChangeText={(text) => {
          setInput(text);
        }}
        value={input}
        placeholder="useless placeholder"
        placeholderTextColor="grey"
        style={{ color: 'black' }}
      />
      <Button
        onPress={async () => {
          await createNote({
            data: {
              uuid: uuid || Math.random().toString(),
              text: input,
            },
          });
          setInput('');
          setUuid('');
          reExecuteQuery({ requestPolicy: 'network-only' });
        }}
        title="Add"
      />

      {(data.getNotes as { text: string; uuid: string }[])?.map((note, i) => (
        <TouchableWithoutFeedback
          key={note.uuid}
          onPress={() => {
            setInput(note.text);
            setUuid(note.uuid);
          }}
          onLongPress={async () => {
            await deleteNote({
              uuid: note.uuid,
            });
            reExecuteQuery({ requestPolicy: 'network-only' });
          }}
        >
          <View style={{ padding: 20, backgroundColor: 'teal' }}>
            <Text>{note.text}</Text>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
};
const Calls = () => {
  return (
    <View style={{ flex: 1 }}>
      <Notes />
    </View>
  );
};

export default Calls;

const styles = StyleSheet.create({});
