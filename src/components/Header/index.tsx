import React from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import {icons} from '@assets/index';
import {color} from '@theme/index';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Image
          source={icons.avatar_2}
          style={styles.avatar}
          resizeMode="contain"
        />
        <View style={styles.textContainer}>
          <Text style={styles.greetingText}>Good Morning!</Text>
          <Text style={styles.nameText}>Dustin Doan</Text>
        </View>
      </View>
      <Pressable>
        <Image
          source={icons.bell_on}
          style={styles.bellIcon}
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: 60,
    width: '100%',
    backgroundColor: color.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
  },
  textContainer: {
    marginLeft: 12,
  },
  greetingText: {
    fontSize: 12,
    color: color.primaryText,
  },
  nameText: {
    fontSize: 18,
    fontWeight: '500',
    color: color.primaryText,
  },
  bellIcon: {
    width: 24,
    height: 24,
  },
});

export default Header;
