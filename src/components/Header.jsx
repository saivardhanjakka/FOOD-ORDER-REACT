// src/components/Header.jsx
import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userProgressState } from '../store/atoms';
import { cartState } from '../store/atoms';
import logoImg from '../assets/logo.jpg';
import Button from './Button';

export default function Header() {
  const cartItems = useRecoilValue(cartState).items;
  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const userProgress = useRecoilValue(userProgressState);
  const setUserProgress = useSetRecoilState(userProgressState);

  const handleShowCart = () => {
    setUserProgress('cart');
  };

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Restaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
