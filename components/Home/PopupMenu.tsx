import React, { useEffect, useRef, useState } from 'react';

import {
  Text,
  View,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';
import { withAnchorPoint } from 'react-native-anchor-point';

const PopupMenu = ({ show, items }: { show: boolean; items: string[] }) => {
  const itemHeight = 45;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (show) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  }, [show]);

  const animIn = withAnchorPoint(
    { transform: [{ scale: fadeAnim as unknown as number }] },
    { x: 1, y: 0 },
    {
      width: 190,
      height: items.length * itemHeight,
    },
  );
  const animOut = {
    opacity: fadeAnim,
  };

  return (
    <Animated.View style={show ? animIn : animOut}>
      <View
        style={{
          width: 190,
          height: items.length * itemHeight,
          backgroundColor: '#313C42',
        }}
      >
        {items.map((item, i) => (
          <TouchableWithoutFeedback
            key={i}
            onPress={() => {
              console.log(item);
            }}
          >
            <View
              style={{
                height: itemHeight,
                justifyContent: 'center',
                paddingLeft: 20,
              }}
            >
              <Text style={{ color: 'white', fontSize: 16 }}>{item}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </Animated.View>
  );
};
export default PopupMenu;
