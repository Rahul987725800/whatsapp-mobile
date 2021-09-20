import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useLayoutEffect } from 'react';
import { RootStackParamList } from '../App';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Chats from './Chats';
import Camera from './Camera';
import Status from './Status';
import Calls from './Calls';
const Tab = createMaterialTopTabNavigator();

interface HomeProps
  extends NativeStackScreenProps<RootStackParamList, 'Home'> {}

function Home({ navigation, route }: HomeProps) {
  const { name } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'WhatsApp',
    });
  }, []);
  return (
    <Tab.Navigator
      initialRouteName="chats"
      screenOptions={{
        tabBarIndicatorContainerStyle: {
          backgroundColor: '#232D36',
        },

        tabBarIndicatorStyle: {
          borderBottomWidth: 3,
          borderBottomColor: '#0CA996',
        },
        tabBarActiveTintColor: '#0CA996',
        tabBarInactiveTintColor: '#9DA5AC',
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
      }}
    >
      <Tab.Screen
        name="camera"
        component={Camera}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <FontAwesome5Icon name="camera" size={20} color="#9DA5AC" />
          ),
        }}
      />
      <Tab.Screen name="chats" component={Chats} options={{}} />
      <Tab.Screen name="status" component={Status} />
      <Tab.Screen name="calls" component={Calls} />
    </Tab.Navigator>
  );
}
export default Home;
