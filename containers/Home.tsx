import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useLayoutEffect, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import AllChats from './AllChats';
import Camera from './Camera';
import Status from './Status';
import Calls from './Calls';
import { TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useAppDispatch } from '../store/hooks';
import { setShowMainPopup } from '../store/reducers/generalReducer';
import { RootStackParamList } from '../global/Navigator';
import IconButton from '../components/Shared/IconButton';
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
            width: 70,
          }}
        >
          <IconButton onPress={() => {}}>
            <IoniconsIcon name="md-search-sharp" size={20} color="#FAFFFF" />
          </IconButton>

          <IconButton
            onPress={() => {
              dispatch(setShowMainPopup(true));
            }}
          >
            <MaterialCommunityIconsIcon
              name="dots-vertical"
              size={25}
              color="#FAFFFF"
            />
          </IconButton>
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
      <Tab.Screen name="chats" component={AllChats} />
      <Tab.Screen name="status" component={Status} />
      <Tab.Screen name="calls" component={Calls} />
    </Tab.Navigator>
  );
}
export default Home;
