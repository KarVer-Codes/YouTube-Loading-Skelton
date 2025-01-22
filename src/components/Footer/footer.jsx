import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer-con fixed-bottom d-flex flex-dlumn align-items-center d-md-none d-xs-block'
    onClick={() => alert('This feature is not available')}
    >
        <img
        src='https://res.cloudinary.com/dhahendfa/image/upload/v1737567324/footer_vr7gfi.jpg'
        className='w-100'
        alt='footer'
        />      
    </footer>
  );
}

export default Footer;
