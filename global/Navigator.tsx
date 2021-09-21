import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from '../containers/Chat';
import Home from '../containers/Home';
import Practice from '../containers/Practice';
export type RootStackParamList = {
  Home: { name: string };
  Chat: { name: string };
  Practice: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
