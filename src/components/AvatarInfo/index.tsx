import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {icons} from '@assets/index';
import {color} from '@theme/index';

type AvatarInfoProps = {
  name: string;
  avatar: any;
};

const AvatarInfo = ({name, avatar}: AvatarInfoProps) => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 12,
      }}>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Image
          resizeMode="contain"
          source={avatar}
          style={{
            width: 64,
            height: 64,
            marginRight: 24,
          }}
        />

        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: color.primaryText,
          }}>
          {name}
        </Text>
      </View>

      <Pressable>
        <Image
          resizeMode="contain"
          source={icons.more_black}
          style={{
            width: 24,
            height: 24,
          }}
        />
      </Pressable>
    </View>
  );
};

export default AvatarInfo;
