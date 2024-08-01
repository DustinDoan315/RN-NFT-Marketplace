import React, {memo, useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {icons} from '@assets/index';
import {color} from '@theme/index';
import {width} from '@utils/response';
import {images} from '@utils/fake';

interface CollectionItemProps {
  item: any;
  index: number;
}

const CollectionNFT: React.FC<CollectionItemProps> = ({item, index}) => {
  const [randomImage, setRandomImage] = useState(icons.nft_1);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  }, []);

  return (
    <View
      style={[
        styles.container,
        {marginLeft: index % 2 !== 0 ? width * 0.018 : 0},
      ]}>
      <Image source={randomImage} resizeMode="cover" style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.currentBidText}>Current bid:</Text>
        <Text style={styles.bidAmountText}>{0.008} ETH</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 20,
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: color.primaryBorder,
    borderRadius: 8,
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    overflow: 'hidden',
  },
  textContainer: {
    marginVertical: 5,
  },
  currentBidText: {
    fontSize: 16,
    color: color.secondText,
  },
  bidAmountText: {
    fontSize: 18,
    color: color.primaryText,
    fontWeight: '500',
  },
});

export default memo(CollectionNFT);
