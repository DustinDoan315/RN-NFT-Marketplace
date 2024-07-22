import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import router from './router';

const CommonStack = createNativeStackNavigator();

const CommonNavigation = () => {
  return (
    <CommonStack.Navigator
      screenOptions={{headerShown: false}}></CommonStack.Navigator>
  );
};

export default CommonNavigation;
