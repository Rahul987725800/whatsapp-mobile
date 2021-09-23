import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import { useMutation } from 'urql';
import { setUser } from '../store/reducers/generalReducer';
const createUserMutation = `
  mutation ($data: createUserInput) {
    createUser(data: $data) {
      name
      phone
    }
  }
`;

const Signup = ({ navigation }: any) => {
  const [createUserResult, createUser] = useMutation(createUserMutation);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => {
            setName(text);
          }}
          value={name}
          placeholder="Name"
          placeholderTextColor="#707980"
          style={{ color: '#000' }}
        />
      </View>
      <View style={{ height: 20 }} />
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => {
            setPhone(text);
          }}
          value={phone}
          placeholder="Phone"
          placeholderTextColor="#707980"
          style={{ color: '#000' }}
        />
      </View>
      <View style={{ height: 20 }} />
      <Button
        onPress={async () => {
          const result = await createUser({
            data: {
              name,
              phone,
            },
          });
          console.log(result.data);
          setUser({
            name: result.data.createUser.name,
            phone: result.data.createUser.phone,
          });
          navigation.navigate('Home');
        }}
        title="Signup"
      ></Button>
      <View style={{ height: 20 }} />
      <Button
        onPress={() => {
          navigation.replace('Login');
        }}
        title="Login Instead"
      ></Button>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    width: 250,
    paddingHorizontal: 10,
  },
});
