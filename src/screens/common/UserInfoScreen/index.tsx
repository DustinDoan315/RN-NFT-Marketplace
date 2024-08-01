import {
  View,
  Text,
  Image,
  ScrollView,
  SectionList,
  StyleSheet,
} from 'react-native';
import React from 'react';
import HeaderTitle from '@components/HeaderTitle';
import AvatarInfo from '@components/AvatarInfo';
import {icons} from '@assets/index';
import {FlashList} from '@shopify/flash-list';
import {color} from '@theme/index';
import WallBG from './WallBG';
import Follower from './Follower';
import {CollectionNFT} from '@components/index';

const UserInfoScreen = ({route}: any) => {
  const {image} = route.params;
  return (
    <View
      style={{
        paddingHorizontal: 12,
      }}>
      <HeaderTitle isBack />
      <View
        style={{
          width: '100%',
          height: '100%',
        }}>
        <FlashList
          data={Array(10).fill(true)}
          numColumns={2}
          estimatedItemSize={20}
          ListHeaderComponent={() => {
            return (
              <View>
                <WallBG
                  name={'Dustin'}
                  avatarImage={icons.avatar_2}
                  desc={'A Mobile Dev'}
                  bgImage={icons.bg_img}
                />
                <Follower />
                <View
                  style={{
                    marginTop: 24,
                    marginBottom: 12,
                  }}>
                  <Text
                    style={{
                      fontSize: 24,
                      color: color.primaryText,
                      fontWeight: '500',
                    }}>
                    Collections
                  </Text>
                </View>
              </View>
            );
          }}
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

export default UserInfoScreen;
