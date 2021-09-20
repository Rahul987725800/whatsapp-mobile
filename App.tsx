import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './containers/Home';
import Chat from './containers/Chat';

export type RootStackParamList = {
  Home: { name: string };
  Chat: { name: string };
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
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
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
