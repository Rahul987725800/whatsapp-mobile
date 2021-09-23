import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from '../containers/Chat';
import Home from '../containers/Home';
import Practice from '../containers/Practice';
import Signup from '../containers/Signup';
import Login from '../containers/Login';
export type RootStackParamList = {
  Home: { name: string };
  Chat: { name: string; phone: string };
  Practice: undefined;
  Signup: undefined;
  Login: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          animation: 'slide_from_right',
          headerStyle: { backgroundColor: '#232D36' },
          headerTitleStyle: { color: '#9DA5AC' },
          headerShadowVisible: false,
          headerTintColor: '#9DA5AC',
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          initialParams={{ name: 'Rahul' }}
        />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Practice" component={Practice} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
