import React from 'react';
import { Modal, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const AddToCartModal = ({ isActive, onClose, item }) => {
  const handleConfirm = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...cart, item];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`${item.menu_name} has been added to the cart!`);
    onClose();
  };

  return (
    <Modal
      title="Add to Cart"
      centered
      open={isActive}
      onCancel={onClose}
      footer={[
        <Button
          key="cancel"
          onClick={onClose}
        >
          Cancel
        </Button>,
        <Button
          key="ok"
          type="primary"
          onClick={handleConfirm}
          style={styles.okButton}
          icon={<PlusOutlined />}
        >
          Add
        </Button>,
      ]}
    >
      <div style={styles.modalContent}>
        <img src={item.imgUrl} alt={item.menu_name} style={styles.image} />
        <div style={styles.itemDetails}>
          <p style={styles.menuName}>{item.menu_name}</p>
          <p style={styles.price}>Price: Rp{item.price}</p>
          <p style={styles.description}>{item.description}</p>
        </div>
      </div>
    </Modal>
  );
};

const styles = {
  modalContent: {
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  itemDetails: {
    textAlign: 'left',
  },
  menuName: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  price: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '10px',
  },
  description: {
    fontSize: '14px',
    color: '#777',
  },
  okButton: {
    backgroundColor: '#0d8509',
    color: '#fff',
    borderColor: '#0d8509',
  },
};

export default AddToCartModal;
