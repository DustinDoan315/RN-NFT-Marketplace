import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {color} from '@theme/index';
import Header from '@components/Header';
import TotalBalance from '@components/TotalBalance';
import Saving from '@components/Saving';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: color.primaryText,
        }}>
        <Header />
        <TotalBalance />
        <Saving />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    paddingHorizontal: 24,
    backgroundColor: color.white,
  },
});

export default HomeScreen;
