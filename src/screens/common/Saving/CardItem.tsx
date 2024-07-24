import {View, Text} from 'react-native';
import React, {memo} from 'react';
import {color} from '@theme/index';
import {getRandomPredefinedColor} from '@utils/helper';

const CardItem = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 176,
        borderRadius: 10,
        marginBottom: 12,
        backgroundColor: getRandomPredefinedColor(),
      }}>
      <Text>CardItem</Text>
    </View>
  );
};

export default memo(CardItem);
