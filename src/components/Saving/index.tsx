import {View, Text, FlatList, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {color} from '@theme/index';
import ChildItem from './ChildItem';
import {getRandomPredefinedColor} from '@utils/helper';
import {commonRoot} from '@navigation/NavigationRef';
import router from '@navigation/router';

const Saving = () => {
  const handleSeeAll = () => {
    commonRoot.navigate(router.SAVING_SCREEN);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Savings</Text>
        <Pressable onPress={handleSeeAll}>
          <Text style={styles.headerLink}>See All</Text>
        </Pressable>
      </View>
      <View
        style={{
          width: '100%',
        }}>
        <FlatList
          scrollEnabled={false}
          numColumns={2}
          data={[1, 2, 3, 4]}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={styles.listContainer}
          columnWrapperStyle={styles.columnWrapper}
          renderItem={({item, index}) => (
            <ChildItem
              index={index}
              progressColor={getRandomPredefinedColor()}
              progress={0.4}
              title={`Iphone 13 Mini ${index + 1}`}
              price={699}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    backgroundColor: color.white,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: color.primaryText,
  },
  headerLink: {
    fontSize: 14,
    fontWeight: '600',
    color: color.blue_1,
  },
  listContainer: {
    backgroundColor: color.white,
    alignItems: 'center',
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
});

export default Saving;
