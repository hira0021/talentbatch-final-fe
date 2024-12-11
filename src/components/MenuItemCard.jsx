import { Button } from 'antd';
import React, { useState } from 'react';
import AddToCartModal from './AddToCartModal';
import { ShoppingCartOutlined } from '@ant-design/icons';

const MenuItemCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);

  const handleAddToCartClick = () => {
    setIsModalActive(true);
  };

  const handleCloseModal = () => {
    setIsModalActive(false);
  };

  return (
    <>
      <div
        style={{
          ...styles.card,
          ...(isHovered ? styles.cardHover : {}),
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={item.imgUrl} alt={item.menu_name} style={styles.image} />
        <h2 style={styles.title}>{item.menu_name}</h2>
        <p style={styles.price}>Price: Rp{item.price}</p>
        <p style={styles.detail}>{item.description}</p>
        <Button
          icon={<ShoppingCartOutlined />}
          style={{
            background: '#0d8509',
            color: 'white'
          }}
          onClick={handleAddToCartClick}
        >
          Add To Cart
        </Button>
      </div>
      <AddToCartModal
        isActive={isModalActive}
        onClose={handleCloseModal}
        item={item}
      />
    </>
  );
};

const styles = {
  card: {
    height: '340px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '16px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
  image: {
    width: '100%',
    height: '40%',
    borderRadius: '10px',
    objectFit: 'cover',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '8px 0',
  },
  price: {
    color: '#555',
    fontWeight: '600',
  },
  detail: {
    color: '#777',
    fontSize: '14px',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
    lineClamp: 3,
    textOverflow: 'ellipsis',
    textAlign: 'start',
  },
};

export default MenuItemCard;
