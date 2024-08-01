import {View} from 'react-native';
import React from 'react';
import {useAppSelector} from '@redux/hooks';
import {RootState} from '@redux/store';
import {FlashList} from '@shopify/flash-list';
import {CollectionNFT, HeaderTitle} from '@components/index';
import {icons} from '@assets/index';

const ListNFTs = () => {
  const wallet = useAppSelector((state: RootState) => state.wallet);

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 12,
      }}>
      <View style={{width: '100%', height: '100%'}}>
        <HeaderTitle title={'List NFTs'} rightIcon={icons.more_black} />
        <FlashList
          data={wallet?.listNFTs}
          numColumns={2}
          estimatedItemSize={20}
          renderItem={({item, index}) => {
            return <CollectionNFT item={item} index={index} />;
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

export default ListNFTs;
