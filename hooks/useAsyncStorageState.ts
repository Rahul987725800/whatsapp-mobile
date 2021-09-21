import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
export const useAsyncStorageState = <T>(
  initialState: T | (() => T),
  key: string,
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    (async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(key);
        if (jsonValue != null) {
          setState(JSON.parse(jsonValue));
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const jsonValue = JSON.stringify(state);
        await AsyncStorage.setItem(key, jsonValue);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [state]);

  return [state, setState];
};
