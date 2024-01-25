import React from 'react';


const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img src="../assets/nav_logo.svg" alt="Logo" style={styles.logo} />
      </div>
      <div style={styles.navItems}>
        <span style={styles.navItem}>Home</span>
        <span style={styles.navItem}>Contact Us</span>
        <button style={styles.actionButton}>Enroll Now!</button>
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    height:'40px',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '10px',
    color: '#000',
  },
  logoContainer: {
    marginTop: '10px',
    marginRight: '20px',
  },
  logo: {
    width: '120px', // Adjust the width as needed
    height: '40px', // Adjust the height as needed
  },
  navItems: {
    display: 'flex',
    alignItems: 'center',
  },
  navItem: {
    fontWeight:'700',
    margin: '0 50px',
    cursor: 'pointer',
  },
  actionButton: {
    height: '40px',
    width: '150px',
    padding: '10px 20px',
    cursor: 'pointer',
    background: 'var(--shady-yellow, linear-gradient(180deg, #FFE52E 21.22%, #C2AA00 85.36%))',
    color: '#000',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
};

export default Navbar;
