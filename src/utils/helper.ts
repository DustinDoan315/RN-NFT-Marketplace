import {icons} from '@assets/index';

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
