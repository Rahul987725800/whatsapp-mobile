import React, { useRef, useState } from 'react';
import {
  Animated,
  Easing,
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
interface IconButtonProps {
  children: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  width?: number;
  height?: number;
}
const IconButton = ({
  children,
  onPress,
  width = 40,
  height = 40,
}: IconButtonProps) => {
  const animVal = useRef(new Animated.Value(0)).current;

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      onPressIn={() => {
        Animated.timing(animVal, {
          toValue: 0.2,
          duration: 100,
          useNativeDriver: false,
        }).start();
      }}
      onPressOut={() => {
        Animated.timing(animVal, {
          toValue: 0,
          duration: 100,
          useNativeDriver: false,
        }).start();
      }}
    >
      <View
        style={{
          borderRadius: 1000,
          width: width,
          height: height,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Animated.View
          style={{
            position: 'absolute',
            backgroundColor: '#fff',
            opacity: animVal,
            borderRadius: 1000,
            width: width,
            height: height,
          }}
        />
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default IconButton;

const styles = StyleSheet.create({});
