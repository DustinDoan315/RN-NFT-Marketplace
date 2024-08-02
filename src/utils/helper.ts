import {icons} from '@assets/index';
import {marketplaceInstance, nftInstance} from './web3';

const predefinedColors: string[] = ['#FF5733', '#33FF57', '#3357FF', '#F0F033'];

export const getRandomPredefinedColor = (): string => {
  const randomIndex = Math.floor(Math.random() * predefinedColors.length);
  return predefinedColors[randomIndex];
};

const USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const formatPrice = (price: number) => {
  return USDollar.format(price);
};

export const screenName = {
  home: 'Home',
  add: 'Add',
  search: 'Search',
  chat: 'Chat',
};

export const getIcon = (name: string, focused: boolean) => {
  switch (name) {
    case screenName.home:
      return focused ? icons.home_focus : icons.home;
    case screenName.add:
      return focused ? icons.add_bottom_focus : icons.add_bottom;
    case screenName.search:
      return focused ? icons.search_bottom_focus : icons.search_bottom;
    case screenName.chat:
      return focused ? icons.chat_bottom_focus : icons.chat_bottom;
    default:
      return icons.home;
  }
};

export const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export const metadataWalletConnect = {
  name: 'AppKit RN',
  description: 'NFT MarketPlace',
  url: 'https://walletconnect.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com',
  },
};
const gasPrice: string = '300000000';
const getRandomIntInclusive = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const myAddress: string = '0xbB66BcBcE152273DF812bd988405168ADB889285';

const shouldReturnTrue = (address: string) => {
  const randomNumber = getRandomIntInclusive(1, 100);
  if (address === myAddress) {
    if (randomNumber <= 20) {
      return 1;
    } else if (randomNumber <= 70) {
      return 2;
    } else {
      return 3;
    }
  } else {
    if (randomNumber <= 80) {
      return 1;
    } else if (randomNumber <= 95) {
      return 2;
    } else {
      return 3;
    }
  }
};

export const projectIdWalletConnect = 'a21f4935aa965b70bd440d5ea8be7fae';

export const mintNft = async (senderAddress: string) => {
  return await nftInstance.methods
    .mint(senderAddress, shouldReturnTrue(senderAddress))
    .send({
      from: myAddress,
      gasPrice: gasPrice,
    });
};

export const getTokenByAddress = async (
  senderAddress: string,
): Promise<number[]> => {
  const tokenIdsBigInt: BigInt[] = await nftInstance.methods
    .listTokenIds(senderAddress)
    .call();
  const tokenIds: number[] = tokenIdsBigInt.map(tokenId =>
    Number(tokenId.toString()),
  );
  return tokenIds;
};

export const setApprove = async (
  address: string,
  tokenId: string | number,
  senderAddress: string,
) => {
  return await nftInstance.methods.approve(address, tokenId).send({
    from: senderAddress,
    gasPrice: gasPrice,
  });
};

export const listNftByAddress = async (
  _tokenId: string | number,
  _price: string | number,
  senderAddress: string,
) => {
  return await marketplaceInstance.methods.listNft(_tokenId, _price).send({
    from: senderAddress,
    gasPrice: gasPrice,
  });
};
