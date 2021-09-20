import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { RootStackParamList } from '../../App';

interface First {}

function First({}: First) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();
  const route = useRoute<RouteProp<RootStackParamList, 'Home'>>();
  const { name } = route.params;

  useEffect(() => {}, []);
  return (
    <View>
      <Text>First Screen {name}</Text>
      <Button
        onPress={() => {
          navigation.navigate('Sample');
        }}
        title="Sample First"
      />
    </View>
  );
}
export default First;
