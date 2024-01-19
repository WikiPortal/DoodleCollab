import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p> Made with ❤️ by &copy; Developers</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#1976d2',
  color:'white',
  padding: '1rem',
  textAlign: 'center',
  position: 'fixed',
  bottom: 0,
  width: '100%',
};

export default Footer;
