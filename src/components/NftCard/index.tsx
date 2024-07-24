import {View, Text, Image, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {color} from '@theme/index';
import {icons} from '@assets/index';
import {commonRoot} from '@navigation/NavigationRef';
import router from '@navigation/router';
import {images} from '@utils/fake';

const NftCard = ({index}: any) => {
  const [randomImage, setRandomImage] = useState<any>(icons.nft_1);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  }, []);

  const handlePlaceBid = () => {
    commonRoot.navigate(router.NFT_DETAIL_SCREEN, {image: randomImage});
  };

  const handleSeeUserInfo = (index: number) => {
    commonRoot.navigate(router.USER_INFO_SCREEN, {user_id: index});
  };

  return (
    <View
      style={{
        width: '100%',
        borderRadius: 10,
        marginBottom: 12,
        paddingHorizontal: 12,
        paddingVertical: 12,
        backgroundColor: color.real_white,
      }}>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image
            resizeMode="contain"
            source={icons.avatar_2}
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
            Dustin Doan
          </Text>
        </View>

        <Pressable onPress={() => handleSeeUserInfo(index)}>
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

      <Image
        resizeMode="contain"
        source={randomImage}
        style={{
          width: '100%',
          height: 400,
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{
              fontSize: 16,
              color: color.secondText,
            }}>
            current bid
          </Text>

          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: color.primaryText,
            }}>
            0.08 ETH
          </Text>
        </View>

        <Pressable
          onPress={handlePlaceBid}
          style={{
            width: 124,
            height: 54,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            backgroundColor: color.blue_1,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: color.white,
            }}>
            Place Bid
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default NftCard;
