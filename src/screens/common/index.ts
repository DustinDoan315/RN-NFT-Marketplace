import router from '@navigation/router';
import Saving from './Saving';
import NftDetailScreen from './NftDetailScreen';
import UserInfoScreen from './UserInfoScreen';
import MessagingScreen from './Messaging';
export const common = {
  [router.SAVING_SCREEN]: Saving,
  [router.NFT_DETAIL_SCREEN]: NftDetailScreen,
  [router.USER_INFO_SCREEN]: UserInfoScreen,
  [router.MESSAGING_SCREEN]: MessagingScreen,
};
