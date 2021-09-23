import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import { useQuery } from 'urql';
import { setUser } from '../store/reducers/generalReducer';
const getUserQuery = `
query ($phone: String) {
  getUser(phone: $phone) {
    name
    phone
  }
}
`;
const Login = ({ navigation }: any) => {
  const [value, setvalue] = useState('');
  const [pause, setPause] = useState(true);
  const [result, reexecuteQuery] = useQuery({
    query: getUserQuery,
    variables: {
      phone: value,
    },
    pause,
  });
  useEffect(() => {
    if (result.data) {
      const user = {
        name: result.data.getUser.name,
        phone: result.data.getUser.phone,
      };
      console.log(user);
      setUser(user);
      setTimeout(() => {
        navigation.navigate('Home');
      }, 100);
    }
  }, [result]);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => {
            setvalue(text);
          }}
          value={value}
          placeholder="Phone"
          placeholderTextColor="#707980"
          style={{ color: '#000' }}
        />
      </View>
      <View style={{ height: 20 }} />
      <Button
        onPress={() => {
          setPause(false);
        }}
        title="Login"
      ></Button>
      <View style={{ height: 20 }} />
      <Button
        onPress={() => {
          navigation.replace('Signup');
        }}
        title="Signup Instead"
      ></Button>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    width: 250,
    paddingHorizontal: 10,
  },
});
