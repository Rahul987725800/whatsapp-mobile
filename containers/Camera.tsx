import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { Button } from 'react-native-elements';
import BackIcon from '../assets/icons/shared/back.svg';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setMessage } from '../store/reducers/messageReducer';
import { commonStyles } from '../styles/common';

const Camera = () => {
  const message = useAppSelector((state) => state.message.message);
  const dispatch = useAppDispatch();
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require('../assets/images/sample/sundar.jpg')}
        style={{
          width: 200,
          height: 300,
          ...commonStyles.testBorder,
          // resizeMode: 'cover', this is default
        }}
      />
      <BackIcon width={100} height={50} />
      <Text>{message}</Text>
      <Button
        onPress={() => {
          dispatch(setMessage('new message'));
        }}
        title="change"
      ></Button>
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({});
