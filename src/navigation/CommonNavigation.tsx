import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import router from './router';
import {common} from '@screens/common';

const CommonStack = createNativeStackNavigator();

const CommonNavigation = () => {
  return (
    <CommonStack.Navigator screenOptions={{headerShown: false}}>
      <CommonStack.Screen
        name={router.SAVING_SCREEN}
        component={common[router.SAVING_SCREEN]}
      />

      <CommonStack.Screen
        name={router.NFT_DETAIL_SCREEN}
        component={common[router.NFT_DETAIL_SCREEN]}
      />

      <CommonStack.Screen
        name={router.USER_INFO_SCREEN}
        component={common[router.USER_INFO_SCREEN]}
      />

      <CommonStack.Screen
        name={router.MESSAGING_SCREEN}
        component={common[router.MESSAGING_SCREEN]}
      />
    </CommonStack.Navigator>
  );
};

export default CommonNavigation;
