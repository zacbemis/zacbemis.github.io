import { FC } from 'react';
import { Link } from 'react-router-dom';
import { HeaderProps } from './types';
import styles from './Header.module.css';

const Header: FC<HeaderProps> = ({ navItems, currentPath }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`${styles.navLink} ${
              currentPath === item.path ? styles.active : ''
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header; 