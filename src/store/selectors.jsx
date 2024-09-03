import { selector } from 'recoil';
import { cartState } from './atoms';
import { currencyFormatter } from '../util/formatting';
export const cartTotalSelector = selector({
  key: 'cartTotalSelector',
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.items.reduce((total, item) => total + item.quantity * item.price, 0);
  },
});
