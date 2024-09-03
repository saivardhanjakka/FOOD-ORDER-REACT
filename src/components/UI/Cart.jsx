// src/components/Cart.jsx
import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { cartState } from '../store/atoms';
import { userProgressState } from '../store/atoms';
import { cartTotalSelector } from '../store/selectors';
import Button from './Button';
import Modal from './Modal';
import CartItem from './CartItem';

export default function Cart() {
  const cart = useRecoilValue(cartState);
  const setUserProgress = useSetRecoilState(userProgressState);
  const totalPrice = useRecoilValue(cartTotalSelector);

  const handleCloseCart = () => {
    setUserProgress('');
  };

  const handleGoToCheckout = () => {
    setUserProgress('checkout');
  };

  return (
    <Modal
      className="cart"
      open={userProgress === 'cart'}
      onClose={handleCloseCart}
    >
      <h2>Your Cart</h2>
      <ul>
        {cart.items.map(item => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => {
              // Handle adding item
            }}
            onDecrease={() => {
              // Handle removing item
            }}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>Close</Button>
        {cart.items.length > 0 && (
          <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
}
