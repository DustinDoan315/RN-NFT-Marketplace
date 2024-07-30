import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from '@utils/styles';
import {icons} from '@assets/index';

export default function MessageComponent({item, showAvatar, user}: any) {
  const status = item.user !== user;

  return (
    <View>
      <View
        style={
          status
            ? styles.mmessageWrapper
            : [styles.mmessageWrapper, {alignItems: 'flex-end'}]
        }>
        {showAvatar && (
          <Image
            resizeMode="contain"
            source={icons.avatar_2}
            style={{
              width: 24,
              height: 24,
              marginBottom: 5,
            }}
          />
        )}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={
              status
                ? styles.mmessage
                : [styles.mmessage, {backgroundColor: 'rgb(194, 243, 194)'}]
            }>
            <Text>{item.text}</Text>
          </View>
        </View>
        <Text style={{marginLeft: 40}}>{item.time}</Text>
      </View>
    </View>
  );
}
