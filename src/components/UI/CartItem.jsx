// src/components/UI/CartItem.jsx

import React from 'react';
import { currencyFormatter } from '../../util/formatting';

export default function CartItem({ name, quantity, price, onIncrease, onDecrease }) {
  return (
    <li className="cart-item">
      <div>
        <p>
          {name} - {quantity} x {currencyFormatter.format(price)}
        </p>
        <div className="cart-item-actions">
          <button onClick={onDecrease}>-</button>
          <span>{quantity}</span>
          <button onClick={onIncrease}>+</button>
        </div>
      </div>
    </li>
  );
}
