import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { cartState, userProgressState, checkoutFormState } from '../../store/atoms';
import Modal from './Modal';
import { currencyFormatter } from '../../util/formatting';
import Input from './Input';
import Button from './Button';

export default function Checkout() {
  const cart = useRecoilValue(cartState); // Get cart state
  const userProgress = useRecoilValue(userProgressState); // Get user progress state
  const setUserProgress = useSetRecoilState(userProgressState); // Function to update user progress state
  const [formData, setFormData] = useRecoilState(checkoutFormState); // Get and set form data

  // Calculate the total price of items in the cart
  const totalPrice = cart.items.reduce((total, item) => total + item.quantity * item.price, 0);

  // Function to close the checkout modal
  function handleClose() {
    setUserProgress(null); // Set userProgress to null or any other state to close the checkout modal
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log(formData);
  }

  // Update form data
  function handleInputChange(event) {
    const { id, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value,
    }));
  }

  return (
    <Modal open={userProgress === 'checkout'} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(totalPrice)}</p>

        <Input
          label="Full Name"
          type="text"
          id="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
        />
        <Input
          label="E-mail Address"
          type="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <Input
          label="Street"
          type="text"
          id="street"
          value={formData.street}
          onChange={handleInputChange}
        />
        <div className='control-row'>
          <Input
            label="Postal Code"
            type="text"
            id="postalCode"
            value={formData.postalCode}
            onChange={handleInputChange}
          />
          <Input
            label="City"
            type="text"
            id="city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </div>
        <p className='modal-actions'>
          <Button type="button" textOnly onClick={handleClose}>Close</Button>
          <Button type="submit">Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
