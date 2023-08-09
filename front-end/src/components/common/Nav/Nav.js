import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Wrapper } from './NavStyle';
import Image from 'react-bootstrap/esm/Image';
import logo from '../../../assets/img/logo.png';
import { BebasNeue } from '../Fonts/BebasNeue';
import arrow from '../../../assets/img/arrow.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <Wrapper>
      <BebasNeue>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <Image style={{ width: '75px', height: 'auto' }} src={logo} />
              TERMITOMATOR
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <FontAwesomeIcon
                style={{ color: 'white', fontSize: '2rem' }}
                icon={click ? faTimes : faBars}
              />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              {/* <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Our team
                </Link>
              </li> */}

              <li>
                <Link
                  to="/"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  SIGN UP
                </Link>
              </li>
            </ul>
            {button && (
              <a style={{ textDecoration: 'none' }} href="/sign-up">
                <button className="sign-up align-items-center d-flex justify-content-center">
                  SIGN UP
                  <img
                    className="arrow-style"
                    height="auto"
                    width="42vw"
                    src={arrow}
                    alt="Arrow"
                  />
                </button>
              </a>
            )}
          </div>
        </nav>
      </BebasNeue>
    </Wrapper>
  );
}

export default Navbar;
