import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {icons} from '@assets/index';
import {color} from '@theme/index';

interface BidOptionProps {
  currentPrice: number;
}

const BidOption = ({currentPrice}: BidOptionProps) => {
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 12,
          width: '100%',
          height: 64,
          borderWidth: 1,
          borderColor: color.primaryBorder,
          borderRadius: 8,
        }}>
        <Pressable>
          <Image
            source={icons.minus_bid}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </Pressable>

        <Text
          style={{
            fontSize: 24,
            color: color.primaryText,
            fontWeight: '500',
          }}>
          0.09 ETH
        </Text>

        <Pressable>
          <Image
            source={icons.add_bid}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 12,
        }}>
        <Text
          style={{
            fontSize: 16,
            color: color.secondText,
          }}>
          current bid:{' '}
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: color.primaryText,
            fontWeight: '500',
          }}>
          {currentPrice} ETH
        </Text>
      </View>

      <Pressable
        style={{
          width: '100%',
          height: 54,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
          backgroundColor: color.blue_1,
          marginVertical: 16,
        }}>
        <Text
          style={{
            fontSize: 18,
            color: color.white,
            fontWeight: '500',
          }}>
          {'Submit Bid'}
        </Text>
      </Pressable>
    </View>
  );
};

export default BidOption;
