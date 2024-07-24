import {View, Text, Image, ScrollView, SectionList} from 'react-native';
import React from 'react';
import HeaderTitle from '@components/HeaderTitle';
import AvatarInfo from '@components/AvatarInfo';
import {icons} from '@assets/index';
import Description from './Description';
import BidOption from './BidOption';
import BidHistoryList from './BidHistoryList';
import {FlashList} from '@shopify/flash-list';
import {color} from '@theme/index';

const NftDetailScreen = ({route}: any) => {
  const {image} = route.params;
  return (
    <View
      style={{
        paddingHorizontal: 12,
      }}>
      <HeaderTitle title={''} />
      <View
        style={{
          width: '100%',
          height: '100%',
        }}>
        <FlashList
          data={Array(10).fill(true)}
          estimatedItemSize={20}
          ListHeaderComponent={() => {
            return (
              <View>
                <Image
                  resizeMode="contain"
                  source={image}
                  style={{
                    width: '100%',
                    height: 400,
                  }}
                />
                <AvatarInfo name={'Dustin Doan'} avatar={icons.avatar_2} />

                <Description />

                <BidOption currentPrice={0.09} />

                <View
                  style={{
                    marginTop: 24,
                  }}>
                  <Text
                    style={{
                      fontSize: 24,
                      color: color.primaryText,
                      fontWeight: '500',
                    }}>
                    Bid History
                  </Text>
                </View>
              </View>
            );
          }}
          renderItem={({item, index}) => {
            return <BidHistoryList index={index} />;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View
                style={{
                  width: '100%',
                  height: 0.5,
                  backgroundColor: color.primaryBorder,
                }}
              />
            );
          }}
          ListFooterComponent={() => {
            return <View style={{height: 200}} />;
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default NftDetailScreen;
