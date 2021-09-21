import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { store } from './store';
import { StyleSheet } from 'react-native';

import { createClient, Provider as UrqlProvider } from 'urql';
import Layout from './global/Layout';

const client = createClient({
  url: 'http://192.168.43.184:8090/graphql',
});

const App = () => {
  return (
    <UrqlProvider value={client}>
      <StoreProvider store={store}>
        <Layout />
      </StoreProvider>
    </UrqlProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
