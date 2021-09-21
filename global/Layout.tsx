import React from 'react';

import { SafeAreaView } from 'react-native';

import Navigator from './Navigator';
import TopRightPopMenu from './TopRightPopMenu';

const Layout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigator />
      <TopRightPopMenu />
    </SafeAreaView>
  );
};
export default Layout;
