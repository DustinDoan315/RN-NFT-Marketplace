import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {color} from '@theme/index';
import {icons} from '@assets/index';
import {formatPrice} from '@utils/helper';

type ChildType = {
  title: string;
  price: number | string;
  progress: number;
  progressColor: string;
  index: number;
};

const ChildItem = ({
  title = 'Iphone 13',
  price = 999,
  progress = 0.5,
  progressColor = color.primary,
  index,
}: ChildType) => {
  return (
    <View style={[styles.container, {marginLeft: index % 2 !== 0 ? 20 : 0}]}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Image
          source={icons.arrow_right}
          style={styles.arrow}
          resizeMode="contain"
        />
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{formatPrice(+price)}</Text>
      </View>
      <View style={styles.progressBarContainer}>
        <View
          style={[
            styles.progressBar,
            {
              width: `${progress * 100}%`,
              backgroundColor: progressColor,
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    width: 156,
    height: 100,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: color.real_white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 12,
    color: color.dark_light_2,
  },
  arrow: {
    width: 16,
    height: 16,
  },
  priceContainer: {
    marginTop: 12,
  },
  price: {
    fontSize: 16,
    color: color.dark,
    fontWeight: 'bold',
  },
  progressBarContainer: {
    marginTop: 12,
    height: 6,
    width: '100%',
    backgroundColor: color.white,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 3,
  },
});

export default ChildItem;
