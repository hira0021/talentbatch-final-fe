import React, { useState, useEffect } from 'react';
import { Drawer, Button } from 'antd';
import { DeleteOutlined, DollarOutlined } from '@ant-design/icons';

const CartDrawer = ({ open, onClose }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCartItems);
  }, [open, onClose]);

  const handleClearCart = () => {
    localStorage.removeItem('cart');
    setCartItems([]);
  };

  return (
    <Drawer
      title="Your Cart"
      width={400}
      onClose={onClose}
      open={open}
      footer={null}
      bodyStyle={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}
    >
      <Button
        onClick={handleClearCart}
        type="primary"
        danger
        style={styles.clearCartButton}
        icon={<DeleteOutlined />}
      >
        Clear Cart
      </Button>

      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} style={styles.cartItem}>
            <img
              src={item.imgUrl}
              alt={item.menu_name}
              style={styles.cartImage}
            />
            <div style={styles.cartItemDetails}>
              <h3 style={styles.cartItemName}>{item.menu_name}</h3>
              <p style={styles.cartItemPrice}>Rp{item.price}</p>
            </div>
          </div>
        ))
      )}

      <Button
        type="primary"
        style={styles.buyButton}
        disabled={cartItems.length === 0}
        icon={<DollarOutlined />}
      >
        Buy Now
      </Button>
    </Drawer>
  );
};

const styles = {
  cartItem: {
    display: 'flex',
    marginBottom: '16px',
    alignItems: 'center',
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  cartImage: {
    width: '50px',
    height: '50px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginRight: '10px',
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemName: {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '0',
  },
  cartItemPrice: {
    color: '#555',
    fontWeight: '600',
    margin: '0',
    padding: '0',
  },
  clearCartButton: {
    position: 'absolute',
    top: '12px',
    right: '20px',
    zIndex: 1000,
  },
  buyButton: {
    marginTop: 'auto',
    width: '100%',
    backgroundColor: '#0d8509',
  },
};

export default CartDrawer;
