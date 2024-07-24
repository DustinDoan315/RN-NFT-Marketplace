import {View, Text} from 'react-native';
import React from 'react';
import {color} from '@theme/index';

const Description = () => {
  return (
    <View
      style={{
        marginVertical: 12,
      }}>
      <Text
        style={{
          fontSize: 24,
          color: color.primaryText,
          fontWeight: 'bold',
        }}>
        The Coin Connect
      </Text>
      <Text
        style={{
          marginTop: 16,
          fontSize: 16,
          color: color.secondText,
        }}>
        Together with my design team, we designed this futuristic Cyberyacht
        concept artwork. We wanted to create something that has not been created
        yet, so we started to collect ideas of how we imagine the Cyberyacht
        could look like in the future.
      </Text>
    </View>
  );
};

export default Description;
