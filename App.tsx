import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { store } from './store/store';
import { StyleSheet } from 'react-native';
import Layout from './global/Layout';

import {
  Client,
  defaultExchanges,
  subscriptionExchange,
  Provider as UrqlProvider,
} from 'urql';
import { SubscriptionClient } from 'subscriptions-transport-ws';

const subscriptionClient = new SubscriptionClient(
  'ws://192.168.43.184:8232/graphql',
  {
    reconnect: true,
  },
);
subscriptionClient.onConnected(() => {
  console.log('subscriptionClient connected');
});
subscriptionClient.onError(() => {
  // console.log('subscriptionClient error');
});
const client = new Client({
  url: 'http://192.168.43.184:8232/graphql',
  exchanges: [
    ...defaultExchanges,
    subscriptionExchange({
      forwardSubscription: (operation) =>
        subscriptionClient.request(operation) as any,
    }),
  ],
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
