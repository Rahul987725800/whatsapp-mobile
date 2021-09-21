import React from 'react';

import {
  SafeAreaView,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from 'react-native';
import PopupMenu from '../components/Home/PopupMenu';
import { useDelayed } from '../hooks/useDelayed';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setShowMainPopup } from '../store/reducers/generalReducer';
import Navigator from './Navigator';

const Layout = () => {
  const dimensions = useWindowDimensions();
  const showMainPopup = useAppSelector((state) => state.general.showMainPopup);
  const showMainPopupDelayed = useDelayed(showMainPopup, 200);
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigator />

      {(showMainPopup || showMainPopupDelayed) && (
        <TouchableWithoutFeedback
          onPress={() => {
            dispatch(setShowMainPopup(false));
          }}
        >
          <View
            style={{
              zIndex: 200,
              position: 'absolute',
              top: 0,
              left: 0,
              height: dimensions.height,
              width: dimensions.width,
            }}
          >
            <View style={{ position: 'absolute', top: 5, right: 10 }}>
              <PopupMenu
                show={showMainPopup}
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
          </View>
        </TouchableWithoutFeedback>
      )}
    </SafeAreaView>
  );
};
export default Layout;
