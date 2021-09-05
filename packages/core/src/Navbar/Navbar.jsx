import React from 'react';
import { ActionSelector } from './ActionSelector';
import cl from './Navbar.module.css';

export function Navbar(props) {
  const { children } = props;

  return (
    <header className={cl.navbar}>
      <div className={cl.logoContainer}>Logo</div>
      <nav className={cl.navlinkContainer}>Important Links</nav>
      <div className={cl.actionSelectorContainer}>
        <ActionSelector />
      </div>
      <div className={cl.actionsContainer}>
        <div>{children}</div>
        <div>
          <button>Logout Button</button>
        </div>
      </div>
    </header>
  );
}
