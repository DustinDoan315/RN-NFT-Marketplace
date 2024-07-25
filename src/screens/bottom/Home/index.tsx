import {View, StyleSheet} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {color} from '@theme/index';
import Header from '@components/Header';
import Explore from '@components/Explore';
import {FlashList, useBlankAreaTracker} from '@shopify/flash-list';
import NftCard from '@components/NftCard';
import {NftCardList} from '@utils/fake';

const HomeScreen = () => {
  const ref = useRef(null);
  const [blankAreaTrackerResult, onBlankArea] = useBlankAreaTracker(ref);

  useEffect(() => {
    return () => {
      console.log('On blank area: ', blankAreaTrackerResult);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={{width: '100%', height: '100%'}}>
        <FlashList
          ref={ref}
          keyExtractor={(_, index) => index.toString()}
          estimatedItemSize={20}
          data={NftCardList}
          ListHeaderComponent={() => {
            return (
              <View>
                <Header />
                <Explore />
              </View>
            );
          }}
          renderItem={({item, index}) => {
            return <NftCard item={item} index={index} />;
          }}
          onBlankArea={onBlankArea}
          contentContainerStyle={{
            paddingHorizontal: 12,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: color.white,
  },
});

export default HomeScreen;
