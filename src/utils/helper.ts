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
  wallet: 'Wallet',
  chart: 'Chart',
  user: 'User',
};

export const getIcon = (name: string, focused: boolean) => {
  switch (name) {
    case screenName.home:
      return focused ? icons.home_focus : icons.home;
    case screenName.wallet:
      return focused ? icons.wallet_focus : icons.wallet;
    case screenName.chart:
      return focused ? icons.chart : icons.chart;
    case screenName.user:
      return focused ? icons.user : icons.user;
    default:
      return icons.home;
  }
};

export const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};
