import React from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import {icons} from '@assets/index';
import {color} from '@theme/index';
import {root} from '@navigation/NavigationRef';

type HeaderProps = {
  title: string;
  rightIcon?: any;
};

const HeaderTitle = ({title, rightIcon}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => root.goBack()} style={styles.leftSection}>
        <Image
          source={icons.arrow_back}
          style={styles.icon}
          resizeMode="contain"
        />
      </Pressable>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      {rightIcon && (
        <Pressable>
          <Image source={rightIcon} style={styles.icon} resizeMode="contain" />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: 60,
    width: '100%',
    paddingHorizontal: 12,
    backgroundColor: color.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  textContainer: {},
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: color.primaryText,
  },
});

export default HeaderTitle;
