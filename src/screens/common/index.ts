import router from '@navigation/router';
import Saving from './Saving';
import NftDetailScreen from './NftDetailScreen';

export const common = {
  [router.SAVING_SCREEN]: Saving,
  [router.NFT_DETAIL_SCREEN]: NftDetailScreen,
};
