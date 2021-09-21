import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Practice = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    (async () => {
      const fetchedCount = await AsyncStorage.getItem('count');
      if (fetchedCount) {
        setCount(Number(fetchedCount));
      }
    })();
  }, []);
  useEffect(() => {
    AsyncStorage.setItem('count', String(count));
  }, [count]);
  return (
    <View>
      <Text>Practice</Text>
    </View>
  );
};

export default Practice;

const styles = StyleSheet.create({});
