import {View, Text, Image} from 'react-native';
import React from 'react';
import {color} from '@theme/index';
import {icons} from '@assets/index';

const BidHistoryList = ({item, index}: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 86,
        width: '100%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={icons.avatar_2}
          resizeMode="contain"
          style={{
            width: 40,
            height: 40,
            marginRight: 12,
          }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: color.primaryText,
          }}>
          Dustin {index + 1}
        </Text>
      </View>

      <Text
        style={{
          fontSize: 18,
          fontWeight: '500',
          color: color.primaryText,
        }}>
        {0.09} ETH
      </Text>
    </View>
  );
};

export default BidHistoryList;
