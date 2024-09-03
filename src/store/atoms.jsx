import { atom } from 'recoil';

export const cartState = atom({
  key: 'cartState',
  default: {
    items: [],
  },
});

export const userProgressState = atom({
  key: 'userProgressState',
  default: '',
});
