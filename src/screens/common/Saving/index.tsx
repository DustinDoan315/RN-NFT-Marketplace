import {View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import HeaderTitle from '@components/HeaderTitle';
import CardItem from './CardItem';
import {FlashList, useBlankAreaTracker} from '@shopify/flash-list';

const Saving = () => {
  const ref = useRef(null);
  const [blankAreaTrackerResult, onBlankArea] = useBlankAreaTracker(ref);

  useEffect(() => {
    return () => {
      console.log('On blank area: ', blankAreaTrackerResult);
    };
  }, []);

  return (
    <View>
      <HeaderTitle title={'Saving'} />

      <View style={{width: '100%', height: '100%'}}>
        <FlashList
          ref={ref}
          keyExtractor={(_, index) => index.toString()}
          estimatedItemSize={20}
          data={Array(10000).fill(true)}
          renderItem={({item, index}) => {
            return <CardItem />;
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

export default Saving;
