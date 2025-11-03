import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Determine which links to show based on current page
  const getLinks = () => {
    if (currentPath === '/') {
      // Home page: show Gallery and Special
      return [
        { to: '/gallery', label: 'Gallery' },
        { to: '/Adobe', label: 'Special' }
      ];
    } else if (currentPath === '/gallery') {
      // Gallery page: show Home and Special
      return [
        { to: '/', label: 'Home' },
        { to: '/Adobe', label: 'Special' }
      ];
    } else if (currentPath === '/Adobe') {
      // Special page: show Home and Gallery
      return [
        { to: '/', label: 'Home' },
        { to: '/gallery', label: 'Gallery' }
      ];
    }
    // Default: show all links
    return [
      { to: '/', label: 'Home' },
      { to: '/gallery', label: 'Gallery' },
      { to: '/Adobe', label: 'Special' }
    ];
  };

  const links = getLinks();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {links.map((link, index) => (
          <React.Fragment key={link.to}>
            <Link
              to={link.to}
              className={`${styles.navLink} ${currentPath === link.to ? styles.active : ''}`}
            >
              {link.label}
            </Link>
            {index < links.length - 1 && <span className={styles.separator}>|</span>}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

