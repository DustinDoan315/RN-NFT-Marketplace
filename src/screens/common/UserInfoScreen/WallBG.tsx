import {View, Text, Image} from 'react-native';
import React from 'react';
import {icons} from '@assets/index';
import {color} from '@theme/index';
import {height} from '@utils/response';

interface WallBGProps {
  avatarImage: any;
  name: string;
  desc: string;
  bgImage: any;
}
const WallBG = ({
  avatarImage = icons.avatar_2,
  name = 'Dustin Doan',
  desc = 'A Mobile Dev',
  bgImage = icons.bg_img,
}: WallBGProps) => {
  return (
    <View>
      <Image
        resizeMode="contain"
        source={bgImage}
        style={{
          width: '100%',
          height: 119,
        }}
      />

      <View
        style={{
          width: '100%',
          alignItems: 'center',
          marginTop: -height * 0.06,
        }}>
        <Image
          resizeMode="contain"
          source={avatarImage}
          style={{
            width: 64,
            height: 64,
          }}
        />
        <Text
          style={{
            fontSize: 18,
            color: color.primaryText,
            fontWeight: '500',
          }}>
          {name}
        </Text>

        <Text
          style={{
            fontSize: 18,
            color: color.secondText,
            fontWeight: '500',
          }}>
          {desc}
        </Text>
      </View>
    </View>
  );
};

export default WallBG;
