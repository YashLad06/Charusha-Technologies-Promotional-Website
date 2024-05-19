import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from "react-icons/md";

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let prevScrollPos = window.pageYOffset;

  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPosition;

    setIsVisible(visible);
    prevScrollPos = currentScrollPosition;
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <nav
      className='app__navbar'
      style={{top: 0, position: 'fixed', visibility: isVisible ? 'visible' : 'hidden' }}
    >
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="app logo" />
        <p className='app__navbar-name'>Charusha Technologies Pvt. Ltd.</p>
      </div>
      <ul className='app__navbar-links'>
        <li className='app__navbar-p'><a href="#home">Home</a></li>
        <li className='app__navbar-p'><a href="#about">About</a></li>
        <li className='app__navbar-p'><a href="#product">Product</a></li>
        <li className='app__navbar-p'><a href="#speciality">Services</a></li>
        <li className='app__navbar-p'><a href="#feedback">Feedback</a></li>
        <li className='app__navbar-p'><a href="#contact">Contact</a></li>
      </ul>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='var(--color-black)' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-buttom'>
            <MdClose fontSize={30} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><a href="#home">Home</a></li>
              <li className='p__opensans'><a href="#about">About</a></li>
              <li className='p__opensans'><a href="#product">Product</a></li>
              <li className='p__opensans'><a href="#speciality">Services</a></li>
              <li className='p__opensans'><a href="#feedback">Feedback</a></li>
              <li className='p__opensans'><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;