import React, { useState } from 'react';
import { Drawer } from 'antd';
import logo from '../assets/logo.png';
import cart from '../assets/cart.png';
import CartDrawer from './CartDrawer';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <nav style={styles.nav}>
        <ul style={styles.navLinks}>
          <a href="/" style={styles.link}>
            <img src={logo} alt="Logo" style={{ height: '40px', filter: 'invert(1)' }} />
            <span style={styles.logoText}>D'Angkringan</span>
          </a>
        </ul>
        <ul style={styles.navLinks}>
          <li>
            <button onClick={handleOpenDrawer} style={styles.cartButton}>
              <img src={cart} alt="Cart" style={{ height: '25px', filter: 'invert(1)' }} />
            </button>
          </li>
        </ul>
      </nav>

      <CartDrawer open={isDrawerOpen} onClose={handleCloseDrawer} />
    </>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#0d8509',
    color: 'white',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  logoText: {
    color: 'white',
    alignContent: 'center',
    marginLeft: 10,
  },
  cartButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
  },
};

export default Navbar;
