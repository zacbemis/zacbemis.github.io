import { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import { NavItem } from '../../types/common';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

const Layout: FC = () => {
  const location = useLocation();

  return (
    <div className="app-container">
      <Header navItems={navItems} currentPath={location.pathname} />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout; 