import React from 'react';
import Cart from './Cart';

class OnlineShopping extends React.Component {
  render() {
    const cartItems = [
      { itemname: 'Laptop', price: 50000 },
      { itemname: 'Smartphone', price: 25000 },
      { itemname: 'Headphones', price: 1500 },
      { itemname: 'Shoes', price: 3000 },
      { itemname: 'Backpack', price: 1200 },
    ];

    return (
      <div>
        <h1>Online Shopping Cart</h1>
        {cartItems.map((item, index) => (
          <Cart key={index} itemname={item.itemname} price={item.price} />
        ))}
      </div>
    );
  }
}

export default OnlineShopping;
