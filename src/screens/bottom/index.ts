import router from '@navigation/router';
import HomeScreen from './Home';
import AddScreen from './Add';
import ChatScreen from './Chat';
import ListNFTsScreen from './ListNFTs';

export const bottom: any = {
  [router.HOME_SCREEN]: HomeScreen,
  [router.ADD_SCREEN]: AddScreen,
  [router.CHAT_SCREEN]: ChatScreen,
  [router.LIST_NFT_SCREEN]: ListNFTsScreen,
};
