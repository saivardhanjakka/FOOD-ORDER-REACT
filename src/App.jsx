import React from 'react';
import Header from './components/Header';
import Meals from './components/Meals';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Header />
      <Meals />
      <Cart />
      <Checkout />
    </RecoilRoot>
  );
}

export default App;
