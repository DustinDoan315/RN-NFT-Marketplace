import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {color} from '@theme/index';

const Follower = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 12,
      }}>
      <Pressable
        style={{
          width: 190,
          height: 54,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: color.blue_1,
          borderRadius: 8,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            color: color.white,
          }}>
          Follow
        </Text>
      </Pressable>

      <View style={{justifyContent: 'center'}}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '500',
            color: color.primaryText,
          }}>
          4k+
        </Text>

        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            color: color.secondText,
            marginTop: 3,
          }}>
          Followers
        </Text>
      </View>

      <View style={{justifyContent: 'center'}}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '500',
            color: color.primaryText,
          }}>
          303
        </Text>

        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            color: color.secondText,
            marginTop: 3,
          }}>
          Following
        </Text>
      </View>
    </View>
  );
};

export default Follower;
