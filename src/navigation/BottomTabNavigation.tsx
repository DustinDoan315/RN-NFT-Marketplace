/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

import router from './router';
import {bottom} from '@screens/bottom';
import {color} from '@theme/index';
import {getIcon, screenName} from '@utils/helper';
import BottomSheet from '@components/BottomSheet';
const Tab = createBottomTabNavigator();

const TabButton: React.FC<
  | {
      name: string;
      onPress: () => void;
      accessibilityState: any;
    }
  | any
> = ({name, onPress, accessibilityState}) => {
  const focused = accessibilityState?.selected;

  return (
    <Pressable
      testID={'bottomBarContainer'}
      onPress={onPress}
      style={styles.container}>
      <Image
        source={getIcon(name, focused)}
        style={{
          width: 24,
          height: 24,
        }}
      />
    </Pressable>
  );
};
const NullComponent = () => null;

const BottomContainer = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName={router.HOME_SCREEN}
        backBehavior="initialRoute"
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            height: 64,
            paddingBottom: 0,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            backgroundColor: color.real_white,
          },
        }}>
        <Tab.Screen
          name={router.HOME_SCREEN}
          component={bottom[router.HOME_SCREEN]}
          options={{
            tabBarShowLabel: false,
            tabBarButton: (props: any) => (
              <TabButton {...props} name={screenName.home} />
            ),
            headerLeft: NullComponent,
          }}
        />

        <Tab.Screen
          name={'1'}
          component={bottom[router.HOME_SCREEN]}
          options={{
            tabBarShowLabel: false,
            tabBarButton: (props: any) => (
              <TabButton {...props} name={screenName.wallet} />
            ),
            headerLeft: NullComponent,
          }}
        />

        <Tab.Screen
          name={'2'}
          component={bottom[router.HOME_SCREEN]}
          options={{
            tabBarShowLabel: false,
            tabBarButton: (props: any) => (
              <TabButton {...props} name={screenName.chart} />
            ),
            headerLeft: NullComponent,
          }}
        />

        <Tab.Screen
          name={'3'}
          component={bottom[router.HOME_SCREEN]}
          options={{
            tabBarShowLabel: false,
            tabBarButton: (props: any) => (
              <TabButton {...props} name={screenName.user} />
            ),
            headerLeft: NullComponent,
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BottomContainer;
