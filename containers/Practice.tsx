import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useAsyncStorageState } from '../hooks/useAsyncStorageState';

const Practice = () => {
  const [count, setCount] = useAsyncStorageState(0, 'count');
  return (
    <View>
      <Text>Practice</Text>
      <Text>{count}</Text>
      <Button
        title="add"
        onPress={() => {
          setCount(count + 1);
        }}
      />
    </View>
  );
};

export default Practice;

const styles = StyleSheet.create({});
