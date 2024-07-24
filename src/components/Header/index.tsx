import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {icons} from '@assets/index';
import {color} from '@theme/index';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>
          Explore the best NFT art in the world
        </Text>
      </View>
      <View style={styles.leftSection}>
        <Image
          source={icons.avatar_2}
          style={styles.avatar}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: 60,
    width: '100%',
    backgroundColor: color.white,
    paddingHorizontal: 12,
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
    maxWidth: '50%',
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color.primaryText,
  },
});

export default Header;
