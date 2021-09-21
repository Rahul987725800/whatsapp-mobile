import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useLayoutEffect, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import Chats from './Chats';
import Camera from './Camera';
import Status from './Status';
import Calls from './Calls';
import { TouchableOpacity, View } from 'react-native';
import { useAppDispatch } from '../store/hooks';
import { setShowMainPopup } from '../store/reducers/generalReducer';
import { RootStackParamList } from '../global/Navigator';
const Tab = createMaterialTopTabNavigator();

interface HomeProps
  extends NativeStackScreenProps<RootStackParamList, 'Home'> {}

function Home({ navigation, route }: HomeProps) {
  const { name } = route.params;
  const dispatch = useAppDispatch();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'WhatsApp',
      headerRight: () => (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 60,
            marginRight: 10,
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <IoniconsIcon name="md-search-sharp" size={20} color="#FAFFFF" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              dispatch(setShowMainPopup(true));
            }}
          >
            <MaterialCommunityIconsIcon
              name="dots-vertical"
              size={20}
              color="#FAFFFF"
            />
          </TouchableOpacity>
        </View>
      ),
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
