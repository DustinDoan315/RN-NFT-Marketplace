import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {color} from '@theme/index';
import Header from '@components/Header';
import TotalBalance from '@components/TotalBalance';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: color.primaryText,
        }}>
        <Header />
        <TotalBalance />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: color.white,
  },
});

export default HomeScreen;
