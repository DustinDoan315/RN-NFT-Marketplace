import router from '@navigation/router';
import HomeScreen from './Home';
import AddScreen from './Add';
import ChatScreen from './Chat';

export const bottom: any = {
  [router.HOME_SCREEN]: HomeScreen,
  [router.ADD_SCREEN]: AddScreen,
  [router.CHAT_SCREEN]: ChatScreen,
};
