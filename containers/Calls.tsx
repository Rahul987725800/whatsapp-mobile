import React, { useEffect, useRef, useState } from 'react';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  StyleSheet,
  Text,
  View,
  Animated,
  Button,
  useWindowDimensions,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';
import { useQuery } from 'urql';
import { withAnchorPoint } from 'react-native-anchor-point';

const NotesQuery = `
  query {
    getNotes {
      text
    }
  }
`;
const FadeInView = ({ show, items }: { show: boolean; items: string[] }) => {
  const itemHeight = 45;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (show) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
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

const Notes = () => {
  const [result, reExecuteQuery] = useQuery({
    query: NotesQuery,
  });

  const { data, fetching, error } = result;

  if (fetching) return <Text>Loading...</Text>;
  if (error) return <Text>Oh no... {error.message}</Text>;
  return (
    <View style={{ flex: 1 }}>
      {(data.getNotes as { text: string }[])?.map((note, i) => (
        <Text key={i}>{note.text}</Text>
      ))}
    </View>
  );
};
const Calls = () => {
  const dimensions = useWindowDimensions();
  const [show, setShow] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <TouchableWithoutFeedback
        onPress={() => {
          setShow(false);
        }}
      >
        <View
          style={{
            position: 'absolute',
            top: 0,
            height: dimensions.height,
            width: dimensions.width,
            backgroundColor: 'teal',
          }}
        >
          <View
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
            }}
          >
            <FadeInView
              show={show}
              items={[
                'New Group',
                'New broadcast',
                'WhatsApp Web',
                'Starred messages',
                'Payments',
                'Settings',
              ]}
            />
          </View>

          <TouchableWithoutFeedback onPress={() => setShow(true)}>
            <View
              style={{
                position: 'absolute',
                right: 10,
                top: 10,
              }}
            >
              <MaterialCommunityIconsIcon
                name="dots-vertical"
                size={30}
                color="#fff"
              />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              console.log('some where pressed');
            }}
          >
            <View
              style={{
                position: 'absolute',
                left: 10,
                top: 10,
                height: 100,
                width: 100,
                backgroundColor: 'red',
              }}
            >
              <MaterialCommunityIconsIcon
                name="dots-horizontal"
                size={30}
                color="#fff"
              />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => setShow(true)}>
            <View
              style={{
                position: 'absolute',
                right: 10,
                top: 10,
              }}
            >
              <MaterialCommunityIconsIcon
                name="dots-vertical"
                size={30}
                color="#fff"
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
      {/* <Notes /> */}
    </View>
  );
};

export default Calls;

const styles = StyleSheet.create({});
