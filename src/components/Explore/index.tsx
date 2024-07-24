import {View, Text, Pressable, ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {ExploreData} from '@utils/fake';
import {color} from '@theme/index';
import {width} from '@utils/response';

const Explore = () => {
  const [focusedItem, setFocusedItem] = useState<string | number>('');

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {ExploreData.map(item => {
          const isFocused = item.id === focusedItem;
          return (
            <Pressable
              style={[styles.pressable, isFocused && styles.pressableFocused]}
              key={item?.id.toString()}
              onPress={() => setFocusedItem(item?.id)}>
              <Text style={[styles.text, isFocused && styles.textFocused]}>
                {item.title}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    marginVertical: 24,
    backgroundColor: color.white,
  },
  pressable: {
    width: 124,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: color.primaryBorder,
    marginLeft: 12,
  },
  pressableFocused: {
    borderColor: color.blue_1,
    backgroundColor: color.blue_1,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: color.secondText,
  },
  textFocused: {
    color: color.white,
  },
});

export default Explore;
